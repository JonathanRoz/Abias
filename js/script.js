setTimeout(function(){
    $(".preloder").slideUp()
},2000)


$('.counter').counterUp({
    delay: 10,
    time: 1000
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
})

$(function(){
  var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});
})


AOS.init({ 
  duration: 3000,
  once: false,
  mirror: true,
});
$(window).scroll(function(){
  console.log($(window).scrollTop())


  if($(window).scrollTop() > 380){
    $(".menu").addClass("low")
  }else{
    $(".menu").removeClass("low")
  }

  if($(window).scrollTop() > 600){
    $(".up").fadeIn()
  }else{
    $(".up").fadeOut()
  }
})
$(".up").click(function(){
  $("html,body").animate({
    scrollTop:0
  },1000)
})
new kursor({
  type: 4
})
// $(".testi-slider").slick({
//   arrows:false,
  
// })




