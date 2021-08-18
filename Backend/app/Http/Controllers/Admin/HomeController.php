<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use DB;
use App\Http\Requests;
use Session;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Carbon\Carbon;

class HomeController extends Controller
{
    public function Index(Request $request){

        
        $todayDate = Carbon::now()->subDays(1);

        $totalMoneyCollect = DB::table('event_trans_lists')->sum('amount');
        $refundMoney = DB::table('event_trans_lists')->where('status', 2)->sum('amount');
        $todayCollect = DB::table('event_trans_lists')->where('created_at', '>=', $todayDate)->sum('amount');
        $todayRefund = DB::table('event_trans_lists')->where('status', 2)->where('created_at', '>=', $todayDate)->sum('amount');
        $totalEvents = DB::table('events')->get();
        $pendingEvents = DB::table('events')->where('status', 2)->get();
        $acceptedEvents = DB::table('events')->where('status', 1)->get();
        $deactiveEvents = DB::table('events')->where('status', 0)->get();

        $totalVolunteers = DB::table('event_volunteers')->where('status', 1)->get();

        $totalAdmin = DB::table('userinfos')->where('type', 1)->get();
        $totalOrg = DB::table('userinfos')->where('type', 2)->get();
        $totalSpo = DB::table('userinfos')->where('type', 3)->get();
        $totalUser = DB::table('userinfos')->where('type', 4)->get();

        $totalSiteVisit = DB::table('sitealltrafic')->first();
        $uniqueIp = DB::table('site_unique_traficip')->get();

        if($allReports){
            return response()->json(
                $allReports,
                $totalMoneyCollect,
                $refundMoney,
                $todayCollect,
                $todayRefund,
                count($totalEvents),
                count($pendingEvents),
                count($acceptedEvents),
                count($deactiveEvents),
                count($totalVolunteers),
                count($totalAdmin),
                count($totalOrg),
                count($totalSpo),
                count($totalUser),
                $totalSiteVisit->count,
                count($uniqueIp),
            200);
        }else{
            return response()->json(['code'=>401, 'message' => 'No data Found!']);
        }
    }
}
