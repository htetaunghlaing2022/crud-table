<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCompanyRequest;
use App\Http\Resources\V1\CompanyCollection;
use App\Http\Resources\V1\CompanyResource;
use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function index()
    {
        return new CompanyCollection(Company::all());
    }
    public function show(Company $company)
    {
        return new CompanyResource($company);
    }
    public function store(StoreCompanyRequest $requeset)
    {
        Company::create($requeset->validated());
        return response()->json("Company Created");
    }
    public function update(StoreCompanyRequest $requeset,Company $company)
    {
        $company->update($requeset->validated());
        return response()->json("Company Updated");
    }
    public function destory(Company $company)
    {
        $company->delete();
    }
}
