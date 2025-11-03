<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\Auth\RegisterRequest;


class ApiAuthentificationController extends Controller
{
   // durée d'accès en minutes (ex: 15 minutes)
   protected $accessTTL = 15;

   // durée du refresh en jours
   protected $refreshTTLDays = 30;

   // le register : créer un utilisateur
   public function register(RegisterRequest $request){
         $data = $request->validated();
         $user = User::create([
              'name' => $data['name'],
              'email' => $data['email'],
              'role' => $data['role'],
              'password' => bcrypt($data['password']),
         ]);
    
         return response()->json(['message' => 'Utilisateur créé', 'user' => $user], 201);
   }

   // login : vérifier les identifiants et renvoyer access + refresh token
   public function login(Request $request){
       $request->validate([
           'email' => 'required|email',
           'password' => 'required|string'
       ]);

       $credentials = $request->only('email','password');

       // définir la durée du token d'accès (minutes)
       auth('api')->factory()->setTTL($this->accessTTL);

       if (! $token = auth('api')->attempt($credentials)) {
           return response()->json(['message' => 'Identifiants invalides'], 401);
       }

       $user = auth('api')->user();

       // créer un refresh token : on stocke le hash en DB et on renvoie "id|validator" au client
       $plain = Str::random(64);
       $refresh = RefreshToken::create([
           'user_id' => $user->id,
           'token' => Hash::make($plain),
           'ip' => $request->ip(),
           'user_agent' => $request->header('User-Agent'),
           'expires_at' => Carbon::now()->addDays($this->refreshTTLDays),
       ]);

       $refreshTokenToReturn = $refresh->id . '|' . $plain;

       return response()->json([
           'access_token' => $token,
           'token_type' => 'bearer',
           'expires_in' => auth('api')->factory()->getTTL() * 60,
           'refresh_token' => $refreshTokenToReturn
       ]);
   }

   // rafraîchir le token d'accès avec le refresh token
   public function refresh(Request $request){
       $request->validate(['refresh_token' => 'required|string']);

       $parts = explode('|', $request->input('refresh_token'));
       if (count($parts) !== 2) {
           return response()->json(['message' => 'Refresh token invalide'], 400);
       }

       [$id, $validator] = $parts;

       $refresh = RefreshToken::find($id);
       if (!$refresh
           || $refresh->revoked
           || $refresh->expires_at->isPast()
           || ! Hash::check($validator, $refresh->token)) {
           return response()->json(['message' => 'Refresh token invalide ou expiré'], 401);
       }

       $user = $refresh->user;

       // on révoque l'ancien refresh token (rotation)
       $refresh->update(['revoked' => true]);

       // créer un nouveau refresh token
       $plain = Str::random(64);
       $newRefresh = RefreshToken::create([
           'user_id' => $user->id,
           'token' => Hash::make($plain),
           'ip' => $request->ip(),
           'user_agent' => $request->header('User-Agent'),
           'expires_at' => Carbon::now()->addDays($this->refreshTTLDays),
       ]);
       $refreshTokenToReturn = $newRefresh->id . '|' . $plain;

       // créer un nouveau access token
       auth('api')->factory()->setTTL($this->accessTTL);
       $newAccessToken = auth('api')->login($user);

       return response()->json([
           'access_token' => $newAccessToken,
           'token_type' => 'bearer',
           'expires_in' => auth('api')->factory()->getTTL() * 60,
           'refresh_token' => $refreshTokenToReturn
       ]);
   }

  

   
}
