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
Route::post('/admin/eventCategory/update/{id}','Admin\CategoryController@Update');
Route::get('/admin/eventCategory/singleCategory/{id}','Admin\CategoryController@SingleCategory');


Route::post('/admin/createAdmin','Admin\UserController@CreateAdmin');
Route::get('/admin/manageAdmin','Admin\UserController@ManageAdmin');
Route::get('/admin/getSingleAdminData/{id}','Admin\UserController@ManageProfile');
Route::post('/admin/manageAdmin/updateStatus', 'Admin\UserController@UpdateStatus');
Route::post('/admin/manageAdmin/updateUserInfo/{id}', 'Admin\UserController@UpdateUserInfo');
Route::post('/admin/manageAdmin/deleteAdmin', 'Admin\UserController@DeleteAdmin');
Route::post('/admin/manageAdmin/makeSuperAdmin', 'Admin\UserController@MakeSuperAdmin');

//SponsorAdmin
Route::get('/admin/sponsor','Admin\SponsorController@Index');
Route::get('/admin/sponsor/accept/{id}','Admin\SponsorController@Accept');
Route::get('/admin/sponsorManage','Admin\SponsorController@ManageIndex');
Route::get('/admin/sponsor/delete/{id}','Admin\SponsorController@Delete');

Route::get('/admin/reports','Admin\ReportController@Index');
Route::post('/admin/reports/{id}','Admin\ReportController@AddReply');

Route::get('/admin/transitionList','Admin\EventController@TransitionList');

Route::get('/admin/pendingOrg','Admin\OrganizationController@PendingOrg');
Route::get('/admin/pendingOrg/accept/{id}','Admin\OrganizationController@PendingOrgAccept');
Route::get('/admin/pendingOrg/delete/{id}','Admin\OrganizationController@PendingOrgDelete');
Route::get('/admin/manageOrg','Admin\OrganizationController@ManageOrg');
Route::get('/admin/manageOrg/block/{id}', 'Admin\OrganizationController@BlockOrg');




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






//closesponsor

////////////////////User////////////////////////////







//closeuser