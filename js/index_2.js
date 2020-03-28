// $(document).ready(function () {

//   $("a.go").click(function () {
//     elementClick = $(this).attr("href");
//     destination = $(elementClick).offset().top;
//     $("body,html").animate({
//       scrollTop: destination
//     }, 800);
//   });


//   let winWidth = checkWidth();

//   function checkWidth() {
//     let winWidth = $(window).width();
//     return winWidth;
//   }



//   function initSlick() {
//     if (winWidth > 576) {
//       $('.slider').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: true,
//         dots: false,
//         autoplay: false,
//         adaptiveHeight: true,
//         asNavFor: '.slider-nav'
//       });
//       $('.slider-nav').slick({
//         slidesToShow: 5,
//         slidesToScroll: 5,
//         arrows: false,
//         dots: false,
//         centerMode: true,
//         focusOnSelect: true,
//         asNavFor: '.slider'
//       });
//     } else {
//       $('.slider').slick('unslick');
//       $('.slider-nav').slick('unslick');

//     }

//   }

//   initSlick();

//   $(window).resize(function () {
//     winWidth = checkWidth();
//     initSlick();
//   })



//   let posScrollTop;

//   let $video = $('.video_sea');
//   let $window = $(window);
//   let enableVideo = true;

//   $window.scroll(function () {
//     let topOfVideo = $video.offset().top;
//     let threshold = $window.height();

//     let topOfScreen = $window.scrollTop();
//     let topFromVideo = topOfVideo - threshold - 300;

//     topFromVideo = 500;

//     if ((topOfScreen > topFromVideo) && (enableVideo === true)) {
//       enableVideo = false;
//       $video.attr('src', $video.attr('data-src'));

//     }

//   });

//   document.addEventListener('mousemove', parallax);

//   function parallax(e) {
//     let parallaxElement = document.querySelector('.workPlus__shark');
//     let x = (window.innerWidth - e.pageX * 10) / 180;
//     let y = (window.innerHeight - e.pageY * 10) / 180;
//     parallaxElement.style.transform = `translate(${x}px,${y}px)`;
//   };


// });

////////portfolio-js

$(document).ready(function () {

  let $preloader = $('#page-preloader');
  $preloader.delay(1500).fadeOut('slow');

  $('.menu-btn').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn-active');
    $('.portfolio-page__list').toggleClass("portfolio-page__list-active");
  })


  $('.md-button').on('click', function (e) {
    e.preventDefault;
    $(".md-modal").addClass('md-show');
  })

  $('.md-overlay, .md-close').on('click', function (e) {
    $(".md-modal").removeClass('md-show');
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

})
