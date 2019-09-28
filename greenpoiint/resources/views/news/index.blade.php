@extends('layouts.layout-2')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/datatables/datatables.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/sweetalert2/sweetalert2.css') }}">
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/datatables/datatables.js') }}"></script>
    <script src="{{ mix('/vendor/libs/sweetalert2/sweetalert2.js') }}"></script>
    
    <script>
        $('.news_table').dataTable({
            "lengthMenu": [[10, 20, 30, -1], [10, 20, 30, "All"]],
            "order": [0,"desc"]
        });

        $('.destroy_btn').click(function() {
            Swal.fire({
                title: 'Are you sure?', 
                text: 'You will not be able to recover this imaginary file!',
                type: 'error',
                showCancelButton: true,
                customClass: {
                    confirmButton: 'btn btn-danger btn-lg',
                    cancelButton: 'btn btn-default btn-lg'
                }
            }).then(function(result){
                if(result.value){
                    $('form').attr('action', "/admin/news/"+this.id).submit();
                }
            }.bind(this));
        });
    </script>
@endsection

@section('content')
    <div class="btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-end mb-3">
        <a href="/news">
            <div class="btn rounded-pill btn-success">
                看前台
            </div>
        </a>
        <a href="/admin/news/create">
            <div class="btn rounded-pill btn-success">
                {{ trans('general.insert') }}
            </div>
        </a>
    </div>

    <div class="card">
        <h4 class="card-header">
            {{ trans('side_nav.news')}}
        </h4>
        <div class="card-datatable table-responsive">
            <table class="news_table table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>{{ trans('general.id') }}</th>
                        <!-- <th>{{ trans('general.image') }}</th> -->
                        <th>{{ trans('general.title') }}</th>
                        <th>{{ trans('general.meta') }}</th>
                        <th>{{ trans('general.status') }}</th>
                        <th>{{ trans('general.date') }}</th>
                        <th>{{ trans('general.action') }}</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($news as $new)
                        <tr>
                            <td>{{  $new->id }}</td>
                            <!-- <td><img style="    width: 150px;" src="{{ asset($new->image) }}"></td> -->
                            <td>{{  $new->title }}</td>
                            <td>{{  $new->meta }}</td>
                            <td>            
                                <label class="switcher">
                                    <input type="checkbox" class="switcher-input" {{ $new->status == 1 ? "checked" : "" }}>
                                    <span class="switcher-indicator">
                                        <span class="switcher-yes"></span>
                                        <span class="switcher-no"></span>
                                    </span>
                                </label>
                            </td>
                            <td>{{  $new->date }}</td>
                            <td>
                                <div class="btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-end">
                                    <a href="news/{{ $new->id }}/edit">
                                        <div class="btn rounded-pill btn-primary mr-3">
                                            {{ trans('general.edit') }}
                                        </div>
                                    </a>
                                    <div id="{{ $new->id }}" class="btn rounded-pill btn-danger mr-3 waves-effect destroy_btn">{{ trans('general.destroy') }}</div>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
    <form method="POST" action="">
        {{ csrf_field() }}
        <input type="hidden" name="_method" value="DELETE">
    </form>
@endsection