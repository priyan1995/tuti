$(document).ready(function () {

$('.main-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

});

function myFunction(){
    document.getElementById("pd_demoVideo").style.display="block";
    document.getElementById("pdPlayBtn").style.display="none";
  }