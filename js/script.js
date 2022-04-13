$(document).ready(function () {
  //홈 애니메이션
  gsap.from($('.portbg'), 0.3, {
    delay: 0.1,
    opacity: 0,
    stagger: 0.15,
  });
  gsap.from($('.portfolio-txt'), 0.6, {
    delay: 0.8,
    opacity: 0,
    x: -200,
  });
  // 헤더 , 스크롤
  const $menu = $('.navigation li');
  const $part = $('.part');
  let idx = 0;
  let partNum = '';
  $menu.eq(0).addClass('active');
  $menu.on('click', function () {
    idx = $(this).index();
    partNum = $part.eq(idx).offset().top;
    $('html,body').animate({
      scrollTop: partNum
    });
  });
  $(window).on('scroll', function () {
    $part.each(function () {
      partNum = $(this).offset().top;
      if ($(window).scrollTop() + 200 >= partNum) {
        idx = $(this).index() - 1;
        $menu.eq(idx).addClass('active').siblings().removeClass('active');
      }
    });
  });
  // 페이지 이동
  function pages() {
      window.addEventListener("wheel", function (e) {
        if($(window).width() > 1024){
        e.preventDefault();
      }
      }, {
        passive: false
        }
      );
    const $html = $("html");
    let page = 1;
    const lastPage = $(".part").length;
    $(window).on("wheel", function (e) {
      if ($(window).width() > 1024) {
        if (e.originalEvent.deltaY > 0) {
          if (page == lastPage) {
            return;
          } else {
            page++;
          }
        } else if (e.originalEvent.deltaY < 0) {
          if (page == 1) {
            return;
          } else {
            page--;
          }
        }
        const partTop = (page - 1) * $(window).height();
        $html.animate({
          scrollTop: partTop
        });
      }
    });
  };
  window.addEventListener('resize', pages(), true);
  // web
  const webBtn = $('.webdetail');
  const detail = $('.detailimg-bg');
  webBtn.on('click', function (e) {
    e.preventDefault();
    detail.slideDown(300);
  })
  detail.on('click', function () {
    detail.fadeOut(300);
  });
  // graphic
  const $item = $('.item img');
  const $modalBg = $('.modal-wrap')
  $item.on('click', function () {
    $(this).next().slideDown(300);
  });
  $modalBg.on('click', function () {
    $('.modal-wrap').fadeOut(300);
  });
});