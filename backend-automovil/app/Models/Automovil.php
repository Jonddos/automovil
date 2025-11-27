<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Automovil extends Model
{
    protected $table = 'automoviles';

    protected $fillable = [
        'auto_name',
        'auto_modelo',
        'auto_marca',
        'auto_pais',
    ];
}
