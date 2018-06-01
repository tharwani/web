$(
  function(){
    $("[name='icon']").each(
      function(){
      $(this).hide();
    }
    );
    /*
    $(".left_pane").hover(function(){
        $("#icon_center").hide();
      $(".left_pane").animate(
        {
          height:"200px",
          width:"5%"
        },1000,function(){
          $("[name='icon']").fadeIn();
        }
      );
    },
    function(){
        $("[name='icon']").hide();
      $(".left_pane").animate(
        {
          height:"50px",
          width:"2%"
        },1000,function(){
            $("#icon_center").show();
        }
      );
    }

  );
*/
function gun(){
    $("#icon_center").hide();
  $(".left_pane").animate(
    {
      height:"200px",
      width:"5%"
    },1000,function(){
      $("[name='icon']").fadeIn();
    }
  );
  
}

function fun(){
  $("[name='icon']").hide();
  $(".left_pane").animate(
    {
      height:"50px",
      width:"2%"
    },1000,function(){
        $("#icon_center").show();
    }
  );
}
var count=0;
$(".left_pane").click(
function(){
  count++;
  if(count%2==1)
  gun();
  else
  fun();
}
);



  $("#starting").click(
    function(){
      $("#hideText").slideDown('slow',function(){});
    }
  );
//for navigation bar
  $(".nav").css({
    "background-color":"#6495ed",
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
        "background-color":"#6495ed",
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
      "background-color":"#a52a2a",
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
  $(".start_image1_right").hide().fadeIn(2000);
  $(".start_message").hide().slideDown(2000);
  // $(".start_message").slideDown(2000,function(){});
  $("#starting").hide().fadeIn(2000);
  $(".nav li a,#starting").click(function(event){
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
  var flag3=0;
  $(".para3").hide();
  var flag4=0;
  $(".para4").hide();
  var flag5=0;
  $(".para5").hide();
  $(document).scroll(function(){
  var x=$(document).scrollTop();
  var y=$("#about").offset().top;

  if(y<=x+100&&y>=x-50)
  {

    if(flag==0)
    {

$(".para1").slideDown('slow');
$(".heading2:eq(0)").hide().fadeIn(1000);

    }
    flag++;
  }
  else if(y>=x+550||y<=x-650){
    $(".para1").hide();

    flag=0;
  }
/////////////////////////////////////
  x=$(document).scrollTop();
  y=$("#donate").offset().top;
  if(y<=x+100&&y>=x-50)
  {

    if(flag2==0)
    {

$(".para2").slideDown('slow');
$(".heading2:eq(1)").hide().fadeIn(1000);
}

    flag2++;
  }
  else if(y>=x+550||y<=x-600){
    $(".para2").hide();
    flag2=0;
  }

  /////////////////////////////////////
  /////////////////////////////////////
    x=$(document).scrollTop();
    y=$("#family").offset().top;
    if(y<=x+100&&y>=x-50)
    {

      if(flag3==0)
      {

  $(".para3").slideDown('slow');
  $(".heading2:eq(2)").hide().fadeIn(1000);
  }

      flag3++;
    }
    else if(y>=x+550||y<=x-600){
      $(".para3").hide();
      flag3=0;
    }

    /////////////////////////////////////
    /////////////////////////////////////
      x=$(document).scrollTop();
      y=$("#login").offset().top;
      if(y<=x+100&&y>=x-50)
      {

        if(flag4==0)
        {

    $(".para4").slideDown('slow');
    $(".heading2:eq(3)").hide().fadeIn(1000);
    }

        flag4++;
      }
      else if(y>=x+550||y<=x-600){
        $(".para4").hide();
        flag4=0;
      }

      /////////////////////////////////////
      /////////////////////////////////////
        x=$(document).scrollTop();
        y=$("#contact").offset().top;
        if(y<=x+100&&y>=x-50)
        {

          if(flag5==0)
          {

      $(".para5").slideDown('slow');
      $(".heading2:eq(4)").hide().fadeIn(1000);
      }

          flag5++;
        }
        else if(y>=x+550||y<=x-600){
          $(".para5").hide();
          flag5=0;
        }

        /////////////////////////////////////


});
}
);
