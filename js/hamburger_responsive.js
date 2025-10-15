$(function () {
    $('.menu-btn').click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.gnavi__sp-style').addClass('active');
        } else {
            $('.gnavi__sp-style').removeClass('active');
        }
    });
});