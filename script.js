$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.headernav').addClass('active');
        } else {
            $('.headernav').removeClass('active');
        }

    });
});
//メニュー内を閉じておく
$(function() {
    $('.headernav a[href]').click(function() {
        $('.headernav').removeClass('active');
       $('.hamburger').removeClass('active');

    });
});

$(function() {
    if (window.matchMedia( "(max-width: 481px)" ).matches) {
        $('.accordion_content h2').removeClass('close');
        $('.box').slideToggle(0);
    };
});

$(function() {
    $('.accordion_content h2').click(function() {
        if($(this).hasClass('close')){$(this).removeClass('close');}
        else {$(this).addClass('close');}
        $(this.nextElementSibling).slideToggle(100);
    });
});
