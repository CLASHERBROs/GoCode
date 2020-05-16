var video1 = document.getElementById("vid1");
var vid2 = document.getElementById("vid2");
var vid3 = document.getElementById("vid3");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn1 = document.getElementById("btn1");
var videosFlag = ["false","flase","false","false"];
btn1.addEventListener("click",function(){show(vid1);});
btn2.addEventListener("click",function(){show(vid2);});
btn3.addEventListener("click",function(){show(vid3);});
function show(vidName){
 var flag = videosFlag[Number(String(vidName)[String(vidName).length-1])];
 console.log(flag); 
 if(flag==true){
        
        vidName.style.display = "none";
flag = false;

    }
    else{
        vidName.style.display = "block";
        flag = true;
      
    }
    videosFlag[Number(String(vidName)[String(vidName).length-1])] = flag;
}