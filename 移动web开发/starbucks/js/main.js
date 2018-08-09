$(".nav-menu").on("click",function(){
    $(".overlay").addClass("active");
  })
  $(".menu-close").on("click",function(){
    $(".overlay").removeClass("active");
  })
  var oca=document.getElementsByClassName("carousel-home")[0];
  var index=0;
  setInterval(function(){
     oca.style.left=oca.offsetLeft-944.3+'px';
     index++;
     if(index==3){
       index=0;
      oca.style.left=0;
     }
  },2000)
  