/**
 * Created by ponomarev-iv on 27.06.2017.
 */

function toggleMenu() {
  var menu = $('#js-nav'),
    link = menu.children();

  link.click(function () {
    if ($(this).hasClass('is-active')) {
      return false
    } else {
      link.removeClass('is-active');
      $(this).addClass('is-active');
    }
  })
}


function animateHeader() {
  var tl = new TimelineMax();

  tl
    .fromTo('.header__left', 1, {y: -100, opacity: 0}, {y: 0, opacity: 1})
    .fromTo('.header__right', 1, {x: 200, opacity: 0}, {x: 0, opacity: 1}, "-=0.7")
    .staggerFromTo('.main-nav a', 0.5, {opacity: 0, y: -30}, {opacity: 1, y: -0}, 0.1)
    .fromTo('.hero__title', 1, {y: 20, opacity: 0}, {y: 0, opacity: 1}, "-=0.7")
    .fromTo('.hero__txt', 0.5, {y: 30, opacity: 0}, {y: 0, opacity: 1})
    .fromTo('.hero__form', 1, {opacity: 0}, {opacity: 1}, "-=0.7")
    .fromTo('.scroll-down', 0.5, {y: 10, opacity: 0}, {y: 0, opacity: 1}, "-=0.5");
}

animateHeader();

function initSwiper() {
  var mySwiper = new Swiper('#js-feedback', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  })
}

function scrollToId () {
  var url = window.location.href;
  var id = url.substr(url.lastIndexOf('/') + 1);
  if (id.length) {
    $('html, body').animate({scrollTop: $(id).offset().top - 92}, 300);
  }

}

function scrollToBlock() {
  var nav = $('#js-nav'),
    link = nav.children('a');

  link.click(function (e) {
    e.preventDefault();

    var idBlock = $(this).attr('href');
    if ($(idBlock).length != 0) {
      $('html, body').animate({scrollTop: $(idBlock).offset().top - 90}, 500);
    }
    return false;
  })
}

function scrollLink() {
  var link = $('#js-scroll');

  link.click(function (e) {
    e.preventDefault();

    var idBlock = $(this).attr('href');
    if ($(idBlock).length != 0) {
      $('html, body').animate({scrollTop: $(idBlock).offset().top - 90}, 500);
    }
    return false;
  })
}

function fixHeader() {

  if ($(window).width() > 979) {
    var header = $('#js-header');

    $(window).scroll(function () {
      header.addClass('is-fixed');
    });

    if ($(window).scrollTop() > 10) {
      header.addClass('is-fixed');
    }
  }
}

function navPage() {

  if ($('#js-nav').length) {
    $('#js-nav').singlePageNav({
      filter: ':not(.external)',
      updateHash: true,
      currentClass: 'is-active'
    });
  } else
    return false;
}

function uploadFile() {
  $('input[type=file]').change(function () {
    let files = this.files;
    for (let i = 0; i < files.length; i++) {
      $(this).closest('.upload').prepend("<p class='file-name'>" + files[i].name + "</p>");
    }
    $('.upload__lbl').addClass('is-hide')
  })
}

function sendForm() {
  $('.form').submit(function (e) {
    e.preventDefault();
    let $that = $(this),
    formData = new FormData($that.get(0));

    $.ajax({
        type: "POST",
        url: "send.php",
        contentType: false,
        processData: false,
        data: formData
  }).done(function () {
        sendUserAnswer(formData);
        $(this).find("input").val("");
          alert("Спасибо за обращение в нашу компанию. Наши специалисты свяжутся с Вами в течение 30 минут");
          ym(53829652, 'reachGoal', 'sendForm');
          $(".form").trigger("reset");
          $('.upload__lbl').removeClass('is-hide');
          $('.file-name').remove();
      })
  })
}

function sendUserAnswer(formData){
  $.ajax({
    type: "POST",
    url: "send-user.php",
    contentType: false,
    processData: false,
    data: formData
  })
}

function scrollToForm(){
  var link = $('.js-link-form'),
      form = $('#form-footer');
  link.on('click', function(){
    var txt = $(this).attr('data-txt');
    $('html, body').animate({scrollTop: form.offset().top - 110}, 500);
    form.find('#name1').focus();
    form.find('#mess1').text('Добрый день, нужна смета на ' + txt);

  })
}



$(window).resize(function () {
  fixHeader();
});

$(document).ready(function () {
  scrollToForm();
  scrollToId();
  toggleMenu();
  initSwiper();
  // scrollToBlock();
  scrollLink();
  fixHeader();
  navPage();
  uploadFile();
  sendForm();
  $('.inp-phone').mask('+7 (000) 000-00-00', {placeholder: "+7 (xxx) xxx-xx-xx"})
});
