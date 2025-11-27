<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('automoviles', function (Blueprint $table) {
            $table->id('auto_id');
            $table->string('auto_name');
            $table->string('auto_modelo');
            $table->string('auto_marca');
            $table->string('auto_pais');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('automoviles');
    }
};
