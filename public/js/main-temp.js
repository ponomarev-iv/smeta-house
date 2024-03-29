function sendForm() {
  $(".form").submit(function () {
    return $.ajax({type: "POST", url: "send.php", data: $(this).serialize()}).done(function () {
      $(this).find("input").val(""), alert("Спасибо за обращение в нашу компанию. В ближайшее время мы свяжемся с вами."), $(".form").trigger("reset")
    }), !1
  })
}

function toggleMenu() {
  var t = $("#js-nav"), e = t.children();
  e.click(function () {
    return !$(this).hasClass("is-active") && (e.removeClass("is-active"), void $(this).addClass("is-active"))
  })
}

function animateHeader() {
  var t = new TimelineMax;
  t.fromTo(".header__left", 1, {y: -100, opacity: 0}, {y: 0, opacity: 1}).fromTo(".header__right", 1, {x: 200, opacity: 0}, {
    x: 0,
    opacity: 1
  }, "-=0.7").staggerFromTo(".main-nav a", .5, {opacity: 0, y: -30}, {opacity: 1, y: -0}, .1).fromTo(".hero__title", 1, {y: 20, opacity: 0}, {
    y: 0,
    opacity: 1
  }, "-=0.7").fromTo(".hero__txt", .5, {y: 30, opacity: 0}, {
    y: 0,
    opacity: 1
  }).fromTo(".hero__form", 1, {opacity: 0}, {opacity: 1}, "-=0.7").fromTo(".scroll-down", .5, {y: 10, opacity: 0}, {y: 0, opacity: 1}, "-=0.5")
}

function initSwiper() {
  new Swiper("#js-feedback", {loop: !0, nextButton: ".swiper-button-next", prevButton: ".swiper-button-prev"})
}

function scrollToBlock() {
  var t = $("#js-nav"), e = t.children("a");
  e.click(function (t) {
    t.preventDefault();
    var e = $(this).attr("href");
    return 0 != $(e).length && $("html, body").animate({scrollTop: $(e).offset().top - 90}, 500), !1
  })
}

function scrollLink() {
  var t = $("#js-scroll");
  t.click(function (t) {
    t.preventDefault();
    var e = $(this).attr("href");
    return 0 != $(e).length && $("html, body").animate({scrollTop: $(e).offset().top - 90}, 500), !1
  })
}

function fixHeader() {
  if ($(window).width() > 979) {
    var t = $("#js-header");
    $(window).scroll(function () {
      t.addClass("is-fixed")
    }), $(window).scrollTop() > 10 && t.addClass("is-fixed")
  }
}

function navPage() {
  return !!$("#js-nav").length && void $("#js-nav").singlePageNav({filter: ":not(.external)", updateHash: !0, currentClass: "is-active"})
}

animateHeader();

  $(window).resize(function () {
  fixHeader()
});
  $(document).ready(function () {
  toggleMenu();
    initSwiper();
    scrollLink();
    fixHeader();
    navPage();
    sendForm()
});