function main() {
  accordion();
}

function accordion() {
  //========================= A C C O R D I O N     F U N c T I O N A L I T Y =============================
  // toggle plus minus svg
  const plusMinus = document.querySelector("svg.plus");

  plusMinus.addEventListener("click", togglePlusMinus);

  function togglePlusMinus() {
    plusMinus.classList.toggle("minus");
  }

  // changing color on hovering
  $(".question-container").mouseenter(function (e) {
    // console.log(e.target)
    $(e.target)
      .children(".question")
      .children(".question-content")
      .children(".question-title")
      .css("color", "#5a91c7");
    $(e.target)
      .children(".question")
      .children(".question-toggle")
      .children(".plus")
      .css("fill", "#5a91c7");
  });
  $(".question-container").mouseleave(function (e) {
    // console.log(e.target)
    $(e.target)
      .children(".question")
      .children(".question-content")
      .children(".question-title")
      .css("color", "#4b4f5a");
    $(e.target)
      .children(".question")
      .children(".question-toggle")
      .children(".plus")
      .css("fill", "#4b4f5a");
  });
  // hide all the answers when the document loaded

  $(".answer").slideUp();

  // toggle the answers up and down when clicking on the question
  $(".question").click(function (e) {
    $(".answer").not(e.target).slideUp();
    // checking if the answer is slided down  or up
    if ($(e.target).siblings(".answer").is(":hidden")) {
      $(e.target).siblings(".answer").slideDown();
      $(e.target)
        .children(".question-toggle")
        .children(".plus")
        .addClass("minus");
    } else {
      $(e.target).siblings(".answer").slideUp();
      $(e.target)
        .children(".question-toggle")
        .children(".plus")
        .removeClass("minus");
    }
    $(".question")
      .not(e.target)
      .children(".question-toggle")
      .children(".plus")
      .removeClass("minus");
  });
}

// ==================== T A B S    F U N C T I O N A L I T Y =====================

// function that open the content for a specific tab
function openTab(num) {
  if (num) {
    $("#tab-slider>div").each(function (index) {
      if ($(this).attr("tab") == num) {
        $(this).removeClass("tab-slide").addClass("active-content");
      } else {
        $(this).removeClass("active-content").addClass("tab-slide");
      }
    });
  } else {
    // highlighting the active tab with underground green line
    $(".tab-btn").click(function (e) {
      // console.log($(e.target).siblings());
      $(e.target).siblings().removeClass("active-tab");
      $(e.target).addClass("active-tab");
    });
  }
}

function activeTabs() {
  $("#tabs .tab-btn").click((e) => {
    openTab($(e.target).attr("tab"));
  });
}

function partnersSlider() {
  // Partners slider
  $("#partners-slider").slick({
    autoplay: false,
    speed: 500,
    arrows: true,
    dots: false,
    fade: false,
    prevArrow: ".partners-prev",
    nextArrow: ".partners-next",
  });
}

function hoverEffect() {
  $(".service-row").mouseenter(function (e) {
    $(e.target).children(".icon").css("color", "#fff");
    $(e.target).children(".arrow-btn").css("color", "#fff");
    $(e.target).children(".service-details").css("color", "#fff");
    $(e.target).children(".service-name").css("color", "#fff");
  });
  $(".service-row").mouseleave(function (e) {
    $(e.target).children(".icon").css("color", "#5a91c7");
    $(e.target).children(".arrow-btn").css("color", "#5a91c7");
    $(e.target).children(".service-details").css("color", "#4b4f5a");
    $(e.target).children(".service-name").css("color", "#4b4f5a");
  });
}

function timerSlider(sliders) {
  var counter = 0;
  var rate = 300;

  setInterval(function () {
    let atSecound = counter % rate;

    if (atSecound > rate - 30) {
      var slickCurrentSlide = $("#slider-area").slick("slickCurrentSlide");
      if (slickCurrentSlide == 0) {
        slickCurrentSlide = sliders;
      }
    } else {
      var slickCurrentSlide = $("#slider-area").slick("slickCurrentSlide") + 1;
    }

    let atFrame = (counter - atSecound) / rate + 1;
    let width = (atSecound / rate) * 100 + 10;

    if (slickCurrentSlide != atFrame) {
      counter = (slickCurrentSlide - 1) * rate;
      atFrame = slickCurrentSlide;
      for (let index = 1; index <= sliders; index++) {
        if (atFrame > index) {
          $(`span[progress="${index}"] .progress`).css("width", `100%`);
        } else {
          $(`span[progress="${index}"] .progress`).css("width", `0%`);
        }
      }
    }

    if (width == 100) {
      $("#slider-area").slick("slickNext");
    }
    $(`span[progress="${atFrame}"] .progress`).css("width", `${width}%`);
    if (counter >= sliders * rate - 1) {
      $(`.progress`).css("width", `0%`);
      counter = -1;
    }
    counter++;
  }, 10);
}
