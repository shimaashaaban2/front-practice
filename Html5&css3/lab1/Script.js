var video = document.getElementsByTagName('video')[0];

function playVideo(){
   video.play();
   }
   
   document.getElementById('btn1').onclick = playVideo;
   
   function pauseVideo(){
     video.pause();
   }

   document.getElementById('btn2').onclick = pauseVideo;

   function mutedVideo(){
       video.muted = true ;
   }
   document.getElementById('btn3').onclick = mutedVideo;

   function unmutedVideo(){
       video.muted = false ;
   }
   document.getElementById('btn7').onclick = unmutedVideo;

function Backvid(){
    document.getElementsByTagName('video')[0].playbackRate= 1.5
}
function Backvid2(){
    document.getElementsByTagName('video')[0].playbackRate= 0.75
}
function Backvid3(){
    document.getElementsByTagName('video')[0].playbackRate= 0.25
}
document.getElementById('btn4').onclick = Backvid;
document.getElementById('btn5').onclick = Backvid2;
document.getElementById('btn6').onclick = Backvid3;

function volumeVid(val){
 document.getElementsByTagName('video')[0].volume= val/1;
    
}
document.getElementById('v1').onclick = volumeVid;



  video.onloadeddata=function(){ 
    let currentTime = document.querySelector("span.current-time");
    let totalTime = document.querySelector("span.total-time");
    let videorange= document.querySelector(".video-range")
    let seconds=document.querySelector(".total-time-seconds")
    let minutes=document.querySelector(".total-time-min")
     totalTime.innerHTML= Math.floor(video.duration/60)
     minutes.innerHTML= Math.floor(video.duration)-totalTime.textContent*60
     videorange.addEventListener("input",function(){
     video.currentTime = videorange.value ;
    })
    video.addEventListener("timeupdate",function(){
     seconds.textContent = Math.floor(video.currentTime/60)
     currentTime.textContent = Math.floor(video.currentTime)-seconds.textContent*60
     videorange.value = video.currentTime ;
    })
    }

   