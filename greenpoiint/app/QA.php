<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QA extends Model
{
    protected $table = 'qa';

    protected $fillable = [
        'question', 'answer',
    ];
}
