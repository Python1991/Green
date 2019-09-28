<?php

namespace App\Http\Controllers;

use App\QA;
use Illuminate\Http\Request;

class QAController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $qas = QA::all();
        return view('qa.index', compact('qas'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('qa.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        QA::create($request->input());
        return redirect()->route('qa.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\QA  $qa
     * @return \Illuminate\Http\Response
     */
    public function show(QA $qa)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\QA  $qa
     * @return \Illuminate\Http\Response
     */
    public function edit(QA $qa)
    {
        return view('qa.edit', compact('qa'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\QA  $qa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, QA $qa)
    {
        $qa->update($request->input());
        return redirect()->route('qa.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\QA  $qa
     * @return \Illuminate\Http\Response
     */
    public function destroy(QA $qa)
    {
        $qa->delete();
        return redirect()->route('qa.index');
    }
}
