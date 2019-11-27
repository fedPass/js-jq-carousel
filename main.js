$(document).ready(function(){
    $('.next').click(function(){
        var imgCurrent = $('img.active');
        var imgNext = imgCurrent.next('img');
        var bulletCurrent = $('i.active');
        var bulletNext = bulletCurrent.next('i');
        if (imgNext.length == 0) {
            imgNext = $('.img-container img:first-child');
            bulletNext = $('.bullet-container i:first-child');
        }
        imgCurrent.removeClass('active');
        bulletCurrent.removeClass('active');
        imgNext.addClass('active');
        bulletNext.addClass('active');
    });
    $('.back').click(function(){
        var imgCurrent = $('img.active');
        var imgPrev = imgCurrent.prev('img');
        var bulletCurrent = $('i.active');
        var bulletPrev = bulletCurrent.prev('i');
        if (imgPrev.length == 0) {
            imgPrev = $('.img-container img:last-child');
            bulletPrev = $('.bullet-container i:last-child');
        }
        imgCurrent.removeClass('active');
        bulletCurrent.removeClass('active');
        imgPrev.addClass('active');
        bulletPrev.addClass('active');
    });

    //Bonus: cliccando sul pallino si apre img corrispondende
    $('.fas.fa-circle').click(function(){
        //devo prendere l'i del pallino
        var indexBullet = $(this).index();
        console.log('hai cliccato sul pallino in posizione: ' + indexBullet);
        // var bulletCurrent = $('i.active');
        // bulletCurrent.removeClass('active');
        // $(this).addClass('active');

        //deve diventare active la img con i uguale a indexBullet
        // var fotoCorrispondente = $('img[indexBullet]');
        // $('img[indexBullet]').addClass('active');

        // //dovrei rimuovere active da quella attuale per agg a quello in posizione indexBullet
        // var imgCurrent = $('img.active');
        // var bulletCurrent = $('i.active');
        // imgCurrent.removeClass('active');
        // bulletCurrent.removeClass('active');
        //
        // //prendi in div con le img --> $('.img-container')
        // //trova img in posizione (indexBullet)
        // //aggiungigli la classe active --> .addClass('active');
        // // $('.img-container').find('img[indexBullet]').addClass('active');
        // $('.img-container').children([img[indexBullet]).addClass('active');
        // $('.bullet-container').children([i[indexBullet]).addClass('active');
    });
})
