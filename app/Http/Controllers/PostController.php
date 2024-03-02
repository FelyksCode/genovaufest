<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index(){
        return inertia::render('Posts/Home');
    }
    public function faq(){
        return inertia::render('Posts/FAQ');
    }
    public function division(){
        return inertia::render('Posts/Division');
    }
    public function contact(){
        return inertia::render('Posts/ContactPage');
    }
    
    
}
