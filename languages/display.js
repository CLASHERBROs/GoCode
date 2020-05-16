var videos = document.getElementsByClassName("vid");
var buttons = document.getElementsByClassName("btn");
var videosFlag=[];
for(let i=0;i<videos.length;++i){
    videosFlag.push("false");
    buttons[i].addEventListener("click",function(){show(videos[i],i);
    }.bind(null,i));
}
function show(vidName,index){
  
 var flag = videosFlag[index];

 if(flag==true){
        
        vidName.style.display = "none";
flag = false;

    }
    else{
        vidName.style.display = "block";
        flag = true;
      
    }
    videosFlag[index] = flag;
}