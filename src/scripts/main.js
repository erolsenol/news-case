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

  // Slider

  let SlideLength = 25;
  for (let index = 0; index < SlideLength; index++) {
    $(".slider-image").append(
      $(
        "<img class='slider-image-item image-responsive' src='./src/assets/images/slider-img.jpeg'/>"
      )
    );
  }

  let SlideIndex = 0;
  function showSlide(next) {
    SlideIndex += next;
    if (SlideIndex < 0) SlideIndex = SlideLength - 1;
    else if (SlideIndex >= SlideLength) SlideIndex = 0;
    
    $(".slider-image-item").each((i, slide) => {
      const slideWidth = slide.clientWidth;
      slide.style.transform = `translateX(-${SlideIndex * slideWidth}px)`;
    });
  }
  $(".slider-left").on("click", () => showSlide(-1));
  $(".slider-right").on("click", () => showSlide(1));
});
