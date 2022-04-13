$(document).ready(function () {
  //클릭해결
  $('.nb').on('click', function () {
    return false;
  });
  // header
  // main nav01 /header scroll
  var $mainNav01 = $('.main-nav01');
  var $headerBg = $('.header-wrap');
  var $nav = $('.navigation');
  var $navSub = $('.nav-sub');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 0) {
      $headerBg.addClass('active');
      $headerBg.find('.header-logo img').attr({
        src: 'images/header/h1_logo_on.png'
      });
      $mainNav01.addClass('active');
      $headerBg.find('.lang').addClass('bg');
      $nav.find('.nav-title').addClass('active');
      $nav.find('.nav-title').addClass('active');
      $headerBg.find('.site-map').attr({
        src: 'images/header/icon-map-on.png'
      });
      // top버튼
      $('.top-btn').addClass('on');
      //모바일
      $headerBg.find('.m-search img').attr({
        src: 'images/header/m-search-on.png'
      });
      $headerBg.find('.m-menu img').attr({
        src: 'images/header/m-menu-on.png'
      });
    } else {
      $headerBg.removeClass('active');
      $headerBg.find('.header-logo img').attr({
        src: 'images/header/h1_logo.png'
      })
      $mainNav01.removeClass('active');
      $headerBg.find('.lang').removeClass('bg');
      $nav.find('.nav-title').removeClass('active');
      $headerBg.find('.site-map').attr({
        src: 'images/header/icon-map.png'
      })
      // top 버튼
      $('.top-btn').removeClass('on');
      //모바일
      $headerBg.find('.m-search img').attr({
        src: 'images/header/m-search.png'
      })
      $headerBg.find('.m-menu img').attr({
        src: 'images/header/m-menu.png'
      });
    }
  });
  // 모바일
  window.addEventListener('resize', function () {
    if ($(window).width() <= 1024 & $(window).scrollTop() > 0) {
      $headerBg.find('.m-search img').attr({
        src: 'images/header/m-search-on.png'
      });
      $headerBg.find('.m-menu img').attr({
        src: 'images/header/m-menu-on.png'
      });
      $headerBg.removeAttr("style");
    }
    if ($(window).width() <= 1024 & $(window).scrollTop() == 0) {
      $headerBg.find('.m-search img').attr({
        src: 'images/header/m-search.png'
      })
      $headerBg.find('.m-menu img').attr({
        src: 'images/header/m-menu.png'
      });
      $headerBg.removeAttr("style");
    }
  });
  //  헤더하버
  $headerBg
    .on('mouseenter', function () {
      if (!$headerBg.hasClass('active') & $(window).width() > 1024) {
        $headerBg.addClass('active');
        $nav.find('.nav-title').addClass('active');
        $headerBg.find('.header-logo img').attr({
          src: 'images/header/h1_logo_on.png'
        });
        $headerBg.find('.site-map').attr({
          src: 'images/header/icon-map-on.png'
        });
        $headerBg.find('.lang').addClass('bg');
      }
    })
    .on('mouseleave', function () {
      if ($headerBg.hasClass('active') & $(window).width() > 1024 & $(window).scrollTop() == 0) {
        $headerBg.removeClass('active');
        $nav.find('.nav-title').removeClass('active');
        $headerBg.find('.header-logo img').attr({
          src: 'images/header/h1_logo.png'
        })
        $headerBg.find('.site-map').attr({
          src: 'images/header/icon-map.png'
        })
        $headerBg.find('.lang').removeClass('bg');
      }
    });
  //네비 하버
  $nav
    .on('mouseenter', function () {
      if ($(window).width() > 1024) {
        $headerBg.stop().animate({
          height: '480px'
        }, 50)
      }
    })
    .on('mouseleave', function () {
      if ($(window).width() > 1024) {
        $headerBg.stop().animate({
          height: '100px'
        }, 0)
      }
    });
  $('.nav-menu>li')
    .on('mouseenter', function () {
      if ($(window).width() > 1024) {
        $(this).find('.nav-title').addClass('color');
        $headerBg.addClass('active');
        $nav.find('.nav-title').addClass('active');
        $headerBg.find('.header-logo img').attr({
          src: 'images/header/h1_logo_on.png'
        });
        $headerBg.find('.site-map').attr({
          src: 'images/header/icon-map-on.png'
        });
        $headerBg.find('.lang').addClass('bg');
      }
    })
    .on('mouseleave', function () {
      if ($(window).width() > 1024) {
        $(this).find('.nav-title').removeClass('color');
      }
    });
  // 모바일 메뉴
  var $Mmenu = $('.m-menu');
  var $MEsc = $('.esc');

  $Mmenu.on('click', function () {
    if ($(window).width() <= 1024) {
      $nav.css({
        right: 0,
      })
    }
  });
  $MEsc.on('click', function () {
    if ($(window).width() <= 1024) {
      $nav.css({
        right: "-100%",
      })
    }
  });
  var $Mnav = $('.nav-menu').children('li');
  $Mnav.on('click', function (e) {
    if ($(window).width() <= 1024) {
      e.preventDefault();
      $(this).find('.nav-sub').slideToggle();
      $(this).find('.nav-title').toggleClass('toggle');
    }
  });
  $(window).resize(function () {
    var wWidth = $(window).width();
    if (wWidth > 1024) {
      $(".nav-sub").removeAttr("style");
      $('.nav-title').removeClass('toggle');
      $nav.removeAttr("style");
    }
  });

  // nav01 하버
  var $nav01 = $('.main-nav01 li');
  $nav01
    .on('mouseenter', function () {
      if ($(window).width() > 1024) {
        $(this).addClass('active');
      }
    })
    .on('mouseleave', function () {
      $(this).removeClass('active');
    });

  //모바일 메인nav01
  var $Mnav01 = $('.nav01btn');
  $Mnav01.on('click', function () {
    $(this).toggleClass('active');
    $mainNav01.toggleClass('toggle');
  });

  // 사업부문
  var $build = $('.buildimg a');
  var $bTxt = $('.b-txtbg');
  var $bBtn = $('.b-txt').find('.b-btn');
  var $ship = $('.shipimg a');
  var $sTxt = $('.s-txtbg');
  var $sBtn = $('.s-txt').find('.b-btn');
  // 건설
  $build.on('mouseenter', function () {
    if ($(window).width() > 1024) {
      $bBtn.addClass('active');
      $build.find('span').css({
        opacity: '1'
      });
      $bTxt.attr({
        src: 'images/business/build-bg-on.png'
      });
    }
  });
  $build.on('mouseleave', function () {
    $bBtn.removeClass('active');
    $build.find('span').css({
      opacity: '0'
    });
    $bTxt.attr({
      src: 'images/business/build-bg.png'
    });
  });
  $bBtn
    .on('mouseenter', function () {
      if ($(window).width() > 1024) {
        $bBtn.addClass('active');
        $build.find('span').css({
          opacity: '1'
        });
        $bTxt.attr({
          src: 'images/business/build-bg-on.png'
        });
      };
    })
    .on('mouseleave', function () {
      if ($(window).width() > 1024) {
        $bBtn.removeClass('active');
        $build.find('span').css({
          opacity: '0'
        });
        $bTxt.attr({
          src: 'images/business/build-bg.png'
        });
      }
    });
  // 조선
  $ship.on('mouseenter', function () {
    if ($(window).width() > 1024) {
      $sBtn.addClass('active');
      $ship.find('span').css({
        opacity: '1'
      });
      $sTxt.attr({
        src: 'images/business/ship-bg-on.png'
      });
    }
  });
  $ship.on('mouseleave', function () {
    $sBtn.removeClass('active');
    $ship.find('span').css({
      opacity: '0'
    });
    $sTxt.attr({
      src: 'images/business/ship-bg.png'
    });
  });
  $sBtn.on('mouseenter', function () {
    if ($(window).width() > 1024) {
      $sBtn.addClass('active');
      $ship.find('span').css({
        opacity: '1'
      });
      $sTxt.attr({
        src: 'images/business/ship-bg-on.png'
      });
    }
  });
  $sBtn.on('mouseleave', function () {
    $sBtn.removeClass('active');
    $ship.find('span').css({
      opacity: '0'
    });
    $sTxt.attr({
      src: 'images/business/ship-bg.png'
    });
  });
  //  nav02
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".nav02scroll", {
    scrollTrigger: {
      trigger: '.nav02scroll',
      toggleActions: "restart none none none"
    },
    duration: 1.8,
    scale: 1,
    opacity: 1,
    delay: 0,
    stagger: 0.2,
    ease: "elastic",
  });
  //홍보
  AOS.init({
    offset: 0,
  });
  // $main-news
  $('.news-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          arrows: false,
          dots: true,
          fade: true,
        }
      }
    ]
  });
  // top버튼
  $('.top-btn').on('click', function () {
    window.scrollTo({
      top: '0',
      behavior: 'smooth',
    });
  });
});