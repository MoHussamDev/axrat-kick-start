
var animation =bodymovin.loadAnimation({
  container:document.getElementById('bm'),
  renderer:'svg',
  loop:true,
  autoplay:true,
  path:'../assets/img/data.json'


  
});




var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 5,
  loop: true,
  autoplay:true,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  loop:true,
  autoplay:true,
  loopedSlides: 5, //looped slides should be the same
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});
//swiper

  var mySwiper = new Swiper ('.main-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:true,
    speed:1000,
    

    //If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

   
  });
  

setTimeout(function() {
  $('#preloader').fadeOut('slow',function(){$(this).remove();});;
}, 7000);


// var mute = $('#play');
// var vedio = $('vedio');
// var coin = false

// $('#play').on('click',function(){
//   if(!coin){

//     mute.removeClass('pe-7s-mute');
//     mute.addClass('pe-7s-volume');
//     coin = true;
//   }else{
//     mute.removeClass('pe-7s-volume');
//     mute.addClass('pe-7s-mute');
//     coin = false;
    
//   }
//   if( $("video").prop('muted') ) {
//     $("video").prop('muted', false);
//   } else {
//   $("video").prop('muted', true);
//   }
 
// })

// var galleryThumbs = new Swiper('.gallery-thumbs', {
//   spaceBetween: 10,
//   slidesPerView: 4,
//   loop: true,
//   freeMode: true,
//   loopedSlides: 5, //looped slides should be the same
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
// });
// var galleryTop = new Swiper('.gallery-top', {
//   spaceBetween: 10,
//   loop:true,
//   loopedSlides: 5, //looped slides should be the same
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   thumbs: {
//     swiper: galleryThumbs,
//   },
// });

menOpen = false;
$('.hamburger').on('click', function(){
    if(!menOpen){
      $('#burg').addClass('is-active');
      $('#smallMen').addClass('open');
      menOpen=true;
    }else{
      $('#burg').removeClass('is-active')
      $('#smallMen').removeClass('open');
      menOpen=false;

    }
  
})




$(".static-menu div.link").append("<i class='fa fa-chevron-down'></i>");
$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
 
    var links = this.el.find('.link');
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
  };
 
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();
 
    $next.slideToggle();
    $this.parent().toggleClass('open');
 
    if (!e.data.multiple) {
      $el.find('.sub-menu').not($next).slideUp().parent().removeClass('open');
    }
  };
 
  var accordion = new Accordion($('#accordion'), false);
});


  var modal = $('#innerModal')
  var theMod = $('#modal')
  $('#yalla').on('click',function (e){
    e.preventDefault()     
      theMod.addClass('openModal') ;
    
 
  
});
$('.closeButton').on('click',function (e){
  e.preventDefault()     
    theMod.removeClass('openModal') ;
   
 
  
});


////////////////////////////////
//////////---packages function ////////
$(window).resize(function() {
  if ($(window).width() <= 991)$ (".col-md-9").addClass("col-md-12");
  else $('.col-md-9').removeClass('col-md-12')
})