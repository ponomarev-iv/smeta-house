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

$(window).resize(function () {
  fixHeader();
});

function animateHeader() {
  var tl = new TimelineMax();

  tl
    .fromTo('.header__left', .6, {y: -100, opacity: 0}, {y: 0, opacity: 1})
    .fromTo('.header__right', .6, {x: 200, opacity: 0}, {x: 0, opacity: 1}, "-=0.4")
    .staggerFromTo('.main-nav a', 0.35, {opacity: 0, y: -30}, {opacity: 1, y: -0}, 0.1)
    .fromTo('.hero__title', .6, {y: 20, opacity: 0}, {y: 0, opacity: 1}, "-=0.4")
    .fromTo('.hero__txt', 0.5, {y: 30, opacity: 0}, {y: 0, opacity: 1})
}

animateHeader();

$(document).ready(function () {
  toggleMenu();
  fixHeader();
  uploadFile();
  sendForm();
  $('.inp-phone').mask('+7 (000) 000-00-00', {placeholder: "+7 (xxx) xxx-xx-xx"})
});
