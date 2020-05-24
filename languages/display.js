
var videos = $(".vid");
    var buttons = $(".btn");
 
buttons.each(function( index){
    $(this).click(function(){
        

        if($(videos[index]).attr("bool")=="true"){
               $(videos[index]).slideUp();
            //    $(videos[index]).css("display","none");
               $(videos[index]).attr("bool","false");
       
           }
           else{
            $(videos[index]).slideDown();
            // $(videos[index]).css("display","block");
            $(videos[index]).attr("bool","true");
             
           }
           
    });
});

