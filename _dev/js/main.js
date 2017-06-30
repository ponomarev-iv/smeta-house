/**
 * Created by ponomarev-iv on 27.06.2017.
 */

function toggleMenu(){
    var menu = $('#js-nav'),
        link = menu.children();

    link.click(function(){
      if($(this).hasClass('is-active')){
          return false
      }
      else{
          link.removeClass('is-active');
          $(this).addClass('is-active');
      }
    })
}


function animateHeader(){
    var tl = new TimelineMax();

    tl
        .fromTo('.header__left', 1, {y:-100,opacity: 0}, {y: 0,opacity: 1})
        .fromTo('.header__right', 1, {x: 200, opacity: 0}, {x:0, opacity: 1},"-=0.7")
        .staggerFromTo('.main-nav a', 0.5, {opacity:0,y: -30}, {opacity: 1,y: -0}, 0.1)
        .fromTo('.hero__title', 1, {y: 20, opacity: 0}, {y: 0, opacity: 1},"-=0.7")
        .fromTo('.hero__txt', 0.5, {y: 30, opacity: 0}, {y: 0, opacity: 1})
        .fromTo('.hero__form', 1, {opacity: 0}, {opacity: 1},"-=0.7")
        .fromTo('.scroll-down', 0.5, {y:10, opacity: 0}, {y: 0, opacity: 1},"-=0.5");
}

animateHeader();

function initSwiper(){
    var mySwiper = new Swiper ('#js-feedback', {
        // Optional parameters
        loop: true,

        // Navigation arrows
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    })
}

function scrollToBlock(){
    var nav = $('#js-nav'),
        link = nav.children('a');

    link.click(function(e){
        e.preventDefault();

        var idBlock = $(this).attr('href');
        if ($(idBlock).length != 0){
            $('html, body').animate({ scrollTop: $(idBlock).offset().top - 90}, 500);
        }
        return false;
    })
}

function scrollLink(){
    var link = $('#js-scroll');

    link.click(function(e){
        e.preventDefault();

        var idBlock = $(this).attr('href');
        if ($(idBlock).length != 0){
            $('html, body').animate({ scrollTop: $(idBlock).offset().top - 90 }, 500);
        }
        return false;
    })
}

function fixHeader(){
    var header = $('#js-header');

    $(window).scroll(function (){
        header.addClass('is-fixed');
    });

    if ($(window).scrollTop() > 10) {
        header.addClass('is-fixed');
    }
}

function navPage(){
    $('#js-nav').singlePageNav({
        filter: ':not(.external)',
        updateHash: true,
        currentClass: 'is-active'
    });
}

$(document).ready(function(){
    toggleMenu();
    initSwiper();
    // scrollToBlock();
    scrollLink();
    fixHeader();
    navPage()
});