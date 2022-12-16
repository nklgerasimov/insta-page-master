$(document).ready(function(){

    const audio = $('#audioTrack')[0];
    const playBtn = $('#audio-play');
    const pauseBtn = $('#audio-pause');
    const audioCtrl = $('[data-type="audio-control"]');

    initAudioPlayer();

    // audio.play();
    audio.play();
    setTimeout(initAudioPlayer, 800);

    function initAudioPlayer() {
        // playBtn.parent().show();
        pauseBtn.parent().show();
        audio.loop = true;

        audioCtrl.click(function() {
            if (audio.played) {
                console.log('!');
                audio.pause();
                pauseBtn.parent().hide();
                playBtn.parent().show();
            } else {
                audio.play();
                playBtn.parent().hide();
                pauseBtn.parent().show();
            }
            // if (audio.paused) {
            //     audio.play();
            //     pauseBtn.parent().show();
            //     playBtn.parent().hide();
            // } else {
            //     audio.pause();
            //     playBtn.parent().show();
            //     pauseBtn.parent().hide();
            // }
        })  
    }
});
