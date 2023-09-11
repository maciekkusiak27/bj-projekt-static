const hamburgerIcon = document.getElementById("hamburger-icon");
const closeButton = document.getElementById("close-button");
const navigation = document.querySelector(".navigation");
const navElements = document.querySelectorAll(".nav-element");

hamburgerIcon.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeButton.addEventListener("click", () => {
  navigation.classList.remove("active");
});

navElements.forEach((navElement) => {
  navElement.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const lineElements = document.querySelectorAll(".line");

//   window.addEventListener("scroll", function () {
//     if (window.scrollY > window.innerHeight) {
//       lineElements.forEach(function (line) {
//         line.style.backgroundColor = "black";
//       });
//     } else {
//       lineElements.forEach(function (line) {
//         line.style.backgroundColor = "#ffffff";
//       });
//     }
//   });
// });