let position = 0;
const slidesToShow = 4;
const slidesToScroll = 2;
const container = document.querySelector(".slider-container");
const track = document.querySelector(".slider-track");
const Btnprev = document.querySelector(".btn-prev");
const Btnnext = document.querySelector(".btn-next");
const items = document.querySelectorAll(".slider-item");
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((items) => {
  items.style.minWidth = `${itemWidth}px`;
});

Btnprev.addEventListener("click", () => {
  const itemsLeft = Math.abs(position) / itemWidth;
  position +=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

Btnnext.addEventListener("click", () => {
  const itemsLeft =
    itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  position -=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  Btnprev.disabled = position === 0;
  Btnnext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();
