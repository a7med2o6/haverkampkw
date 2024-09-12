let nums = document.querySelectorAll(".number");
let section = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((number) => startCount(number));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 3000 / goal);
}

let list = document.querySelector(".carosel .list");
let items = document.querySelectorAll(".carosel .list .item");
let dots = document.querySelectorAll(".carosel .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthitems = items.length - 1;

next.onclick = function () {
  if (active + 1 > lengthitems) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadslider();
};

prev.onclick = function () {
  if (active - 1 < 0) {
    active = lengthitems;
  } else {
    active = active - 1;
  }
  reloadslider();
};

let autoslide = setInterval(() => {
  next.click();
}, 3000);

function reloadslider() {
  let checkleft = items[active].offsetLeft;
  list.style.left = -checkleft + "px";

  let lastactiveDot = document.querySelector(".carosel .dots li.active");
  if (lastactiveDot) lastactiveDot.classList.remove("active");
  dots[active].classList.add("active");
}

dots.forEach((li, key) => {
  li.addEventListener("click", function () {
    active = key;
    reloadslider();
  });
});
