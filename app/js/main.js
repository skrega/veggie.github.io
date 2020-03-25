$(function () {

    $('.menu__inner-tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.menu__inner-tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.menu__inner-tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

    new WOW().init();
});