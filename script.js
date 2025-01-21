// console.log("heelo")

let songIndex = 0;
let prevSongIndex = null;
let audioElement = new Audio('songs/1.mp3'); 
let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songitem'));
let DisplaySongName = document.getElementById('DisplaySongName');

let songs = [
    {songname:'Die With a Smile', filepath:'songs/1.mp3', coverpath:'covers/1.jpg'},
    {songname:'Those Eyes', filepath:'songs/2.mp3', coverpath:'covers/2.jpg'},
    {songname:'Golden Hour', filepath:'songs/3.mp3', coverpath:'covers/3.jpg'},
    {songname:'Dandelions', filepath:'songs/4.mp3', coverpath:'covers/4.jpg'},
    {songname:"Car's Outside", filepath:'songs/5.mp3', coverpath:'covers/5.jpg'},
    {songname:'A Thousand Years', filepath:'songs/6.mp3', coverpath:'covers/6.jpg'},
    {songname:'If the World was Ending', filepath:'songs/7.mp3', coverpath:'covers/7.jpg'}
]

songItem.forEach((element,i) => {
    // console.log(element)
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songname;
});

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//Updating Seekbar
audioElement.addEventListener('timeupdate',()=>{
    //Finding out the percentage of song that has been played
    const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

//Updating Seekbar to from where we want to play our songs
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


//Playing songs by clicking on button ahead
const makeAllPlays = (songIndex) => {
  const items = document.querySelectorAll(".songItemPlay");
  items.forEach((element) => {
    // console.log(element);
    if (element.classList.contains("fa-circle-pause")) {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  });
  const _element = document.getElementById(songIndex);
  _element.classList.remove("fa-circle-play");
  _element.classList.add("fa-circle-pause");
};

//Playing songs by clicking on button ahead

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    // console.log(element);
    element.addEventListener('click', (e)=>{
        songIndex = parseInt(e.target.id);
        makeAllPlays(songIndex);
        // console.log(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        DisplaySongName.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

//Changing song by previous element
document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex--;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    DisplaySongName.innerText = songs[songIndex].songname;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

//Changing song Next element
document.getElementById("forward").addEventListener("click",()=>{
    if(songIndex>=7){
        songIndex = 0;
    }
    else{
        songIndex++;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    DisplaySongName.innerText = songs[songIndex].songname;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})