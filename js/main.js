$(function() {
        $('.animate-rotate-1').animatedHeadline({
            animationType: 'rotate-1'
        });

        $('.animate-type').animatedHeadline({
            animationType: 'type'
        });

        $('.animate-rotate-2').animatedHeadline({
            animationType: 'rotate-2'
        });

        $('.animate-loading-bar').animatedHeadline({
            animationType: 'loading-bar'
        });

        $('.animate-slide').animatedHeadline({
            animationType: 'slide'
        });

        $('.animate-clip').animatedHeadline({
            animationType: 'clip'
        });

        $('.animate-zoom').animatedHeadline({
            animationType: 'zoom'
        });

        $('.animate-rotate-3').animatedHeadline({
            animationType: 'rotate-3'
        });

        $('.animate-scale').animatedHeadline({
            animationType: 'scale'
        });

        $('.animate-push').animatedHeadline({
            animationType: 'push'
        });
        var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});

 

        $(".sliderrrr").slick({
            arrows:false,
            asNavFor:".bottom",
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows:true,
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows:true,
                  prevArrow:'<i class="fas fa-long-arrow-alt-left lef"></i>',
                  nextArrow:'<i class="fas fa-long-arrow-alt-right righ"></i>',

                }
              },
              {
                breakpoint: 769,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows:true,
                  prevArrow:'<i class="fas fa-long-arrow-alt-left lef"></i>',
                  nextArrow:'<i class="fas fa-long-arrow-alt-right righ"></i>',

                }
              },
           
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                //  centerMode:true,
                //  centerPadding:"0",
                 vertical:true,
                 arrows:true,
                 prevArrow:'<i class="fas fa-long-arrow-alt-up lef"></i>',
                 nextArrow:'<i class="fas fa-long-arrow-alt-down righ"></i>',
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          })
          
          $(".bottom").slick({
            arrows:true,
            slidesToShow:3,
            centerMode: true,
            centerPadding:'0px',
            prevArrow:'<i class="fas fa-long-arrow-alt-left prev"></i>',
            nextArrow:'<i class="fas fa-long-arrow-alt-right next"></i>',
            vertical:false,
            asNavFor:".sliderrrr",
            


            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  centerMode:true,
                }
              },
            
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                 vertical:false,
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          })



        $(".two").mouseenter(function(){
            $(".two .round").css("transform","scale(1)")
            $(".six .round").css("transform","scale(1)")
            $(".line2").css("width","37%")
          
          })
          $(".two").mouseleave(function(){
            $(".two .round").css("transform","scale(.8)")
            $(".six .round").css("transform","scale(.5)")
            $(".line2").css("width","12%")
        })

        $(".three").mouseenter(function(){
            $(".two .round").css("transform","scale(1)")
            $(".six .round").css("transform","scale(1)")
            $(".three .round").css("transform","scale(1)")
            $(".seven .round").css("transform","scale(1)")
            $(".line2").css("width","63%")
          
          })
          $(".three").mouseleave(function(){
            $(".two .round").css("transform","scale(.8)")
            $(".six .round").css("transform","scale(.5)")
            $(".three .round").css("transform","scale(.8)")
            $(".seven .round").css("transform","scale(.5)")
            $(".line2").css("width","12%")
        })
        $(".four").mouseenter(function(){
            $(".two .round").css("transform","scale(1)")
            $(".six .round").css("transform","scale(1)")
            $(".three .round").css("transform","scale(1)")
            $(".seven .round").css("transform","scale(1)")
            $(".four .round").css("transform","scale(1)")
            $(".eight .round").css("transform","scale(1)")
            $(".line2").css("width","100%")
          
          })
          $(".four").mouseleave(function(){
            $(".two .round").css("transform","scale(.8)")
            $(".six .round").css("transform","scale(.5)")
            $(".three .round").css("transform","scale(.8)")
            $(".seven .round").css("transform","scale(.5)")
            $(".four .round").css("transform","scale(.8)")
            $(".eight .round").css("transform","scale(.5)")
            $(".line2").css("width","12%")
          
          })
        
          $(".two").mouseenter(function(){
            $(".two h1").css("color","#9d7ddd")
          })
          $(".two").mouseleave(function(){
            $(".two h1").css("color","#000")
        })
        $(".three").mouseenter(function(){
            $(".two h1").css("color","#9d7ddd")
            $(".three h1").css("color","#9d7ddd")
          })
          $(".three").mouseleave(function(){
            $(".two h1").css("color","#000")
            $(".three h1").css("color","#000")
        })
        $(".four").mouseenter(function(){
            $(".two h1").css("color","#9d7ddd")
            $(".three h1").css("color","#9d7ddd")
            $(".four h1").css("color","#9d7ddd")
          })
          $(".four").mouseleave(function(){
            $(".two h1").css("color","#000")
            $(".three h1").css("color","#000")
            $(".four h1").css("color","#000")
        })
          
        $(".testi-slider").slick({
            arrows:false,
            fade:true,
            asNavFor:".bottom-slider",
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                //  centerMode:true,
                //  centerPadding:"0",
                // fade:false,
                // vertical:true,

                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
            
          })
          
           $(".bottom-slider").slick({
              slidesToShow:5,
              asNavFor:".testi-slider",
              centerMode:true,
              centerPadding:"0",
              prevArrow:"<button class='prev'> <i class='fas fa-long-arrow-alt-left left'></i> See Previous </button>",
              nextArrow:"<button class='next'><i class='fas fa-long-arrow-alt-right right'></i> See Next</button>",
              
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    
                  }
                },
              
                {
                  breakpoint: 405,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 575,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                   centerMode:true,
                   centerPadding:"0",
                 
  
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]



            })

            $('#bar1').barfiller();
            $('#bar2').barfiller();
            $('#bar3').barfiller();
            $('#bar4').barfiller();
            $('#bar5').barfiller();
            $('#bar6').barfiller();
            

            var para = document.getElementById('para');
    var parallaxInstance = new Parallax(para,{
      relativeInput: true
    });

   


    });
  