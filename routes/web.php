<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginAuthController;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('login', [LoginAuthController::class, 'login']);
Route::get('login', function () {
        return view('layouts.app');
});

Route::group(['middleware' => ['auth']], function () {
    Route::get('/', function () {
        return view('layouts.app');
    });
    Route::post('logout', [LoginAuthController::class, 'logout']);
});

Route::group(['middleware' => ['guest']], function () {
    //
    Route::get('/', function () {
        return view('login');
    })->name('login');

});

// Route::get('/', function () {
//     return view('layouts.app');
// });

// Route::get('/*', function () {
//     return view('layouts.app');
// })->middleware(['auth'])->name('dashboard');

// require __DIR__.'/auth.php';
