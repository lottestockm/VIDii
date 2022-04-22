// JavaScript Document
// console.log(selectedVids);

// let video = document.querySelector('video');
// let button = document.querySelector('#pwr');

// pwr.addEventListener('click', () => {
//     video.src ='videos/mickey2004.mov'; })


var video = document.querySelector('video');
var button = document.getElementById('pwr')

function uitzetten(){
    if(video.style.opacity == '1'){
        video.style.opacity = '0';
        video.pause();
    }else{
        video.style.opacity = '1';
        video.play();
    }
    
}
console.log(vids);
// let selectedVids = ['mickey1928.mov', 'mickey1937.mov', 'mickey1940.mov', 'mickey1983.mov', 'mickey2004.mov','mickey2016.mov'];
// console.log(selectedVids);

var slider_vid = document.querySelector('video');
var vids = ['mickey1928.mov', 'mickey1937.mov', 'mickey1940.mov', 'mickey1983.mov', 'mickey2004.mov','mickey2016.mov'];
var i = 0; //current  Image index

function prev(){
    if(i <= 0 ) i = vids.length;
    i--;
    return setVid();
}

function next(){
    if ( i >= vids.length-1 ) i = -1;
    i++;
    return setVid();
}

function setVid(){
    return slider_vid.setAttribute('src','videos/' + vids[i]);
}