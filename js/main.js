console.log("a");

$('.single-item').slick(
    {
        // dots: true, // ページ送りのドット表示
        autoplay: true, // 自動再生設定
        autoplaySpeed: 2500, // 自動再生で切り替えをする時間
        fade:true,//フェードする
        speed:2500//フェードのスピード調整
    }
);


//scroll_effect
$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('.scroll_up');
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 100;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add('on');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
  });

