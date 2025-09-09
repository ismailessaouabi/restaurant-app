<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\Auth\RegisterRequest;


class ApiAuthentificationController extends Controller
{
    // function to register a user with jwt token avec http only cookie
    public function register(RegisterRequest $request)
    {
        
        $validated = $request->validated();


        $user = User::create($validated);


        $token = auth()->login($user);


        return response()->json([
            'message' => 'User successfully registered',
            
        ], 201)->cookie(
            'token',         // nom du cookie
            $token,          // valeur
            60*24,           // durée en minutes (1 jour ici)
            '/',             // path
            null,            // domain
            true,            // secure (https obligatoire en prod)
            true             // httpOnly
        ); // 1 day
    }
}
