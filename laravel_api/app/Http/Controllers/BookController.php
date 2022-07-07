<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function addBook(Request $request)
    {

        //         $validator = Validator::make($request->all(), 
        // ['dateIn' => 'required',
        // 'dateOut' => 'required',] );
    
        // if ($validator->fails()) {
        //     return response()->json(['errors' => $validator->errors()->all()]);
        // }

        $book = new Book();
        $book->checkIn = date('Y-m-d',strtotime($request->dataIn));
        $book->checkOut = date('Y-m-d',strtotime($request->dataOut));
        $book->user_id = $request->user_id;
        $book->room_id = $request->room_id;
        $book->total_price = $request->total_price;
        

        $book->save();



    }
}
