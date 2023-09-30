<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request)
    {
        return [
            'id'=>$this->id,
            'Fullname'=>$this->Fullname,
            'CompanyID'=>$this->CompanyID,
            'email'=>$this->email,
            'phone'=>$this->phone
        ];
    }
}
