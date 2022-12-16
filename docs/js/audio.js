$(document).ready(function(){

    const audio = $('#audioTrack')[0];

    const playBtn = $('#audio-play');
    const pauseBtn = $('#audio-pause');
    const audioCtrl = $('[data-type="audio-control"]');

    initAudioPlayer();

    // audio.play();
    function initAudioPlayer() {
        playBtn.parent().show();
        audio.loop = true;

        audioCtrl.click(function() {
            if (audio.paused) {
                audio.play();
                pauseBtn.parent().show();
                playBtn.parent().hide();
            } else {
                audio.pause();
                playBtn.parent().show();
                pauseBtn.parent().hide();
            }
        })  
    }
});
