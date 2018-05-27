$(
  function(){

  $("#starting").click(
    function(){
      $("#hideText").slideDown('slow',function(){});
    }
  );
//for navigation bar
  $(".nav").css({
    "background-color":"#4682b4",
    "color":"black"
  });
   $(".nav li").css({
     "border":"0"
   });
  $(".nav li a").css({
    "color":"white"
  });

  $(window).scroll(function(){
    if($(".nav").offset().top===0)
    {
      $(".nav").css({
        "background-color":"#4682b4",
        "color":"white"
      });
       $(".nav li").css({
         "border":"0"
       });
      $(".nav li a").css({
        "color":"white"
      });
      return;
    }
    $(".nav").css({
      "background-color":"#8b0a50",
      "color":"#ffd700"
    });
     $(".nav li").css({
       "border":""
     });
    $(".nav li a").css({
      "color":"#ffd700"
    });

  });
  //end of navigation bar
  $(".start_image1").hide().fadeIn(2000);
  $(".start_message").hide().slideDown(2000);
  // $(".start_message").slideDown(2000,function(){});
  $(".button,a.justLink").hide().fadeIn(2000);
  $(".nav li a,.justLink").click(function(event){
    if($(this).hash!=="")
    {
      event.preventDefault();

    var hash=this.hash;
    $('html,body').animate({
      scrollTop: $(hash).offset().top
    },800,function(){
      window.location.hash=hash;
    }

);
}
  });
//////////////////////////////////////////
  /*random gilberish*/
  var flag=0;
  $(".para1").hide();
  var flag2=0;
  $(".para2").hide();
  $(document).scroll(function(){
  var x=$(document).scrollTop();
  var y=$("#about").offset().top;
 
  if(y<=x+100&&y>=x-50)
  {

    if(flag==0)
    {

$(".para1").slideDown('slow');
$(".heading:eq(0)").hide().fadeIn(1000);

    }
    flag++;
  }
  else if(y>=x+550||y<=x-650){
    $(".para1").hide();
    
    flag=0;
  }
/////////////////////////////////////
  x=$(document).scrollTop();
  y=$("#course").offset().top;
  if(y<=x+100&&y>=x-50)
  {

    if(flag2==0)
    {

$(".para2").slideDown('slow');
$(".heading:eq(1)").hide().fadeIn(1000);
}

    flag2++;
  }
  else if(y>=x+550||y<=x-600){
    $(".para2").hide();
    flag2=0;
  }
  /////////////////////////////////////



});
}
);
