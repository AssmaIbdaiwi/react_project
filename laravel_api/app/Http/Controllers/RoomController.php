<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public  function RoomAPI()
    {
        $rooms = Room::all();
        return $rooms;
    }


}
