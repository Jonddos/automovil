<?php

namespace App\Http\Controllers;

use App\Models\Automovil;
use Illuminate\Http\Request;

class AutomovilController extends Controller
{
    public function index()
    {
        return Automovil::all();
    }

    public function store(Request $request)
    {
        return Automovil::create($request->all());
    }

    public function show($id)
    {
        return Automovil::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $auto = Automovil::findOrFail($id);
        $auto->update($request->all());
        return $auto;
    }

    public function destroy($id)
    {
        return Automovil::destroy($id);
    }
}
