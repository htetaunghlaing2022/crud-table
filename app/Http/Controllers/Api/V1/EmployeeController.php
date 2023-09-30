<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Employee;
use App\Http\Requests\StoreEmployeeRequest;
use App\Http\Resources\V1\EmployeeResource;
use App\Http\Controllers\Controller;
use App\Http\Resources\V1\EmployeeCollection;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        return new EmployeeCollection(Employee::all());
        
    }
    public function show(Employee $employee)
    {
        return new EmployeeResource($employee);
    }
    public function store(StoreEmployeeRequest $requeset)
    {
        Employee::create($requeset->validated());
        return response()->json("Employee Created");
    }
    public function update(StoreEmployeeRequest $requeset,Employee $employee)
    {
        $employee->update($requeset->validated());
        return response()->json("Employee Updated");
    }
    public function destory(Employee $employee)
    {
        $employee->delete();
    }
}
