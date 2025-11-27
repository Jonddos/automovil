<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AutomovilController;

Route::apiResource('autos', AutomovilController::class);

Route::get('paises', function () {
    $response = Http::withoutVerifying()->get(
        'https://restcountries.com/v3.1/all?fields=name,cca2'
    );

    if ($response->failed()) {
        return response()->json([
            'message' => 'No se pudieron obtener los países'
        ], 500);
    }

    return collect($response->json())->map(function ($pais) {
        return [
            'code' => $pais['cca2'] ?? '',
            'name' => $pais['name']['common'] ?? '',
        ];
    });
});
