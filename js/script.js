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

var previewImg = document.getElementById("preview");
var previewNum = document.getElementById("previewnum");
var previews = ["0001","0002","0005","0007","0008"];
var i = 0;
function changeImage() {
    previewImg.style.backgroundImage = "url(trees/"+previews[i]+"_512x512.png)"
    previewNum.innerText = "#"+previews[i];
    i = i+1;
    if (i==previews.length) i=0;
    // console.log(i);
}
setInterval(changeImage,2000);





