const imgEls = document.querySelectorAll(".slider > div");
const prevBtnEl = document.querySelector(".prev");
const nextBtnEl = document.querySelector(".next");
console.log(imgEls);
let activeIndex = 0;
nextBtnEl.addEventListener("click", () => {
  console.log("clicked");
  imgEls[activeIndex].classList.remove("active");
  imgEls[activeIndex].classList.add("disable");
  if (activeIndex == imgEls.length - 1) {
    activeIndex = 0;
  } else {
    activeIndex++;
  }

  imgEls[activeIndex].classList.add("active");
  imgEls[activeIndex].classList.remove("disable");
});
prevBtnEl.addEventListener("click", () => {
  imgEls[activeIndex].classList.remove("active");
  imgEls[activeIndex].classList.add("disable");
  if (activeIndex == 0) {
    activeIndex = imgEls.length - 1;
  } else {
    activeIndex--;
  }

  imgEls[activeIndex].classList.add("active");
  imgEls[activeIndex].classList.remove("disable");
});
