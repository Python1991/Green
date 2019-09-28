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
        $('#contact_us_table').dataTable({
            "columns":[{ "width": "7%" },null,null,null,null,null],
            "lengthMenu": [[10, 20, 30, -1], [10, 20, 30, "All"]],
            "order": [0,"desc"]
        });

        $('#contact_us_table').on('click', '.destroy_btn', function() {
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
                    $('form').attr('action', "/admin/contactUs/"+this.id).submit();
                }
            }.bind(this));
        });
    </script>
@endsection

@section('content')
    <div class="btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-end mb-3">
        <a href="{{ route('contactUs.create') }}">
            <div class="btn rounded-pill btn-success">
                看前台
            </div>
        </a>
    </div>

    <div class="card">
        <h4 class="card-header">
            {{ trans('side_nav.contact_us')}}
        </h4>
        <div class="card-datatable table-responsive">
            <table id="contact_us_table" class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>{{ trans('general.action') }}</th>
                        <th>{{ trans('general.date') }}</th>
                        <th>{{ trans('general.company_name') }}</th>
                        <th>{{ trans('general.name') }}</th>
                        <th>{{ trans('general.phone') }}</th>
                        <th>{{ trans('general.email') }}</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($contactUs as $contact_us)
                        <tr>
                            <td>
                                <a href="{{ route('contactUs.show', $contact_us->id) }}">
                                    <div class="btn icon-btn btn-sm btn-outline-success">
                                        <i class="fas fa-eye"></i>
                                    </div>
                                </a>
                                <div id="{{ $contact_us->id }}" class="btn icon-btn btn-sm btn-outline-danger destroy_btn"><i class="far fa-trash-alt"></i></div>
                            </td>
                            <td>{{ $contact_us->created_at }}</td>
                            <td>{{ $contact_us->company_name }}</td>
                            <td>{{ $contact_us->name }}</td>
                            <td>{{ $contact_us->phone }}</td>
                            <td>{{ $contact_us->email }}</td>
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