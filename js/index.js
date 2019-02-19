$(document).ready(function(){
  
  var image_array = document.getElementsByClassName('image-p');
 
  $('img').click(function(){
    $('#gallery-zoom').css('display','flex');   
    for(var i = 0; i < image_array.length; i++){
      if(image_array[i].src == this.src){
            var image = document.getElementById("img-zoom");
    image.src = this.src;
      }
    }
  });
  
  $('#right-arrow, #left-arrow').click(function(){
   
    var image = document.getElementById("img-zoom");
    
       if(image_array[image_array.length-1].src == image.src && this.id == "right-arrow"){
         image.src = image_array[0].src;  
        }
    
        if(image_array[0].src == image.src && this.id == "left-arrow"){
         image.src = image_array[image_array.length-1].src;  
        }
    
     for(var i = 0; i < image_array.length; i++){
      if(image_array[i].src == image.src){
            
        if(this.id == "right-arrow"){
           console.log(image_array[i]); $(image_array[i]).css('left','-100%');
            image.src = image_array[i+1].src;
            break;
        }else{
            image.src = image_array[i - 1].src;
        }        
      }
    }    
  });
    
  $('#close').click(function(){
    $('#gallery-zoom').css('display','none');   
  });
  
});