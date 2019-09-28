@extends('layouts.layout-blank')

@section('styles')
@endsection

@section('scripts')
@endsection

@section('content')
<div class="row offset-2">
    <div class="card mb-4 col-md-9">
        <h4 class="card-header">
            {{ trans('side_nav.contact_us')}}
        </h4>
        <form action="{{ route('contactUs.store') }}" method="POST">
            @csrf
            <div class="card-body">
                <div class="row offset-2">
                    <div class="col-md-4">
                        <label class="form-label">{{ trans('general.company_name') }}</label>
                        <input name="company_name" type="text" class="form-control">
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">{{ trans('general.name') }}</label>
                        <input name="name" type="text" class="form-control">
                    </div>
                </div>
                <div class="row offset-2">
                    <div class="col-md-4">
                        <label class="form-label">{{ trans('general.phone') }}</label>
                        <input name="phone" type="text" class="form-control">
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">{{ trans('general.email') }}</label>
                        <input name="email" type="text" class="form-control">
                    </div>
                </div>
                <div class="row offset-2">
                    <div class="col-md-8">
                        <label class="form-label">{{ trans('general.content') }}</label>
                        <textarea name="content" rows="10" class="form-control"></textarea>
                    </div>
                </div>
                <div class="row offset-2 mt-2">
                    <div class="col-md-8">
                        <div class="btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-center">
                            <button class="btn btn-primary sw-btn-next" type="submit">{{ trans('general.send_out') }}</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection