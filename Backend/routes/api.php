<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
/////////////////Admin///////////////////////////////


Route::get('/admin/eventCategory','Admin\CategoryController@Index');
Route::post('/admin/eventCategory','Admin\CategoryController@CreateCategory');
Route::post('/admin/eventCategory/updateStatus','Admin\CategoryController@UpdateStatus');
Route::post('/admin/eventCategory/delete','Admin\CategoryController@Delete');
Route::post('/admin/eventCategory/update','Admin\CategoryController@Update');




//closeadmin

/////////////////ORG///////////////////////////////

Route::post('/addevent','Org\OrganizationHomeController@create');
Route::post('/addVolevent','Org\OrganizationHomeController@createVolunteerEvent');
Route::get('/eventList','Org\OrganizationHomeController@showEvents');
Route::get('/edit-event/{id}','Org\OrganizationHomeController@eventData');
Route::post('/update-event/{id}','Org\OrganizationHomeController@updateEvent');
Route::post('/delete-event/{id}','Org\OrganizationHomeController@deleteEvent');


//closeorg

/////////////////Sponsor///////////////////////////////

Route::get('/sp/allAdvertiser','Sponsor\AdvertiseController@Show');
Route::get('/sp/OngoingEvents','Sponsor\AdvertiseController@OngoingEvents');
Route::post('sp/addAdvertise','Sponsor\AdvertiseController@CreateAdd');
Route::get('/sp/SpTransactionList','Sponsor\AccountController@allTransactionList');




//closesponsor

////////////////////User////////////////////////////







//closeuser