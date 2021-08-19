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






//closeadmin

/////////////////ORG///////////////////////////////






//closeorg

/////////////////Sponsor///////////////////////////////






//closesponsor

////////////////////User////////////////////////////

Route::get('/user/transitionDetails','User\UserController@transitionDetails'); 
Route::get('/user/organizationList','User\OrganizationController@organizationList'); 
Route::get('/user/organizationDetails/{id}','User\OrganizationController@organizationDetails');
Route::get('/user/organizationFollow/{id}','User\OrganizationController@organizationFollow')->name('Organization.organizationFollow');  
Route::get('/user/followedOrganization','User\OrganizationController@followedOrganization')->name('Organization.followedOrganization'); 
Route::delete('/user/unfollowedOrganization/{id}','User\OrganizationController@unfollowedOrganization');
Route::get('/user/yourAppliedVolunteerEvents','User\EventController@yourAppliedVolunteerEvents');
Route::delete('/user/cancleVolunteerEvent/{id}','User\EventController@cancleVolunteerEvent');
Route::get('/user/categoryList','User\CategoryController@categoryList');
Route::get('/user/organizationEvents/{id}','User\OrganizationController@organizationEvents');
Route::get('/user/report/{id}','User\UserController@report')->name('User.report');
Route::post('/user/report','User\UserController@reportPost')->name('User.reportPost');  
Route::get('/user/reportReply','User\UserController@reportReply');
Route::get('/user/events','User\EventController@events')->name('Event.events');
Route::post('/user/search','User\EventController@search'); 
Route::post('/user/CategoryWiseEvent','User\EventController@CategoryWiseEvent')->name('User.CategoryWiseEvent');   
Route::get('/user/review/{id}','User\UserController@review')->name('User.review');  
Route::post('/user/review','User\UserController@reviewPost');

//closeuser