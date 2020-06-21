$(document).ready(function(){
    //pre-loader

    $(window).load(function() {
        $("#loading").delay(1000).fadeOut(500);
       // $("#loading-center").click(function() {
       // $("#loading").fadeOut(1000);
       // })
    })
    
    //one page nav
    /*$('#nav').onePageNav( {
        currentClass: 'current', changeHash: true, scrollSpeed: 750, scrollThreshold: 0.2, easing: 'swing', scrollOffset: 20
    }
    );*/

     // scroll down
    
    
      
    
    //fixed menu

    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
         $(".header-area").addClass("scroll-header animated fadeInDown");
        }else{
         $(".header-area").removeClass("scroll-header animated fadeInDown");
        }
   });

   //mobile-menu
   $('#mobile-menu-active').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu'
   });


   //portfolio-area
    $('.portfolio-menu ul li').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


    var $grid = $('.portfolio-item-gallery').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1
      }
    })

    
    $('.filter-button-group').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });


    //testimonial-area
    $('.testimonial-active').owlCarousel({
      loop:true,
      margin:20,
      nav:false,
      autoplay:true,
      autoplayTimeout: 3000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
      }
  })





  //client-logo-area

  $('.client-logo-carusol').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
   // autoplay:true,
   // autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:5
        },
        1000:{
            items:5
        }
    }
})



 
  

});
 