$(function(){

    $(".box-hidden").slice(0, 3).show();

    $("#loadbtn").on('click', function(){

         $(".box-hidden:hidden").slice(0,3).slideDown();

        if($(".box-hidden:hidden").length==0){
             $("#loadbtn").fadeOut('slow');
          }

          $('html,body').animate({
              scrollTop: $(this).offset().top
          },1500);
     });
});