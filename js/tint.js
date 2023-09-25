// let progressSpans = document.querySelectorAll(".the-progress span");
// let section = document.querySelector(".our-skills");

// let nums = document.querySelectorAll(".number");
// let started = false; // Function Started ? No

// window.onscroll = function () {
//   // Skills Animate Width
//   if (window.scrollY >= section.offsetTop - 250) {
//     progressSpans.forEach((span) => {
//       span.style.width = span.dataset.width;
//     });
//   }
//   // Stats Increase Number
//   if (window.scroll >= statsSection.offsetTop) {
//     if (!started) {
//       nums.forEach((num) => startCount(num));
//     }
//     started = true;
//   }
// };

// function startCount(el) {
//   let goal = el.dataset.goal;
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent == goal) {
//       clearInterval(count);
//     }
//   }, 2000 / goal);
// }
