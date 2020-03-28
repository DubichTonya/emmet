$(document).ready(function () {





  // preloader

  let $preloader = $('#page-preloader');
  $preloader.delay(1500).fadeOut('slow');

  //   // header
  // var items = ['video/smoke.mp4', 'video/homepage_2.mp4'];
  // var item = items[Math.floor(Math.random()*items.length)];
  // document.querySelector('.header-video video').setAttribute('src', item);

  // modal window

  $('.md-button').on('click', function (e) {
    e.preventDefault;
    $(".md-modal").addClass('md-show');
  })

  $('.md-overlay, .md-close').on('click', function (e) {
    $(".md-modal").removeClass('md-show');
  });

  //animated

  new WOW().init();


  // shark

  // shark

  document.addEventListener('mousemove', parallax);

  function parallax(e) {

    var $parallaxElement = $('.workPlus__shark');
    var old_style = $parallaxElement.attr('style');
    var x = (window.innerWidth - e.pageX * 10) / 180;
    var y = (window.innerHeight - e.pageY * 10) / 180;
    var new_style = '';
    new_style += 'transform: translate(' + x + 'px, ' + y + 'px);';
    new_style += '-webkit-transform: translate(' + x + 'px, ' + y + 'px);';
    new_style += '-ms-transform: translate(' + x + 'px, ' + y + 'px);';
    var style_element = old_style + new_style;
    $parallaxElement.attr('style', style_element);
  };

  // button

  $('.menu-btn').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn-active');
    $('.portfolio-page__list').toggleClass("portfolio-page__list-active");
  })

  //mail
  $("form").submit(function () { //Change
    var form = $(this).attr('class').split(' ')[0];
    var msg = "&form=" + form + "&" + $(this).serialize();
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: msg
    }).done(function () {
      var formObj = $('.' + form);
      var f_h = $(formObj).children('.form_wrp').height();
      var f_w = $(formObj).children('.form_wrp').width();
      var content = "";

      $(formObj).height(f_h);
      $(formObj).width(f_w);

      content = "<div class='rezult' style='display:none;'>";
      content += "<div class='msg_submit_wrp'>";
      content += "<div class='msg_submit'>";
      content += "Спасибо, что оставили заявку!<br> С Вами скоро свяжутся."
      content += "</div>";
      content += "</div>";
      content += "</div>";

      $(formObj).children('.form_wrp').after(content);
      $(formObj).children('.form_wrp').fadeOut();
      $(formObj).children('.rezult').fadeIn();

      setTimeout(function () {
        // Done Functions
        $(this).trigger("reset");
      }, 1000);
    });
    return false;
  });



  // page content

  $("a.go").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({
      scrollTop: destination
    }, 800);
  });


  let winWidth = checkWidth();

  function checkWidth() {
    let winWidth = $(window).width();
    return winWidth;
  }



  function initSlick() {
    if (winWidth > 576) {
      $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: false,
        adaptiveHeight: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.slider'
      });
    } else {
      $('.slider').slick('unslick');
      $('.slider-nav').slick('unslick');

    }

  }

  initSlick();

  $(window).resize(function () {
    winWidth = checkWidth();
    initSlick();
  })



  let posScrollTop;

  let $video = $('.video_sea');
  let $window = $(window);
  let enableVideo = true;

  $window.scroll(function () {
    let topOfVideo = $video.offset();
    let threshold = $window.height();

    let topOfScreen = $window.scrollTop();
    let topFromVideo = topOfVideo - threshold - 300;

    topFromVideo = 500;

    if ((topOfScreen > topFromVideo) && (enableVideo === true)) {
      enableVideo = false;
      $video.attr('src', $video.attr('data-src'));

    }

  });







});

// ////////portfolio-js

// $(document).ready(function () {

//   $('.menu-btn').on('click', function (e) {
//     e.preventDefault;
//     $(this).toggleClass('menu-btn-active');
//     $('.portfolio-page__list').toggleClass("portfolio-page__list-active");
//   })


//   $('.md-button').on('click', function (e) {
//     e.preventDefault;
//     $(".md-modal").addClass('md-show');
//   })

//   $('.md-overlay, .md-close').on('click', function (e) {
//     $(".md-modal").removeClass('md-show');
//   })

// })