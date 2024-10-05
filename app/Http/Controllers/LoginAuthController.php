<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class LoginAuthController extends Controller
{
    public function login(Request $request){
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $user = Auth::user();
            $token = $user->createToken('Get token')->accessToken;
            return response()->json(['success'=> true, 'token' => $token]);
        }

        return response()->json(['success'=> false, 'message'=> 'Enter a valid credentials'], Response::HTTP_NOT_FOUND);
    }

    public function user(Request $request){
        return response()->json(Auth::user());
    }

    public function destroy(Request $request){
        \Log::info($request);
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
    
}
