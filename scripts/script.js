// JavaScript Document
// console.log(selectedVids);

// let video = document.querySelector('video');
// let button = document.querySelector('#pwr');

// pwr.addEventListener('click', () => {
//     video.src ='videos/mickey2004.mov'; })

document.getElementById('pwr').addEventListener("click",uitzetten);

var video = document.querySelector('video');
var button = document.getElementById('pwr')

function uitzetten(){
    if(video.style.opacity == '1'){
        video.style.opacity = '0';
        jaartalTekst.style.opacity = '0';
        video.pause();
    }else{
        video.style.opacity = '1';
        jaartalTekst.style.opacity = '1';
        video.play();
    }
    
}
console.log(vids);
// let selectedVids = ['mickey1928.mov', 'mickey1937.mov', 'mickey1940.mov', 'mickey1983.mov', 'mickey2004.mov','mickey2016.mov'];
// console.log(selectedVids);

var slider_vid = document.querySelector('video');
var vids = ['mickey1928.mov', 'mickey1937.mov', 'mickey1940.mov', 'mickey1983.mov', 'mickey2004.mov','mickey2016.mov'];
var i = 0; //current  Image index

var jaartalTekst = document.querySelector('h2');
var jaartal = ['1928', '1937', '1940', '1983', '2004','2016'];

document.getElementById('vorige').addEventListener("click",prev);
document.getElementById('volgende').addEventListener("click",next);
function prev(){
    if(i <= 0 ) i = vids.length;
    i--;
     setVid();
     setJaartal();
}

function next(){
    if ( i >= vids.length-1 ) i = -1;
    i++;
     setVid();
     setJaartal();
}

function setVid(){
     slider_vid.setAttribute('src','videos/' + vids[i]);
}

function setJaartal(){
    jaartalTekst.innerHTML = jaartal[i];
}

// Emoji animatie
document.getElementById('knop1').addEventListener("click", party2);
document.getElementById('knop1').addEventListener("click", party);

function party(){
    document.getElementById("emojiAnimatie").classList.add("beweeg");


    document.getElementById("emojiAnimatie").addEventListener("animationend", function(){
        document.getElementById("emojiAnimatie").classList.remove("beweeg");
    });
}
;
function party2(){
    document.getElementById("emojiAnimatie2").classList.add("beweeg");

    
    document.getElementById("emojiAnimatie2").addEventListener("animationend", function(){
        document.getElementById("emojiAnimatie2").classList.remove("beweeg");
    });
}

document.getElementById('knop2').addEventListener("click", rollen);
function rollen(){
    document.getElementById("emojiAnimatie3").classList.add("rollen");


    document.getElementById("emojiAnimatie3").addEventListener("animationend", function(){
        document.getElementById("emojiAnimatie3").classList.remove("rollen");
    });
}

// vuurwerk animatie
var divje = document.querySelector('div');
document.getElementById('knop3').addEventListener("click", knallen);

function knallen(){
    if(divje.style.opacity == '1'){
        divje.style.opacity = '0';
        
        
    }else{
        divje.style.opacity = '1';
        
    }
    
}
