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
  let SlideIndex = 0;
  function slideInit() {
    for (let index = 0; index < SlideLength; index++) {
      $(".slider-image").append(
        $(
          "<img class='slider-image-item image-responsive' src='./src/assets/images/slider-img.jpeg'/>"
        )
      );
      $(".slider-number").append(
        $(
          `<div class="slider-number-item ${index == 0 ? "active" : ""}">${
            index + 1
          }</div>`
        ).click((event) => showSlide(event.target.innerText - 1))
      );
    }
  }
  slideInit();

  function showSlide(newIndex = null, next = false) {
    if (typeof newIndex === "object") {
      $(".slider-image-item").each((i, slide) => {
        slide.style.transition = `none`;
      });
      return
    } else {
      $(".slider-image-item").each((i, slide) => {
        slide.style.transition = ``;
      });
    }

    console.log("SlideIndex",SlideIndex);
    console.log(`$(".slider-number-item")[SlideIndex]`,$(".slider-number-item")[SlideIndex]);
    $(".slider-number-item")[SlideIndex].classList.remove("active");

    if (!next) {
      SlideIndex = newIndex;
    } else {
      SlideIndex += newIndex;
    }

    if (SlideIndex < 0) {
      SlideIndex = SlideLength - 1;
    } else if (SlideIndex >= SlideLength) {
      SlideIndex = 0;
    }

    $(".slider-number-item")[SlideIndex].classList.add("active");

    $(".slider-image-item").each((i, slide) => {
      const slideWidth = slide.clientWidth;
      slide.style.transform = `translateX(-${SlideIndex * slideWidth}px)`;
    });
  }
  $(".slider-left").on("click", () => showSlide(-1, true));
  $(".slider-right").on("click", () => showSlide(1, true));
  addEventListener("resize", (event) => {
    showSlide();
  });
});
