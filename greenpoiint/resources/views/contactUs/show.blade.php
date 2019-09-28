@extends('layouts.layout-2')

@section('styles')
@endsection

@section('scripts')
@endsection

@section('content')
    <div class="card mb-4">
        <h4 class="card-header">
            {{ trans('side_nav.contact_us')}}
        </h4>
        <div class="card-body">
            <div class="form-group">
                <label class="form-label">{{ trans('general.date') }}</label>
                <input readonly value="{{ $contactUs->created_at }}" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label class="form-label">{{ trans('general.company_name') }}</label>
                <input readonly value="{{ $contactUs->company_name }}" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label class="form-label">{{ trans('general.name') }}</label>
                <input readonly value="{{ $contactUs->name }}" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label class="form-label">{{ trans('general.phone') }}</label>
                <input readonly value="{{ $contactUs->phone }}" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label class="form-label">{{ trans('general.email') }}</label>
                <input readonly value="{{ $contactUs->email }}" type="text" class="form-control">
            </div>
            <div class="form-group">
                <label class="form-label">{{ trans('general.content') }}</label>
                <textarea readonly rows="10" class="form-control">{{ $contactUs->content }}</textarea>
            </div>
        </div>
    </div>
@endsection