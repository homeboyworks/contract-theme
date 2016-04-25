define(["jquery"], function ($) {
    return function () {
        console.log("Navigation JS Callback executed");

        var navbarToggle = $('#navbar-toggle-id');
        var navbarCollapse = $('#navbar-collapse-id');

        navbarCollapse.on('show.bs.collapse', function () {

            navbarToggle.addClass('opened');

        });
        navbarCollapse.on('hidden.bs.collapse', function () {

            navbarToggle.removeClass('opened');

        });
    }
});