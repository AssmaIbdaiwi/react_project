<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CommentController extends Controller
{

        public  function CommentAPI()
    {
        $com = Comment::all();
        return $com;
    }

    
    public function addComment(Request $request)
    {
        
        $comment = new Comment();
        $comment->subject = $request->subject;
        $comment->save();

    }
}
