var audio = document.getElementsByTagName("audio")[0];
var about = document.getElementsByTagName("about")[0];
var aboutBtn = document.getElementById("about")[0];
var body = document.getElementsByTagName("body")[0];
var interacted = false;

body.addEventListener("mouseover", function() {if(interacted) {} else {audio.play()}});

function toggleAudio() {
    interacted = true;
    return audio.paused ? audio.play() : audio.pause();
};

function aboutActive() {
    about.style.opacity = 1;
}
function aboutInactive() {
    about.style.opacity = 0;
}

function toggleAbout() {
    if (about.style.opacity == 0) {
        about.style.opacity = 1;
    }
    else {
        about.style.opacity = 0;
    }
    
}
