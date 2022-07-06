<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function addBook(Request $request)
    {

        $book = new Book();
        $book->checkIn = $request->checkin;
        $book->checkOut = $request->checkout;
        $book->user_id = $request->user_id;
        $book->room_id = $request->room_id;
        $book->total_price = $request->total_price;

        $book->save();
    }
}
