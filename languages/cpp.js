var vid1 = document.getElementById("cppvid1");
var vid2 = document.getElementById("cppvid2");
var vid3 = document.getElementById("cppvid3");
var btn2 = document.getElementById("cppbtn2");
var btn3 = document.getElementById("cppbtn3");
var btn1 = document.getElementById("cppbtn1");
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