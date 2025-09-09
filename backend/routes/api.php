<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiAuthentificationController;

Route::post('/register', [ApiAuthentificationController::class, 'register']);
