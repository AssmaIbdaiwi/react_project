<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\RoomController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('apirooms',[RoomController::class , 'RoomAPI']);
Route::post('addbook',[BookController::class , 'addBook']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
