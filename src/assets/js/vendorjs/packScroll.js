var $window = $(window);
var $sidebar = $("#downConsolePack");
// var $sidebarHeight = $sidebar.innerHeight();
// var $footerOffsetTop = $("#footer").offset().top;
// var $sidebarOffset = $sidebar.offset();




$(document).on("scroll", function() {
    if ($(this).scrollTop() >= $("#packConsole").offset().top) {
      appear = true;
     console.log('reached')
      $("#upperConsolePack").addClass("fixed");
    } else {
      appear = false;
      console.log('out')
    //   $("#idTabsi").hide();
      $("#upperConsolePack").removeClass("fixed");
    }
    // if ($window.scrollTop() + $sidebarHeight > $footerOffsetTop - 200) {
    //   $sidebar.css({
    //     top: -($window.scrollTop() + $sidebarHeight - $footerOffsetTop + 200)
    //   });
    // } else {
    //   $sidebar.css({ top: "0" });
    // }
  });