$(document).ready(function () {
  const sidebarEl = $("#sidebar");
  const bgBlurEl = $(".bg-blur");

  // Side bar handle function
  function sideBardHande() {
    sidebarEl.toggleClass("sidebar-open");
    if (sidebarEl.hasClass("sidebar-open")) {
      bgBlurEl.css("visibility", "visible");
      bgBlurEl.css("display", "block");
      return;
    }
    bgBlurEl.css("visibility", "hidden");
  }

  $("#side-menu-btn").on("click", sideBardHande);
  $(".bg-blur").on("click", sideBardHande);
});
