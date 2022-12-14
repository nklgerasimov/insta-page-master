$(document).ready(function () {
    let slideIndex = 0;

    showPhotos();

    function showPhotos() {
        
        const slides = $('.photo img');
        // console.log(slides);
        for (item of slides) {
            console.log(item);
            $(slides[item]).hide();
        }
            
        }
    }

)