@extends('layouts.layout-2')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/bootstrap-material-datetimepicker/bootstrap-material-datetimepicker.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/quill/typography.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/quill/editor.css') }}">
    <style>.ql-editor > p {margin:0;}</style>
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/moment/moment.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootstrap-material-datetimepicker/bootstrap-material-datetimepicker.js') }}"></script>
    <script>
        // Quill does not support IE 10 and below so don't load it to prevent console errors
        if (typeof document.documentMode !== 'number' || document.documentMode > 10) {
            document.write('\x3Cscript src="{{ mix('/vendor/libs/quill/quill.js') }}">\x3C/script>');
        }
    </script>
        
    <script>
        $(function() {
            if (!window.Quill) {
                return $('#quill-editor,#quill-toolbar,#quill-bubble-editor,#quill-bubble-toolbar').remove();
            }

            var editor = new Quill('#quill-editor', {
                modules: {
                toolbar: '#quill-toolbar'
                },
                placeholder: 'Type something',
                theme: 'snow'
            });
            $($('.ql-editor')[0]).html($('#hiddenArea').text())
        });
        function handleFiles(){
            var file = document.getElementById('input').files[0];
            var img = document.createElement("img");
            img.file = file;
            $(img).css('width', '600px');
            $('#img').html(img);
            $('#or_img').remove();
            
            var reader = new FileReader();
            reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
            reader.readAsDataURL(file);
        }

        $('#submit').click(function(){
            $('#hiddenArea').val($($('.ql-editor')[0]).html());
            $('#update_qa').submit();
        });
    </script>
    
    <script>
        $('#b-m-dtp-date').bootstrapMaterialDatePicker({
            weekStart: 0,
            time: false,
            clearButton: true
        });
    </script>
@endsection

@section('content')
    <div class="card mb-4">
        <h4 class="card-header">
            {{ trans('side_nav.qa')}}
        </h4>
        <div class="card-body">
            <form id="update_qa" action="/admin/qa/{{$qa->id}}" method="POST">
                @csrf
                @method('PUT')
                <div class="form-group">
                    <label class="form-label">{{ trans('qa/general.question') }}</label>
                    <input value="{{ $qa->question }}" name ="question" type="text" class="form-control" placeholder="{{ trans('qa/general.question') }}">
                </div>
                <div class="form-group">
                    <label class="form-label">{{ trans('qa/general.answer') }}</label>
                    <textarea name="answer" style="display:none" id="hiddenArea">{{ $qa->answer }}</textarea>
                    <div class="card-body">
                        @include('general.quill_editor')
                    </div>
                </div>
                <div id="submit" class="btn btn-default">{{ trans('general.update') }}</div>
            </form>
        </div>
    </div>
@endsection