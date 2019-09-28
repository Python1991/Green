<div id="layout-sidenav" class="{{ isset($layout_sidenav_horizontal) ? 'layout-sidenav-horizontal sidenav-horizontal container-p-x flex-grow-0' : 'layout-sidenav sidenav-vertical' }} sidenav bg-sidenav-theme">

    <!-- Inner -->
    <ul class="sidenav-inner{{ empty($layout_sidenav_horizontal) ? ' py-1' : '' }}">

        <li class="sidenav-item{{ Request::is('/') ? ' active' : '' }}">
            <a href="{{ route('home') }}" class="sidenav-link"><i class="sidenav-icon ion ion-ios-contact"></i><div>Home</div></a>
        </li>

        <li class="sidenav-item{{ Request::is('/') ? ' active' : '' }}">
            <a href="{{ route('news.index') }}" class="sidenav-link"><i class="sidenav-icon fas fa-bullhorn"></i><div>{{ trans('side_nav.news')}}</div></a>
        </li>

        <li class="sidenav-item{{ Request::is('/') ? ' active' : '' }}">
            <a href="{{ route('qa.index') }}" class="sidenav-link"><i class="sidenav-icon fas fa-question"></i><div>{{ trans('side_nav.qa')}}</div></a>
        </li>

        <li class="sidenav-item{{ Request::is('/') ? ' active' : '' }}">
            <a href="{{ route('contactUs.index') }}" class="sidenav-link"><i class="sidenav-icon fas fa-phone"></i><div>{{ trans('side_nav.contact_us')}}</div></a>
        </li>

    </ul>
</div>