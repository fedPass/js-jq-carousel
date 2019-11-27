$(document).ready(function(){
    $('.next').click(function(){
        var imgCurrent = $('img.active');
        var bulletCurrent = $('i.active');
        var imgNext = imgCurrent.next('img');
        var bulletNext = bulletCurrent.next('i');
        if (imgNext.length == 0) {
            imgNext = $('.img-container img:first-child');
            bulletNext = $('bullet-container i:first-child');
        }
        imgCurrent.removeClass('active');
        bulletCurrent.removeClass('active');
        imgNext.addClass('active');
        bulletNext.addClass('active');
    });
    $('.back').click(function(){
        var imgCurrent = $('img.active');
        var bulletCurrent = $('i.active');
        var imgPrev = imgCurrent.prev('img');
        var bulletPrev = bulletCurrent.prev('i');
        if (imgPrev.length == 0) {
            imgPrev = $('.img-container img:last-child');
            bulletPrev = $('bullet-container i:last-child');
        }
        imgCurrent.removeClass('active');
        bulletCurrent.removeClass('active');
        imgPrev.addClass('active');
        bulletPrev.addClass('active');

    });
})
