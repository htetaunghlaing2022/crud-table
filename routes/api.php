<?php

use App\Http\Controllers\Api\v1\CompaniesController;
use App\Http\Controllers\Api\V1\CompanyController;
use App\Http\Controllers\Api\V1\EmployeeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::group(['prefix'=>'V1'], function(){
    Route::apiResource('companies',CompanyController::class);
});

Route::group(['prefix'=> 'V1'],function(){
    Route::apiResource('employees',EmployeeController::class);
});

