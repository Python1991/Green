@extends('layouts.layout-2')

@section('styles')
    <link rel="stylesheet" href="{{ asset('css/animate.css') }}">
    <style>
    @media screen and (max-width:1231px) { 
    }
    @media screen and (min-width:1231px) { 
        #t1{
            position:relative;
            
        }
        .wow{
            position: absolute;
            width:700px;
        }
    }
    </style>
@endsection

@section('scripts')
    <script src="{{ asset('js/wow.min.js') }}"></script>
    <script>
new WOW().init();
    </script>
@endsection

@section('content')
    <div id="t1" class="row" style="height:{{(count($news)+1)*350}}px;">
        @foreach($news as $new)
            @if($loop->even)
    <div class="col-md-6 col-xl-6  wow bounceInUp animated" style="top:{{$loop->index * 350}}px;">
            @else
            <div class="col-md-6 col-xl-6  wow bounceInUp animated" style="left:800px;width:700px;top:{{$loop->index * 350}}px;">
            @endif
            <div class="card mb-3">
                <div class="card-body">
                    <p class="card-text">{{ $new->date }}</p>
                    <h3 class="card-title">{{ $new->title }}</h3>
                    <p class="card-text">{{ $new->meta }}</p>
                </div>
                <img class="card-img-bottom" src="{{ asset($new->image) }}">
            </div>

            </div>
        @endforeach
    </div>
@endsection