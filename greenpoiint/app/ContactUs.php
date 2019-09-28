<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
    protected $fillable = [
        'company_name', 'name', 'email', 'phone', 'content'
    ];
}
