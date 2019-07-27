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
        <h6 class="card-header">
            Default
        </h6>
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
                    <label class="form-label">{{ trans('general.description') }}</label>
                    <textarea name="description" style="display:none" id="hiddenArea"></textarea>
                    <div class="card-body">
                        <div id="quill-toolbar">
                            <span class="ql-formats">
                                <select class="ql-font"></select>
                                <select class="ql-size"></select>
                            </span>
                            <span class="ql-formats">
                                <button class="ql-bold"></button>
                                <button class="ql-italic"></button>
                                <button class="ql-underline"></button>
                                <button class="ql-strike"></button>
                            </span>
                            <span class="ql-formats">
                                <select class="ql-color"></select>
                                <select class="ql-background"></select>
                            </span>
                            <span class="ql-formats">
                                <button class="ql-script" value="sub"></button>
                                <button class="ql-script" value="super"></button>
                            </span>
                            <span class="ql-formats">
                                <button class="ql-header" value="1"></button>
                                <button class="ql-header" value="2"></button>
                                <button class="ql-blockquote"></button>
                                <button class="ql-code-block"></button>
                            </span>
                            <span class="ql-formats">
                                <button class="ql-list" value="ordered"></button>
                                <button class="ql-list" value="bullet"></button>
                                <button class="ql-indent" value="-1"></button>
                                <button class="ql-indent" value="+1"></button>
                            </span>
                            <span class="ql-formats">
                                <button class="ql-direction" value="rtl"></button>
                                <select class="ql-align"></select>
                            </span>
                            <span class="ql-formats">
                                <button class="ql-link"></button>
                                <button class="ql-image"></button>
                                <button class="ql-video"></button>
                            </span>
                            <span class="ql-formats">
                                <button class="ql-clean"></button>
                            </span>
                        </div>
                        <div id="quill-editor"></div>
                    </div>
                </div>
                <div id="submit" class="btn btn-default">Submit</div>
            </form>
        </div>
    </div>
@endsection