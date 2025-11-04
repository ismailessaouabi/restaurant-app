<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    // ✅ Register
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6|confirmed',
        ]);

        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Générer un access token
        $accessToken = JWTAuth::fromUser($user);
        // Générer un refresh token (autre clé)
        $refreshToken = JWTAuth::claims(['refresh' => true])->fromUser($user);

        return response()->json([
            'user' => $user,
            'access_token' => $accessToken,
            'refresh_token' => $refreshToken,
            'token_type' => 'bearer',
        ]);
    }

    // ✅ Login
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!$accessToken = JWTAuth::attempt($credentials)) {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }

        $user = auth()->user();
        $refreshToken = JWTAuth::claims(['refresh' => true])->fromUser($user);

        return response()->json([
            'user' => $user,
            'access_token' => $accessToken,
            'refresh_token' => $refreshToken,
        ]);
    }

    // ✅ Rafraîchir le token
    public function refresh(Request $request)
    {
        try {
            $refreshToken = $request->bearerToken();
            $newAccessToken = JWTAuth::setToken($refreshToken)->refresh();

            return response()->json([
                'access_token' => $newAccessToken,
                'token_type' => 'bearer'
            ]);
        } catch (JWTException $e) {
            return response()->json(['error' => 'Invalid refresh token'], 401);
        }
    }

    // ✅ Déconnexion
    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }
}
