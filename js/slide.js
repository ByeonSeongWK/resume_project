$(document).ready(function () {
  var current = 0;
  var n = 0;

  // 최대 보이고 싶은 페이지 개수 입력
  const MAX_PAGE = 4;

  /****** left 버튼 함수 ******/
  $("#left_btn").click(function (e) {
    e.preventDefault();
    if (current > 0) {
      current--;
      slideTarget(current);
    } else {
      current = MAX_PAGE - 1;
      slideTarget(current);
    }
  });

  /****** right 버튼 함수 ******/
  $("#right_btn").click(function (e) {
    e.preventDefault();
    if (current < MAX_PAGE - 1) {
      current++;
      slideTarget(current);
    } else {
      current = 0;
      slideTarget(current);
    }
  });
  /****** 배경이 움직이게 하는 함수 ******/
  function slideTarget(n) {
    var pos = n * -1400 + "px";
    current = n;
    $("#project .cg_box").animate({ left: pos });
  }
});
