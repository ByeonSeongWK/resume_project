$(document).ready(function () {
  var num1 = 0;

  $(document).scroll(function () {
    var sct = $(window).scrollTop();

    if (sct >= 850 && num1 == 0) {
      num1 = 1;
      $("#nav_bar").stop().css({ width: "40%" }).animate({ width: "20%" }, 300);
      $("#nav_title").css({ opacity: 0 }).animate({ opacity: 1 });
      $("#nav_bar .title_box").css({ opacity: 0 }).animate({ opacity: 1 });
      $("#sns_pack").css({ opacity: 0 }).animate({ opacity: 1 });
    } else if (sct <= 200 && num1 == 1) {
      num1 = 0;
      $("#nav_bar").stop().css({ width: "20%" }).animate({ width: "40%" }, 500);
      $("#nav_title").css({ opacity: 1 }).animate({ opacity: 0 });
      $("#nav_bar .title_box").css({ opacity: 1 }).animate({ opacity: 0 });
      $("#sns_pack").css({ opacity: 1 }).animate({ opacity: 0 });
    }

    var sct = $(window).scrollTop();

    $(".page1").each(function () {
      var tg = $(this);
      var i = tg.index();

      if (tg.offset().top <= sct) {
        $("#nav_title li").removeClass("on");
        $("#nav_title li").eq(i).addClass("on");
      }
    });
  });

  $("#nav_title > ul >li").click(function () {
    var i = $(this).index();
    var posy = $(".page").eq(i).offset().top;
    $("html, body").animate({ scrollTop: posy });
  });
});
