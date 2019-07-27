<?php

namespace App\Http\Controllers;

use App\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $news = News::all();
        return view('news.index', compact('news'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('news.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->input();
        $input['status'] = isset($input['status']) && $input['status'] == 'on' ? 1 : 0;

        $data =
        [
            'title' => $input['title'],
            'date' => $input['date'],
            'status' => $input['status'],
            'meta' => $input['meta'],
            'description' => $input['description'],
        ];
        if(isset($request->image))
        {
            $imageName = $request->image->getClientOriginalName();
            $request->image->move(public_path('images'), $imageName);
            $data['image'] = 'images/' . $imageName;
        }
        // $input['description'] = 'test';
        $new = News::create($data);

        return redirect('admin/news');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\News  $news
     * @return \Illuminate\Http\Response
     */
    public function show(News $news)
    {
        $news = News::where('status', '=', 1)->get();
        return view('news', compact('news'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\News  $news
     * @return \Illuminate\Http\Response
     */
    public function edit(News $news)
    {
        return view('news.edit', compact('news'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\News  $news
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, News $news)
    {
        $input = $request->input();
        $input['status'] = isset($input['status']) && $input['status'] == 'on' ? 1 : 0;

        $data =
        [
            'title' => $input['title'],
            'date' => $input['date'],
            'status' => $input['status'],
            'meta' => $input['meta'],
            'description' => $input['description'],
        ];
        if(isset($request->image))
        {
            $imageName = $request->image->getClientOriginalName();
            $request->image->move(public_path('images'), $imageName);
            $data['image'] = 'images/' . $imageName;
        }
        // $input['description'] = 'test';
        $news->update($data);
        return redirect('admin/news');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\News  $news
     * @return \Illuminate\Http\Response
     */
    public function destroy(News $news)
    {
        $news->delete();
        return redirect('admin/news');
    }
}
