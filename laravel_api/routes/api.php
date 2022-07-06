<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\UserController;
use App\Models\Contact;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('apirooms',[RoomController::class , 'RoomAPI']);
Route::post('addbook',[BookController::class , 'addBook']);
Route::get('contact',[ContactController::class , 'ContactAPI']);
Route::post('register', [UserController::class, 'registerAPI']);
Route::post('login', [UserController::class, 'loginAPI']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
