let playBtn = document.getElementById("play");
let audio = document.getElementById("audio");
let songSrc = document.getElementById("song");
let songTitle = document.getElementById("song-title");
let next = document.getElementById("next");



// create array of objects for song details

song = [
    "believer.mp3", "thunder.mp3", "song3.mp3", "song4.mp3", "song5.mp3"
];

PATH = "./music/";





playBtn.addEventListener("click",playMusic);
next.addEventListener("click", nextSong);
// audio.addEventListener("click", playMusic);





//functions

//play and pause functionality
function playMusic(){
    if(playBtn.classList.contains("fa-play") ){
        playBtn.classList.remove("fa-play");
        playBtn.classList.add("fa-pause");   
        audio.play(); 
        musicTrack()
    console.log(songSrc.src);

    } else {
        playBtn.classList.remove("fa-pause");   
        playBtn.classList.add("fa-play");
        audio.pause()   
    }
}


//changes title as current song name
function musicTrack(){
    //change title of track using split method
    let src = songSrc.src;
    src = src.split('/');
    src = src[4];
    src= src.substring(0,src.length-4);
    songTitle.innerText = decodeURI(src);
}

function nextSong(){
    songSrc.src = "./music/thunder.mp3";
    console.log(songSrc.src);

}