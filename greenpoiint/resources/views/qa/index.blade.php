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
        $('.qas_table').dataTable({
            "columns":[{ "width": "8%" },null,{ "width": "32%" },{ "width": "55%" }],
            "lengthMenu": [[10, 20, 30, -1], [10, 20, 30, "All"]],
            "order": [0,"desc"]
        });

        $('.qas_table').on('click', '.destroy_btn', function() {
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
                    $('form').attr('action', "/admin/qa/"+this.id).submit();
                }
            }.bind(this));
        });
    </script>
@endsection

@section('content')
    <div class="btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-end mb-3">
        <a href="/qas">
            <div class="btn rounded-pill btn-success">
                看前台
            </div>
        </a>
        <a href="{{ route('qa.create') }}">
            <div class="btn rounded-pill btn-success">
                {{ trans('general.insert') }}
            </div>
        </a>
    </div>

    <div class="card">
        <h4 class="card-header">
            {{ trans('side_nav.qa')}}
        </h4>
        <div class="card-datatable table-responsive">
            <table class="qas_table table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>{{ trans('general.action') }}</th>
                        <th>{{ trans('general.id') }}</th>
                        <th>{{ trans('qa/general.question') }}</th>
                        <th>{{ trans('qa/general.answer') }}</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($qas as $qa)
                        <tr>
                            <td>
                                <a href="{{ route('qa.edit', $qa->id) }}">
                                    <div class="btn icon-btn btn-sm btn-outline-success">
                                        <i class="fas fa-pen"></i>
                                    </div>
                                </a>
                                <div id="{{ $qa->id }}" class="btn icon-btn btn-sm btn-outline-danger destroy_btn"><i class="far fa-trash-alt"></i></div>
                            </td>
                            <td>{{ $qa->id }}</td>
                            <td>{{ str_limit($qa->question, 50) }}</td>
                            <td>{{ str_limit(strip_tags($qa->answer), 100) }}</td>
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