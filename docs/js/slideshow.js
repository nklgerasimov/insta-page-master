$(document).ready(function () {
    let slideIndex = 0;

    showPhotos(); //функция показ фото

    function showPhotos() {
        
        const slides = $('.photo img');
        let i;
        //скрываем все фото
        for (i = 0; i < slides.length; i++) {
            $(slides[i]).hide();
        }
        //показываем фото
        slideIndex++;
        if ( slideIndex > slides.length ) {
            slideIndex = 1
        };
        $(slides[slideIndex - 1]).show();
        //задержка в 200 мс перед каждой фото
        setTimeout(showPhotos, 1000);
        
    }
})