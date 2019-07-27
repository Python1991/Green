/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/application.js":
/*!********************************************!*\
  !*** ./resources/assets/js/application.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./bootstrap */ "./resources/assets/js/bootstrap.js");

/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/*!******************************************!*\
  !*** ./resources/assets/js/bootstrap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Auto update layout
if (window.layoutHelpers) {
  window.layoutHelpers.setAutoUpdate(true);
}

$(function () {
  // Initialize sidenav
  $('#layout-sidenav').each(function () {
    new SideNav(this, {
      orientation: $(this).hasClass('sidenav-horizontal') ? 'horizontal' : 'vertical'
    });
  }); // Initialize sidenav togglers

  $('body').on('click', '.layout-sidenav-toggle', function (e) {
    e.preventDefault();
    window.layoutHelpers.toggleCollapsed();
  }); // Swap dropdown menus in RTL mode

  if ($('html').attr('dir') === 'rtl') {
    $('#layout-navbar .dropdown-menu').toggleClass('dropdown-menu-right');
  }
});
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
// window.axios = require('axios');
//
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */
// let token = document.head.querySelector('meta[name="csrf-token"]');
//
// if (token) {
//     window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
// } else {
//     console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
// }

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo'
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/assets/sass/application.scss":
/*!************************************************!*\
  !*** ./resources/assets/sass/application.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/animate-css/animate.scss":
/*!***************************************************************!*\
  !*** ./resources/assets/vendor/libs/animate-css/animate.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/blueimp-gallery/gallery-indicator.scss":
/*!*****************************************************************************!*\
  !*** ./resources/assets/vendor/libs/blueimp-gallery/gallery-indicator.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/blueimp-gallery/gallery-video.scss":
/*!*************************************************************************!*\
  !*** ./resources/assets/vendor/libs/blueimp-gallery/gallery-video.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/blueimp-gallery/gallery.scss":
/*!*******************************************************************!*\
  !*** ./resources/assets/vendor/libs/blueimp-gallery/gallery.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.scss":
/*!*************************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.scss":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-duallistbox/bootstrap-duallistbox.scss":
/*!***************************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-duallistbox/bootstrap-duallistbox.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-markdown/bootstrap-markdown.scss":
/*!*********************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-markdown/bootstrap-markdown.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-material-datetimepicker/bootstrap-material-datetimepicker.scss":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-material-datetimepicker/bootstrap-material-datetimepicker.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-maxlength/bootstrap-maxlength.scss":
/*!***********************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-maxlength/bootstrap-maxlength.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-multiselect/bootstrap-multiselect.scss":
/*!***************************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-multiselect/bootstrap-multiselect.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-select/bootstrap-select.scss":
/*!*****************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-select/bootstrap-select.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-slider/bootstrap-slider.scss":
/*!*****************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-slider/bootstrap-slider.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-sortable/bootstrap-sortable.scss":
/*!*********************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-sortable/bootstrap-sortable.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-sweetalert/bootstrap-sweetalert.scss":
/*!*************************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-sweetalert/bootstrap-sweetalert.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-table/bootstrap-table.scss":
/*!***************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-table/bootstrap-table.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-table/extensions/filter-control/filter-control.scss":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-table/extensions/filter-control/filter-control.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-table/extensions/fixed-columns/fixed-columns.scss":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-table/extensions/fixed-columns/fixed-columns.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-table/extensions/group-by-v2/group-by-v2.scss":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-table/extensions/group-by-v2/group-by-v2.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-table/extensions/group-by/group-by.scss":
/*!****************************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-table/extensions/group-by/group-by.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-table/extensions/multiple-selection-row/multiple-selection-row.scss":
/*!********************************************************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-table/extensions/multiple-selection-row/multiple-selection-row.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-table/extensions/page-jump-to/page-jump-to.scss":
/*!************************************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-table/extensions/page-jump-to/page-jump-to.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-table/extensions/reorder-rows/reorder-rows.scss":
/*!************************************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-table/extensions/reorder-rows/reorder-rows.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-table/extensions/sticky-header/sticky-header.scss":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-table/extensions/sticky-header/sticky-header.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-table/extensions/tree-column/tree-column.scss":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-table/extensions/tree-column/tree-column.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/bootstrap-tagsinput/bootstrap-tagsinput.scss":
/*!***********************************************************************************!*\
  !*** ./resources/assets/vendor/libs/bootstrap-tagsinput/bootstrap-tagsinput.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/c3/c3.scss":
/*!*************************************************!*\
  !*** ./resources/assets/vendor/libs/c3/c3.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/chartist/chartist.scss":
/*!*************************************************************!*\
  !*** ./resources/assets/vendor/libs/chartist/chartist.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/cropper/cropper.scss":
/*!***********************************************************!*\
  !*** ./resources/assets/vendor/libs/cropper/cropper.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/datatables/datatables.scss":
/*!*****************************************************************!*\
  !*** ./resources/assets/vendor/libs/datatables/datatables.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/dragula/dragula.scss":
/*!***********************************************************!*\
  !*** ./resources/assets/vendor/libs/dragula/dragula.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/dropzone/dropzone.scss":
/*!*************************************************************!*\
  !*** ./resources/assets/vendor/libs/dropzone/dropzone.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/flatpickr/flatpickr.scss":
/*!***************************************************************!*\
  !*** ./resources/assets/vendor/libs/flatpickr/flatpickr.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/flot/flot.scss":
/*!*****************************************************!*\
  !*** ./resources/assets/vendor/libs/flot/flot.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/flow-js/flow.scss":
/*!********************************************************!*\
  !*** ./resources/assets/vendor/libs/flow-js/flow.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/fullcalendar/fullcalendar.scss":
/*!*********************************************************************!*\
  !*** ./resources/assets/vendor/libs/fullcalendar/fullcalendar.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/growl/growl.scss":
/*!*******************************************************!*\
  !*** ./resources/assets/vendor/libs/growl/growl.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/jstree/themes/default-dark/style.scss":
/*!****************************************************************************!*\
  !*** ./resources/assets/vendor/libs/jstree/themes/default-dark/style.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/jstree/themes/default/style.scss":
/*!***********************************************************************!*\
  !*** ./resources/assets/vendor/libs/jstree/themes/default/style.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/ladda/ladda.scss":
/*!*******************************************************!*\
  !*** ./resources/assets/vendor/libs/ladda/ladda.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/minicolors/minicolors.scss":
/*!*****************************************************************!*\
  !*** ./resources/assets/vendor/libs/minicolors/minicolors.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/morris/morris.scss":
/*!*********************************************************!*\
  !*** ./resources/assets/vendor/libs/morris/morris.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/nestable/nestable.scss":
/*!*************************************************************!*\
  !*** ./resources/assets/vendor/libs/nestable/nestable.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/nouislider/nouislider.scss":
/*!*****************************************************************!*\
  !*** ./resources/assets/vendor/libs/nouislider/nouislider.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.scss":
/*!*******************************************************************************!*\
  !*** ./resources/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/photoswipe/photoswipe.scss":
/*!*****************************************************************!*\
  !*** ./resources/assets/vendor/libs/photoswipe/photoswipe.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/plyr/plyr.scss":
/*!*****************************************************!*\
  !*** ./resources/assets/vendor/libs/plyr/plyr.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/quill/editor.scss":
/*!********************************************************!*\
  !*** ./resources/assets/vendor/libs/quill/editor.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/quill/typography.scss":
/*!************************************************************!*\
  !*** ./resources/assets/vendor/libs/quill/typography.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/select2/select2.scss":
/*!***********************************************************!*\
  !*** ./resources/assets/vendor/libs/select2/select2.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/shepherd/shepherd.scss":
/*!*************************************************************!*\
  !*** ./resources/assets/vendor/libs/shepherd/shepherd.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/smartwizard/smartwizard.scss":
/*!*******************************************************************!*\
  !*** ./resources/assets/vendor/libs/smartwizard/smartwizard.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/spinkit/spinkit.scss":
/*!***********************************************************!*\
  !*** ./resources/assets/vendor/libs/spinkit/spinkit.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/sweetalert2/sweetalert2.scss":
/*!*******************************************************************!*\
  !*** ./resources/assets/vendor/libs/sweetalert2/sweetalert2.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/swiper/swiper.scss":
/*!*********************************************************!*\
  !*** ./resources/assets/vendor/libs/swiper/swiper.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/timepicker/timepicker.scss":
/*!*****************************************************************!*\
  !*** ./resources/assets/vendor/libs/timepicker/timepicker.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/toastr/toastr.scss":
/*!*********************************************************!*\
  !*** ./resources/assets/vendor/libs/toastr/toastr.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/typeahead-js/typeahead.scss":
/*!******************************************************************!*\
  !*** ./resources/assets/vendor/libs/typeahead-js/typeahead.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/libs/vegas/vegas.scss":
/*!*******************************************************!*\
  !*** ./resources/assets/vendor/libs/vegas/vegas.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/appwork-material.scss":
/*!************************************************************!*\
  !*** ./resources/assets/vendor/sass/appwork-material.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/appwork.scss":
/*!***************************************************!*\
  !*** ./resources/assets/vendor/sass/appwork.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/bootstrap-material.scss":
/*!**************************************************************!*\
  !*** ./resources/assets/vendor/sass/bootstrap-material.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/bootstrap.scss":
/*!*****************************************************!*\
  !*** ./resources/assets/vendor/sass/bootstrap.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/colors-material.scss":
/*!***********************************************************!*\
  !*** ./resources/assets/vendor/sass/colors-material.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/colors.scss":
/*!**************************************************!*\
  !*** ./resources/assets/vendor/sass/colors.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/pages/account.scss":
/*!*********************************************************!*\
  !*** ./resources/assets/vendor/sass/pages/account.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/pages/authentication.scss":
/*!****************************************************************!*\
  !*** ./resources/assets/vendor/sass/pages/authentication.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/pages/chat.scss":
/*!******************************************************!*\
  !*** ./resources/assets/vendor/sass/pages/chat.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/pages/clients.scss":
/*!*********************************************************!*\
  !*** ./resources/assets/vendor/sass/pages/clients.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/pages/contacts.scss":
/*!**********************************************************!*\
  !*** ./resources/assets/vendor/sass/pages/contacts.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/pages/file-manager.scss":
/*!**************************************************************!*\
  !*** ./resources/assets/vendor/sass/pages/file-manager.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/pages/messages.scss":
/*!**********************************************************!*\
  !*** ./resources/assets/vendor/sass/pages/messages.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/pages/products.scss":
/*!**********************************************************!*\
  !*** ./resources/assets/vendor/sass/pages/products.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/pages/projects.scss":
/*!**********************************************************!*\
  !*** ./resources/assets/vendor/sass/pages/projects.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/pages/search.scss":
/*!********************************************************!*\
  !*** ./resources/assets/vendor/sass/pages/search.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/pages/tasks.scss":
/*!*******************************************************!*\
  !*** ./resources/assets/vendor/sass/pages/tasks.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/pages/tickets.scss":
/*!*********************************************************!*\
  !*** ./resources/assets/vendor/sass/pages/tickets.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/pages/users.scss":
/*!*******************************************************!*\
  !*** ./resources/assets/vendor/sass/pages/users.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/theme-air-material.scss":
/*!**************************************************************!*\
  !*** ./resources/assets/vendor/sass/theme-air-material.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/theme-air.scss":
/*!*****************************************************!*\
  !*** ./resources/assets/vendor/sass/theme-air.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/theme-corporate-material.scss":
/*!********************************************************************!*\
  !*** ./resources/assets/vendor/sass/theme-corporate-material.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/theme-corporate.scss":
/*!***********************************************************!*\
  !*** ./resources/assets/vendor/sass/theme-corporate.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/theme-cotton-material.scss":
/*!*****************************************************************!*\
  !*** ./resources/assets/vendor/sass/theme-cotton-material.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/theme-cotton.scss":
/*!********************************************************!*\
  !*** ./resources/assets/vendor/sass/theme-cotton.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/theme-gradient-material.scss":
/*!*******************************************************************!*\
  !*** ./resources/assets/vendor/sass/theme-gradient-material.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/theme-gradient.scss":
/*!**********************************************************!*\
  !*** ./resources/assets/vendor/sass/theme-gradient.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/theme-paper-material.scss":
/*!****************************************************************!*\
  !*** ./resources/assets/vendor/sass/theme-paper-material.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/theme-paper.scss":
/*!*******************************************************!*\
  !*** ./resources/assets/vendor/sass/theme-paper.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/theme-shadow-material.scss":
/*!*****************************************************************!*\
  !*** ./resources/assets/vendor/sass/theme-shadow-material.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/theme-shadow.scss":
/*!********************************************************!*\
  !*** ./resources/assets/vendor/sass/theme-shadow.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/theme-soft-material.scss":
/*!***************************************************************!*\
  !*** ./resources/assets/vendor/sass/theme-soft-material.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/theme-soft.scss":
/*!******************************************************!*\
  !*** ./resources/assets/vendor/sass/theme-soft.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/theme-sunrise-material.scss":
/*!******************************************************************!*\
  !*** ./resources/assets/vendor/sass/theme-sunrise-material.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/theme-sunrise.scss":
/*!*********************************************************!*\
  !*** ./resources/assets/vendor/sass/theme-sunrise.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/theme-twitlight-material.scss":
/*!********************************************************************!*\
  !*** ./resources/assets/vendor/sass/theme-twitlight-material.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/theme-twitlight.scss":
/*!***********************************************************!*\
  !*** ./resources/assets/vendor/sass/theme-twitlight.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/theme-vibrant-material.scss":
/*!******************************************************************!*\
  !*** ./resources/assets/vendor/sass/theme-vibrant-material.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/theme-vibrant.scss":
/*!*********************************************************!*\
  !*** ./resources/assets/vendor/sass/theme-vibrant.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/sass/uikit.scss":
/*!*************************************************!*\
  !*** ./resources/assets/vendor/sass/uikit.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/assets/js/application.js ./resources/assets/vendor/sass/bootstrap.scss ./resources/assets/vendor/sass/bootstrap-material.scss ./resources/assets/vendor/sass/appwork.scss ./resources/assets/vendor/sass/appwork-material.scss ./resources/assets/vendor/sass/colors.scss ./resources/assets/vendor/sass/colors-material.scss ./resources/assets/vendor/sass/uikit.scss ./resources/assets/vendor/sass/theme-air.scss ./resources/assets/vendor/sass/theme-air-material.scss ./resources/assets/vendor/sass/theme-corporate.scss ./resources/assets/vendor/sass/theme-corporate-material.scss ./resources/assets/vendor/sass/theme-cotton.scss ./resources/assets/vendor/sass/theme-cotton-material.scss ./resources/assets/vendor/sass/theme-gradient.scss ./resources/assets/vendor/sass/theme-gradient-material.scss ./resources/assets/vendor/sass/theme-paper.scss ./resources/assets/vendor/sass/theme-paper-material.scss ./resources/assets/vendor/sass/theme-shadow.scss ./resources/assets/vendor/sass/theme-shadow-material.scss ./resources/assets/vendor/sass/theme-soft.scss ./resources/assets/vendor/sass/theme-soft-material.scss ./resources/assets/vendor/sass/theme-sunrise.scss ./resources/assets/vendor/sass/theme-sunrise-material.scss ./resources/assets/vendor/sass/theme-twitlight.scss ./resources/assets/vendor/sass/theme-twitlight-material.scss ./resources/assets/vendor/sass/theme-vibrant.scss ./resources/assets/vendor/sass/theme-vibrant-material.scss ./resources/assets/vendor/libs/animate-css/animate.scss ./resources/assets/vendor/libs/blueimp-gallery/gallery-indicator.scss ./resources/assets/vendor/libs/blueimp-gallery/gallery-video.scss ./resources/assets/vendor/libs/blueimp-gallery/gallery.scss ./resources/assets/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.scss ./resources/assets/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.scss ./resources/assets/vendor/libs/bootstrap-duallistbox/bootstrap-duallistbox.scss ./resources/assets/vendor/libs/bootstrap-markdown/bootstrap-markdown.scss ./resources/assets/vendor/libs/bootstrap-material-datetimepicker/bootstrap-material-datetimepicker.scss ./resources/assets/vendor/libs/bootstrap-maxlength/bootstrap-maxlength.scss ./resources/assets/vendor/libs/bootstrap-multiselect/bootstrap-multiselect.scss ./resources/assets/vendor/libs/bootstrap-select/bootstrap-select.scss ./resources/assets/vendor/libs/bootstrap-slider/bootstrap-slider.scss ./resources/assets/vendor/libs/bootstrap-sortable/bootstrap-sortable.scss ./resources/assets/vendor/libs/bootstrap-sweetalert/bootstrap-sweetalert.scss ./resources/assets/vendor/libs/bootstrap-table/bootstrap-table.scss ./resources/assets/vendor/libs/bootstrap-table/extensions/filter-control/filter-control.scss ./resources/assets/vendor/libs/bootstrap-table/extensions/fixed-columns/fixed-columns.scss ./resources/assets/vendor/libs/bootstrap-table/extensions/group-by-v2/group-by-v2.scss ./resources/assets/vendor/libs/bootstrap-table/extensions/group-by/group-by.scss ./resources/assets/vendor/libs/bootstrap-table/extensions/multiple-selection-row/multiple-selection-row.scss ./resources/assets/vendor/libs/bootstrap-table/extensions/page-jump-to/page-jump-to.scss ./resources/assets/vendor/libs/bootstrap-table/extensions/reorder-rows/reorder-rows.scss ./resources/assets/vendor/libs/bootstrap-table/extensions/sticky-header/sticky-header.scss ./resources/assets/vendor/libs/bootstrap-table/extensions/tree-column/tree-column.scss ./resources/assets/vendor/libs/bootstrap-tagsinput/bootstrap-tagsinput.scss ./resources/assets/vendor/libs/c3/c3.scss ./resources/assets/vendor/libs/chartist/chartist.scss ./resources/assets/vendor/libs/cropper/cropper.scss ./resources/assets/vendor/libs/datatables/datatables.scss ./resources/assets/vendor/libs/dragula/dragula.scss ./resources/assets/vendor/libs/dropzone/dropzone.scss ./resources/assets/vendor/libs/flatpickr/flatpickr.scss ./resources/assets/vendor/libs/flot/flot.scss ./resources/assets/vendor/libs/flow-js/flow.scss ./resources/assets/vendor/libs/fullcalendar/fullcalendar.scss ./resources/assets/vendor/libs/growl/growl.scss ./resources/assets/vendor/libs/jstree/themes/default-dark/style.scss ./resources/assets/vendor/libs/jstree/themes/default/style.scss ./resources/assets/vendor/libs/ladda/ladda.scss ./resources/assets/vendor/libs/minicolors/minicolors.scss ./resources/assets/vendor/libs/morris/morris.scss ./resources/assets/vendor/libs/nestable/nestable.scss ./resources/assets/vendor/libs/nouislider/nouislider.scss ./resources/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.scss ./resources/assets/vendor/libs/photoswipe/photoswipe.scss ./resources/assets/vendor/libs/plyr/plyr.scss ./resources/assets/vendor/libs/quill/editor.scss ./resources/assets/vendor/libs/quill/typography.scss ./resources/assets/vendor/libs/select2/select2.scss ./resources/assets/vendor/libs/shepherd/shepherd.scss ./resources/assets/vendor/libs/smartwizard/smartwizard.scss ./resources/assets/vendor/libs/spinkit/spinkit.scss ./resources/assets/vendor/libs/sweetalert2/sweetalert2.scss ./resources/assets/vendor/libs/swiper/swiper.scss ./resources/assets/vendor/libs/timepicker/timepicker.scss ./resources/assets/vendor/libs/toastr/toastr.scss ./resources/assets/vendor/libs/typeahead-js/typeahead.scss ./resources/assets/vendor/libs/vegas/vegas.scss ./resources/assets/vendor/sass/pages/account.scss ./resources/assets/vendor/sass/pages/authentication.scss ./resources/assets/vendor/sass/pages/chat.scss ./resources/assets/vendor/sass/pages/clients.scss ./resources/assets/vendor/sass/pages/contacts.scss ./resources/assets/vendor/sass/pages/file-manager.scss ./resources/assets/vendor/sass/pages/messages.scss ./resources/assets/vendor/sass/pages/products.scss ./resources/assets/vendor/sass/pages/projects.scss ./resources/assets/vendor/sass/pages/search.scss ./resources/assets/vendor/sass/pages/tasks.scss ./resources/assets/vendor/sass/pages/tickets.scss ./resources/assets/vendor/sass/pages/users.scss ./resources/assets/sass/application.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/resources/assets/js/application.js */"./resources/assets/js/application.js");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/bootstrap.scss */"./resources/assets/vendor/sass/bootstrap.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/bootstrap-material.scss */"./resources/assets/vendor/sass/bootstrap-material.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/appwork.scss */"./resources/assets/vendor/sass/appwork.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/appwork-material.scss */"./resources/assets/vendor/sass/appwork-material.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/colors.scss */"./resources/assets/vendor/sass/colors.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/colors-material.scss */"./resources/assets/vendor/sass/colors-material.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/uikit.scss */"./resources/assets/vendor/sass/uikit.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/theme-air.scss */"./resources/assets/vendor/sass/theme-air.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/theme-air-material.scss */"./resources/assets/vendor/sass/theme-air-material.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/theme-corporate.scss */"./resources/assets/vendor/sass/theme-corporate.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/theme-corporate-material.scss */"./resources/assets/vendor/sass/theme-corporate-material.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/theme-cotton.scss */"./resources/assets/vendor/sass/theme-cotton.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/theme-cotton-material.scss */"./resources/assets/vendor/sass/theme-cotton-material.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/theme-gradient.scss */"./resources/assets/vendor/sass/theme-gradient.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/theme-gradient-material.scss */"./resources/assets/vendor/sass/theme-gradient-material.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/theme-paper.scss */"./resources/assets/vendor/sass/theme-paper.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/theme-paper-material.scss */"./resources/assets/vendor/sass/theme-paper-material.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/theme-shadow.scss */"./resources/assets/vendor/sass/theme-shadow.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/theme-shadow-material.scss */"./resources/assets/vendor/sass/theme-shadow-material.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/theme-soft.scss */"./resources/assets/vendor/sass/theme-soft.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/theme-soft-material.scss */"./resources/assets/vendor/sass/theme-soft-material.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/theme-sunrise.scss */"./resources/assets/vendor/sass/theme-sunrise.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/theme-sunrise-material.scss */"./resources/assets/vendor/sass/theme-sunrise-material.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/theme-twitlight.scss */"./resources/assets/vendor/sass/theme-twitlight.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/theme-twitlight-material.scss */"./resources/assets/vendor/sass/theme-twitlight-material.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/theme-vibrant.scss */"./resources/assets/vendor/sass/theme-vibrant.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/theme-vibrant-material.scss */"./resources/assets/vendor/sass/theme-vibrant-material.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/animate-css/animate.scss */"./resources/assets/vendor/libs/animate-css/animate.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/blueimp-gallery/gallery-indicator.scss */"./resources/assets/vendor/libs/blueimp-gallery/gallery-indicator.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/blueimp-gallery/gallery-video.scss */"./resources/assets/vendor/libs/blueimp-gallery/gallery-video.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/blueimp-gallery/gallery.scss */"./resources/assets/vendor/libs/blueimp-gallery/gallery.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.scss */"./resources/assets/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.scss */"./resources/assets/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-duallistbox/bootstrap-duallistbox.scss */"./resources/assets/vendor/libs/bootstrap-duallistbox/bootstrap-duallistbox.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-markdown/bootstrap-markdown.scss */"./resources/assets/vendor/libs/bootstrap-markdown/bootstrap-markdown.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-material-datetimepicker/bootstrap-material-datetimepicker.scss */"./resources/assets/vendor/libs/bootstrap-material-datetimepicker/bootstrap-material-datetimepicker.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-maxlength/bootstrap-maxlength.scss */"./resources/assets/vendor/libs/bootstrap-maxlength/bootstrap-maxlength.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-multiselect/bootstrap-multiselect.scss */"./resources/assets/vendor/libs/bootstrap-multiselect/bootstrap-multiselect.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-select/bootstrap-select.scss */"./resources/assets/vendor/libs/bootstrap-select/bootstrap-select.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-slider/bootstrap-slider.scss */"./resources/assets/vendor/libs/bootstrap-slider/bootstrap-slider.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-sortable/bootstrap-sortable.scss */"./resources/assets/vendor/libs/bootstrap-sortable/bootstrap-sortable.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-sweetalert/bootstrap-sweetalert.scss */"./resources/assets/vendor/libs/bootstrap-sweetalert/bootstrap-sweetalert.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-table/bootstrap-table.scss */"./resources/assets/vendor/libs/bootstrap-table/bootstrap-table.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-table/extensions/filter-control/filter-control.scss */"./resources/assets/vendor/libs/bootstrap-table/extensions/filter-control/filter-control.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-table/extensions/fixed-columns/fixed-columns.scss */"./resources/assets/vendor/libs/bootstrap-table/extensions/fixed-columns/fixed-columns.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-table/extensions/group-by-v2/group-by-v2.scss */"./resources/assets/vendor/libs/bootstrap-table/extensions/group-by-v2/group-by-v2.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-table/extensions/group-by/group-by.scss */"./resources/assets/vendor/libs/bootstrap-table/extensions/group-by/group-by.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-table/extensions/multiple-selection-row/multiple-selection-row.scss */"./resources/assets/vendor/libs/bootstrap-table/extensions/multiple-selection-row/multiple-selection-row.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-table/extensions/page-jump-to/page-jump-to.scss */"./resources/assets/vendor/libs/bootstrap-table/extensions/page-jump-to/page-jump-to.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-table/extensions/reorder-rows/reorder-rows.scss */"./resources/assets/vendor/libs/bootstrap-table/extensions/reorder-rows/reorder-rows.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-table/extensions/sticky-header/sticky-header.scss */"./resources/assets/vendor/libs/bootstrap-table/extensions/sticky-header/sticky-header.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-table/extensions/tree-column/tree-column.scss */"./resources/assets/vendor/libs/bootstrap-table/extensions/tree-column/tree-column.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/bootstrap-tagsinput/bootstrap-tagsinput.scss */"./resources/assets/vendor/libs/bootstrap-tagsinput/bootstrap-tagsinput.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/c3/c3.scss */"./resources/assets/vendor/libs/c3/c3.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/chartist/chartist.scss */"./resources/assets/vendor/libs/chartist/chartist.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/cropper/cropper.scss */"./resources/assets/vendor/libs/cropper/cropper.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/datatables/datatables.scss */"./resources/assets/vendor/libs/datatables/datatables.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/dragula/dragula.scss */"./resources/assets/vendor/libs/dragula/dragula.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/dropzone/dropzone.scss */"./resources/assets/vendor/libs/dropzone/dropzone.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/flatpickr/flatpickr.scss */"./resources/assets/vendor/libs/flatpickr/flatpickr.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/flot/flot.scss */"./resources/assets/vendor/libs/flot/flot.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/flow-js/flow.scss */"./resources/assets/vendor/libs/flow-js/flow.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/fullcalendar/fullcalendar.scss */"./resources/assets/vendor/libs/fullcalendar/fullcalendar.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/growl/growl.scss */"./resources/assets/vendor/libs/growl/growl.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/jstree/themes/default-dark/style.scss */"./resources/assets/vendor/libs/jstree/themes/default-dark/style.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/jstree/themes/default/style.scss */"./resources/assets/vendor/libs/jstree/themes/default/style.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/ladda/ladda.scss */"./resources/assets/vendor/libs/ladda/ladda.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/minicolors/minicolors.scss */"./resources/assets/vendor/libs/minicolors/minicolors.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/morris/morris.scss */"./resources/assets/vendor/libs/morris/morris.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/nestable/nestable.scss */"./resources/assets/vendor/libs/nestable/nestable.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/nouislider/nouislider.scss */"./resources/assets/vendor/libs/nouislider/nouislider.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.scss */"./resources/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/photoswipe/photoswipe.scss */"./resources/assets/vendor/libs/photoswipe/photoswipe.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/plyr/plyr.scss */"./resources/assets/vendor/libs/plyr/plyr.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/quill/editor.scss */"./resources/assets/vendor/libs/quill/editor.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/quill/typography.scss */"./resources/assets/vendor/libs/quill/typography.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/select2/select2.scss */"./resources/assets/vendor/libs/select2/select2.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/shepherd/shepherd.scss */"./resources/assets/vendor/libs/shepherd/shepherd.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/smartwizard/smartwizard.scss */"./resources/assets/vendor/libs/smartwizard/smartwizard.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/spinkit/spinkit.scss */"./resources/assets/vendor/libs/spinkit/spinkit.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/sweetalert2/sweetalert2.scss */"./resources/assets/vendor/libs/sweetalert2/sweetalert2.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/swiper/swiper.scss */"./resources/assets/vendor/libs/swiper/swiper.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/timepicker/timepicker.scss */"./resources/assets/vendor/libs/timepicker/timepicker.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/toastr/toastr.scss */"./resources/assets/vendor/libs/toastr/toastr.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/typeahead-js/typeahead.scss */"./resources/assets/vendor/libs/typeahead-js/typeahead.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/libs/vegas/vegas.scss */"./resources/assets/vendor/libs/vegas/vegas.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/pages/account.scss */"./resources/assets/vendor/sass/pages/account.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/pages/authentication.scss */"./resources/assets/vendor/sass/pages/authentication.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/pages/chat.scss */"./resources/assets/vendor/sass/pages/chat.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/pages/clients.scss */"./resources/assets/vendor/sass/pages/clients.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/pages/contacts.scss */"./resources/assets/vendor/sass/pages/contacts.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/pages/file-manager.scss */"./resources/assets/vendor/sass/pages/file-manager.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/pages/messages.scss */"./resources/assets/vendor/sass/pages/messages.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/pages/products.scss */"./resources/assets/vendor/sass/pages/products.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/pages/projects.scss */"./resources/assets/vendor/sass/pages/projects.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/pages/search.scss */"./resources/assets/vendor/sass/pages/search.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/pages/tasks.scss */"./resources/assets/vendor/sass/pages/tasks.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/pages/tickets.scss */"./resources/assets/vendor/sass/pages/tickets.scss");
__webpack_require__(/*! /var/www/resources/assets/vendor/sass/pages/users.scss */"./resources/assets/vendor/sass/pages/users.scss");
module.exports = __webpack_require__(/*! /var/www/resources/assets/sass/application.scss */"./resources/assets/sass/application.scss");


/***/ })

/******/ });