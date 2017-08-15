$(document).ready(function(){
  $('.menujq > ul > li:has(ul)').addClass('desplegable');
   $('.menujq > ul > li > a').click(function() {
     var comprobar = $(this).next();
     $('.menujq li').removeClass('active');
     $(this).closest('li').addClass('active');
     if((comprobar.is('ul')) && (comprobar.is(':visible'))) {
        $(this).closest('li').removeClass('active');
        comprobar.slideUp('normal');
     }
     if((comprobar.is('ul')) && (!comprobar.is(':visible'))) {
        $('.menujq ul ul:visible').slideUp('normal');
        comprobar.slideDown('normal');
     }
  });
  $('.menujq > ul > li > ul > li:has(ul)').addClass('desplegable');

   $('.menujq > ul > li > ul > li > a').click(function() {
     var comprobar = $(this).next();
     $('.menujq ul ul li').removeClass('active');
     $(this).closest('ul ul li').addClass('active');
     if((comprobar.is('ul ul')) && (comprobar.is(':visible'))) {
        $(this).closest('ul ul li').removeClass('active');
        comprobar.slideUp('normal');
     }
     if((comprobar.is('ul ul')) && (!comprobar.is(':visible'))) {
        $('.menujq ul ul ul:visible').slideUp('normal');
        comprobar.slideDown('normal');
     }
  });

   $('.hamburger').click(function() {
      $( '.menujq' ).slideToggle( "slow", function() {
        // Animation complete.
         if ($(this).is(':visible')) $(this).css('display','block'); 
      });
   });

   $(function() {
      $('.tabs nav li').on('click', function() {
        show_content($(this).index());
      });
      
      show_content(0);

      function show_content(index) {
        // Make the content visible
        $('.tabs .content.visible').removeClass('visible');
        $('.tabs .content:nth-of-type(' + (index + 1) + ')').addClass('visible');

        // Set the tab to selected
        $('.tabs nav li.selected').removeClass('selected');
        $('.tabs nav li:nth-of-type(' + (index + 1) + ')').addClass('selected');

        
      }
    });


   $("#scrolling-bottom").on('click', function(e) {
       // prevent default anchor click behavior
        e.preventDefault();
 
       $('html, body').animate({
           scrollTop: $(this.hash).offset().top
         },1000, function(){
            window.location.hash = this.hash;
         });

   });


    $('.tabs .menu-container').on("click",function() {
      $( '.tabs .menu-container-inner' ).toggleClass("visible", 1000, "easeOutSine");
      $( '.tabs .container' ).toggleClass("no-visible", 1000, "easeOutSine");
    });
    $('.tabs .menu-container-inner li').on("click",function() {
      $('.tabs .menu-container-inner').removeClass('visible' , 1000, "easeOutSine");
      $('.tabs .container').removeClass('no-visible' , 1000, "easeOutSine");
    });
  

  $(window).scroll(function(){
    if( $(this).scrollTop() > 0 ){
      $('.header-container').addClass('header-container2');
      $('header .logo-container .logo img').attr('src', 'img/logo2.png');
      $('header .logo-container .logo img').attr('width', '190');
    } else {
      $('.header-container').removeClass('header-container2');
      $('header .logo-container .logo img').attr('src', 'img/logo.png');
    }
  });

    /*$(window).resize(function() {
      if($(window).width() < 1200){
       $('.tabs nav').css("display", "none");
    }

    if($(window).width() > 1200){
       $('.tabs nav').css("display", "inline-block");
    }
   });

    if($(window).width() < 1200){
       // $('.tabs nav li.selected').removeClass('selected');
       $('.tabs nav').css("display", "none");
    }
    if($(window).width() > 1200){
       $('.tabs nav').css("display", "inline-block");
    }*/
});
