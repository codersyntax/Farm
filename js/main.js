window.PlayBackgroundMusic = (src, volume) => {
    var audio = document.getElementById("background-music");
    if (audio != null) {
        var audioSource = document.getElementById("background-source-music");
        if (audioSource != null) {
            audioSource.src = window.location.href + src;
            audio.load();
            audio.volume = volume;
            audio.play();
        }
    }
}

window.ChangeSoundVolume = (volume) => {
    var audio = document.getElementById("background-music");
    if (audio != null) {
        var audioSource = document.getElementById("background-source-music");
        if (audioSource != null) {
            audio.volume = volume;
        }
    }
}