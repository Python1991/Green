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
        });
        function handleFiles(){
            var file = document.getElementById('input').files[0];
            var img = document.createElement("img");
            img.file = file;
            $(img).css('width', '600px');
            $('#img').html(img);
            
            var reader = new FileReader();
            reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
            reader.readAsDataURL(file);
        }

        $('#submit').click(function(){
            $('#hiddenArea').val($($('.ql-editor')[0]).html());
            $('#create_news').submit();
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
            {{ trans('side_nav.news')}}
        </h4>
        <div class="card-body">
            <form id="create_news" action="/admin/news" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="form-group">
                    <label class="form-label">{{ trans('general.title') }}</label>
                    <input name ="title" type="text" class="form-control" placeholder="{{ trans('general.title') }}">
                </div>
                <div class="form-group">
                    <label class="form-label">{{ trans('general.date') }}</label>
                    <input name ="date" type="text" id="b-m-dtp-date" class="form-control" placeholder="{{ trans('general.date') }}">
                </div>
                <div class="form-group">
                    <label class="form-label">{{ trans('general.status') }}</label>
                    <label class="switcher">
                        <input name ="status" type="checkbox" class="switcher-input" checked>
                        <span class="switcher-indicator">
                            <span class="switcher-yes"></span>
                            <span class="switcher-no"></span>
                        </span>
                    </label>
                </div>
                <div class="form-group">
                    <label class="form-label">{{ trans('general.image') }}</label>
                    <input name ="image" type="file" id="input" onchange="handleFiles(this.files)">
                    <div id="img"></div>
                </div>
                <div class="form-group">
                    <label class="form-label">{{ trans('general.meta') }}</label>
                    <textarea name ="meta" class="form-control" rows="5"></textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">{{ trans('general.content') }}</label>
                    <textarea name="content" style="display:none" id="hiddenArea"></textarea>
                    <div class="card-body">
                        @include('general.quill_editor')
                    </div>
                </div>
                <div id="submit" class="btn btn-default">Submit</div>
            </form>
        </div>
    </div>
@endsection