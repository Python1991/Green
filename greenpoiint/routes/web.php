<?php

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

Route::get('/', 'HomeController')->name('home');

Route::prefix('admin')->group(function () {
    Route::resource('news', 'NewsController');
    Route::resource('qa', 'QAController');

    Route::get('contactUs', 'ContactUsController@index')->name('contactUs.index');
    Route::get('contactUs/{contactUs}', 'ContactUsController@show')->name('contactUs.show');
    Route::delete('contactUs/{contactUs}', 'ContactUsController@destroy')->name('contactUs.destroy');
});

Route::get('news', 'NewsController@show');
Route::get('contactUs', 'ContactUsController@create')->name('contactUs.create');
Route::post('contactUs', 'ContactUsController@store')->name('contactUs.store');