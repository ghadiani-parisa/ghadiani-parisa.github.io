let menu_sm = document.getElementsByClassName("list-sm")[0];
let box_menu_sm = document.getElementsByClassName("sub-menu-sm")[0];

let brand_sm = document.getElementById("brand-btn-sm");
let brand_box_sm = document.getElementById("brand-sm");
let back_brand = document.getElementById("back-acer-brand");
let ID_sm = document.getElementById("ID-btn-sm");
let ID_box = document.getElementById("ID-box");
let back_ID = document.getElementById("back-acer-ID");
let pro_sm = document.getElementById("pro-btn-sm");
let pro_box = document.getElementById("pro-box");
let back_pro = document.getElementById("back-acer-pro");

let next = document.getElementById("next");
let prev = document.getElementById("prev");
let slider = document.getElementsByClassName("slider1");
let slider_fill = document.getElementsByClassName("filling");
let stop = document.getElementById("stop");
let auto_slider;
let counter = 0;

let next2 = document.getElementById("next2");
let prev2 = document.getElementById("prev2");
let Insights_slider = document.getElementById("Insights-slider");
let currentIndex = 0;

let back_btn = document.getElementById("back");

let pro_sub = document.getElementById("pro");
let box_sub = document.getElementById("sub-md");

brand_btn = document.getElementById("brand");
brand_box = document.getElementById("brand-box");

profile_btn = document.getElementById("profile");
profile_box = document.getElementById("profile-box");

// open,close sub-md-products
pro_sub.addEventListener("click", function () {
  if (box_sub.classList.contains("hide")) {
    box_sub.style.transform = "translateY(0px)";
    box_sub.classList.remove("hide");
  } else {
    box_sub.style.transform = "translateY(-1000px)";
    box_sub.classList.add("hide");
  }
});

// open,close sub-md-brands
brand_btn.addEventListener("click", function () {
  if (brand_box.classList.contains("hide")) {
    brand_box.style.transform = "translateY(180px)";
    brand_box.classList.remove("hide");
  } else {
    brand_box.style.transform = "translateY(-190px)";
    brand_box.classList.add("hide");
  }
});

// open,close sub-md-profile
profile_btn.addEventListener("click", function () {
  if (profile_box.classList.contains("hide")) {
    profile_box.style.transform = "translateY(85px)";
    profile_box.classList.remove("hide");
  } else {
    profile_box.style.transform = "translateY(-90px)";
    profile_box.classList.add("hide");
  }
});

// reset code1
function resetAllFills() {
  for (let i = 0; i < slider_fill.length; i++) {
    slider_fill[i].style.animation = "none";
    slider_fill[i].offsetHeight;
    slider_fill[i].style.animation = "";
    slider_fill[i].classList.remove("[animation-play-state:running]");
    slider_fill[i].classList.add("[animation-play-state:paused]");
  }
}

// reset code2
function resetAnimation(element) {
  element.style.animation = "none";
  element.offsetHeight;
  element.style.animation = null;
}

// start slider
function start_slider() {
  auto_slider = setInterval(() => {
    slider[counter].classList.remove("z-[2]");
    slider_fill[counter].classList.replace(
      "[animation-play-state:running]",
      "[animation-play-state:paused]",
    );
    counter++;
    if (counter > 4) {
      counter = 0;
    }
    slider[counter].classList.add("z-[2]");
    slider_fill[counter].classList.replace(
      "[animation-play-state:paused]",
      "[animation-play-state:running]",
    );
  }, 4000);
}
start_slider();

// stop slider
function stop_slider() {
  clearInterval(auto_slider);
};

// sub-menu small
menu_sm.addEventListener("click", function () {
  box_menu_sm.classList.toggle("-translate-x-full");
  document.body.classList.toggle("overflow-hidden");
  menu_sm.classList.toggle("bi-list");
  menu_sm.classList.toggle("bi-x");
  if (!brand_box_sm.classList.contains("-translate-x-full")) {
    brand_box_sm.classList.add("-translate-x-full");
  }
  if (!ID_box.classList.contains("-translate-x-full")) {
    ID_box.classList.add("-translate-x-full");
  }
  if (!pro_box.classList.contains("-translate-x-full")) {
    pro_box.classList.add("-translate-x-full");
  }
});
brand_sm.addEventListener("click", function () {
  brand_box_sm.classList.remove("-translate-x-full");
});
back_brand.addEventListener("click", function () {
  brand_box_sm.classList.add("-translate-x-full");
});
ID_sm.addEventListener("click", function () {
  ID_box.classList.remove("-translate-x-full");
});
back_ID.addEventListener("click", function () {
  ID_box.classList.add("-translate-x-full");
});
pro_sm.addEventListener("click", function () {
  pro_box.classList.remove("-translate-x-full");
});
back_pro.addEventListener("click", function () {
  pro_box.classList.add("-translate-x-full");
});

// btn-next-slider
next.addEventListener("click", function () {
  clearInterval(auto_slider);
  slider[counter].classList.remove("z-[2]");
  counter++;
  if (counter > 4) {
    counter = 0;
  }
  resetAllFills();
  slider[counter].classList.add("z-[2]");
  resetAnimation(slider_fill[counter]);
  slider_fill[counter].classList.replace(
    "[animation-play-state:paused]",
    "[animation-play-state:running]",
  );
  if (stop.classList.contains("stop-flag")) {
    start_slider();
  } else {
    resetAllFills();
  }
});

// btn-prev-slider
prev.addEventListener("click", function () {
  clearInterval(auto_slider);
  slider[counter].classList.remove("z-[2]");
  counter--;
  if (counter < 0) {
    counter = 4;
  }
  resetAllFills();
  slider[counter].classList.add("z-[2]");
  resetAnimation(slider_fill[counter]);
  slider_fill[counter].classList.replace(
    "[animation-play-state:paused]",
    "[animation-play-state:running]",
  );
  if (stop.classList.contains("stop-flag")) {
    start_slider();
  } else {
    resetAllFills();
  }
});

// btn-stop-slider
stop.addEventListener("click", function () {
  if (stop.classList.contains("stop-flag")) {
    stop.classList.remove("stop-flag");
    stop_slider();
    slider_fill[counter].classList.replace(
      "[animation-play-state:running]",
      "[animation-play-state:paused]",
    );
    stop.classList.toggle("bi-stop-circle-fill");
    stop.classList.toggle("bi-play-circle-fill");
  } else {
    stop.classList.add("stop-flag");
    resetAnimation(slider_fill[counter]);
    slider_fill[counter].classList.replace(
      "[animation-play-state:paused]",
      "[animation-play-state:running]",
    );
    start_slider();
    stop.classList.toggle("bi-stop-circle-fill");
    stop.classList.toggle("bi-play-circle-fill");
  }
});

// btn-next-Insights and Innovations
next2.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex == 2) {
    next2.classList.add("hidden");
  }
  if (currentIndex >= 1) {
    prev2.classList.remove("hidden");
  }
  Insights_slider.style.transform = `translateX(-${currentIndex * 34}%)`;
});

// btn-prev-Insights and Innovations
prev2.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 1) {
    prev2.classList.add("hidden");
  }
  if (currentIndex < 2) {
    next2.classList.remove("hidden");
  }
  Insights_slider.style.transform = `translateX(-${currentIndex * 34}%)`;
});

// btn-back to top
back_btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// footer small
$(document).ready(function () {
  $($("#item1")).click(() => {
    $($("#item11")).slideToggle();
    $($("#down-up1")).toggleClass("bi-chevron-compact-up");
    $($("#down-up1")).toggleClass("bi-chevron-compact-down");
    $($("#item22")).slideUp();
    $($("#item33")).slideUp();
    $($("#item44")).slideUp();
    $($("#item55")).slideUp();
    if ($($("#down-up2")).hasClass("bi-chevron-compact-up")) {
      $($("#down-up2")).removeClass("bi-chevron-compact-up");
      $($("#down-up2")).addClass("bi-chevron-compact-down");
    }
    if ($($("#down-up3")).hasClass("bi-chevron-compact-up")) {
      $($("#down-up3")).removeClass("bi-chevron-compact-up");
      $($("#down-up3")).addClass("bi-chevron-compact-down");
    }
    if ($($("#down-up4")).hasClass("bi-chevron-compact-up")) {
      $($("#down-up4")).removeClass("bi-chevron-compact-up");
      $($("#down-up4")).addClass("bi-chevron-compact-down");
    }
    if ($($("#down-up5")).hasClass("bi-chevron-compact-up")) {
      $($("#down-up5")).removeClass("bi-chevron-compact-up");
      $($("#down-up5")).addClass("bi-chevron-compact-down");
    }
  });
  $($("#item2")).click(() => {
    $($("#item22")).slideToggle();
    $($("#down-up2")).toggleClass("bi-chevron-compact-up");
    $($("#down-up2")).toggleClass("bi-chevron-compact-down");
    $($("#item11")).slideUp();
    $($("#item33")).slideUp();
    $($("#item44")).slideUp();
    $($("#item55")).slideUp();
    if ($($("#down-up1")).hasClass("bi-chevron-compact-up")) {
      $($("#down-up1")).removeClass("bi-chevron-compact-up");
      $($("#down-up1")).addClass("bi-chevron-compact-down");
    }
    if ($($("#down-up3")).hasClass("bi-chevron-compact-up")) {
      $($("#down-up3")).removeClass("bi-chevron-compact-up");
      $($("#down-up3")).addClass("bi-chevron-compact-down");
    }
    if ($($("#down-up4")).hasClass("bi-chevron-compact-up")) {
      $($("#down-up4")).removeClass("bi-chevron-compact-up");
      $($("#down-up4")).addClass("bi-chevron-compact-down");
    }
    if ($($("#down-up5")).hasClass("bi-chevron-compact-up")) {
      $($("#down-up5")).removeClass("bi-chevron-compact-up");
      $($("#down-up5")).addClass("bi-chevron-compact-down");
    }
  });
  $($("#item3")).click(() => {
    $($("#item33")).slideToggle();
    $($("#down-up3")).toggleClass("bi-chevron-compact-up");
    $($("#down-up3")).toggleClass("bi-chevron-compact-down");
    $($("#item22")).slideUp();
    $($("#item11")).slideUp();
    $($("#item44")).slideUp();
    $($("#item55")).slideUp();
    if ($($("#down-up2")).hasClass("bi-chevron-compact-up")) {
      $($("#down-up2")).removeClass("bi-chevron-compact-up");
      $($("#down-up2")).addClass("bi-chevron-compact-down");
    }
    if ($($("#down-up1")).hasClass("bi-chevron-compact-up")) {
      $($("#down-up1")).removeClass("bi-chevron-compact-up");
      $($("#down-up1")).addClass("bi-chevron-compact-down");
    }
    if ($($("#down-up4")).hasClass("bi-chevron-compact-up")) {
      $($("#down-up4")).removeClass("bi-chevron-compact-up");
      $($("#down-up4")).addClass("bi-chevron-compact-down");
    }
    if ($($("#down-up5")).hasClass("bi-chevron-compact-up")) {
      $($("#down-up5")).removeClass("bi-chevron-compact-up");
      $($("#down-up5")).addClass("bi-chevron-compact-down");
    }
  });
  $($("#item4")).click(() => {
    $($("#item44")).slideToggle();
    $($("#down-up4")).toggleClass("bi-chevron-compact-up");
    $($("#down-up4")).toggleClass("bi-chevron-compact-down");
    $($("#item22")).slideUp();
    $($("#item11")).slideUp();
    $($("#item33")).slideUp();
    $($("#item55")).slideUp();
    if ($($("#down-up2")).hasClass("bi-chevron-compact-up")) {
      $($("#down-up2")).removeClass("bi-chevron-compact-up");
      $($("#down-up2")).addClass("bi-chevron-compact-down");
    }
    if ($($("#down-up3")).hasClass("bi-chevron-compact-up")) {
      $($("#down-up3")).removeClass("bi-chevron-compact-up");
      $($("#down-up3")).addClass("bi-chevron-compact-down");
    }
    if ($($("#down-up1")).hasClass("bi-chevron-compact-up")) {
      $($("#down-up1")).removeClass("bi-chevron-compact-up");
      $($("#down-up1")).addClass("bi-chevron-compact-down");
    }
    if ($($("#down-up5")).hasClass("bi-chevron-compact-up")) {
      $($("#down-up5")).removeClass("bi-chevron-compact-up");
      $($("#down-up5")).addClass("bi-chevron-compact-down");
    }
  });
  $($("#item5")).click(() => {
    $($("#item55")).slideToggle();
    $($("#down-up5")).toggleClass("bi-chevron-compact-up");
    $($("#down-up5")).toggleClass("bi-chevron-compact-down");
    $($("#item22")).slideUp();
    $($("#item11")).slideUp();
    $($("#item33")).slideUp();
    $($("#item44")).slideUp();
    if ($($("#down-up2")).hasClass("bi-chevron-compact-up")) {
      $($("#down-up2")).removeClass("bi-chevron-compact-up");
      $($("#down-up2")).addClass("bi-chevron-compact-down");
    }
    if ($($("#down-up3")).hasClass("bi-chevron-compact-up")) {
      $($("#down-up3")).removeClass("bi-chevron-compact-up");
      $($("#down-up3")).addClass("bi-chevron-compact-down");
    }
    if ($($("#down-up4")).hasClass("bi-chevron-compact-up")) {
      $($("#down-up4")).removeClass("bi-chevron-compact-up");
      $($("#down-up4")).addClass("bi-chevron-compact-down");
    }
    if ($($("#down-up1")).hasClass("bi-chevron-compact-up")) {
      $($("#down-up1")).removeClass("bi-chevron-compact-up");
      $($("#down-up1")).addClass("bi-chevron-compact-down");
    }
  });
});
