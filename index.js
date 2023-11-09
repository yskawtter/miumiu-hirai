//menu
const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".header-nav");

hamburguer.addEventListener("click", () => {
  nav.classList.toggle("active");
  nav.classList.contains("active")
    ? document.body.classList.add("body-noScroll")
    : document.body.classList.remove("body-noScroll");
});

const navlink = document.querySelector(".header-nav__links");
navlink.addEventListener("click", (e) => {
  let target = e.target;
  if (target.className !== "link") return;
  nav.classList.toggle("active");
});

const allLinks = document.querySelectorAll(".header-nav__links .nav-link");
allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (document.body.classList.contains("body-noScroll"))
      document.body.classList.toggle("body-noScroll");
  });
});
//scroll

const mynav = document.querySelector(".header-nav");
const initialCoord = document
  .querySelector(".looks-container")
  .getBoundingClientRect();
window.addEventListener("scroll", () => {
  if (nav.classList.contains("active")) {
    nav.classList.add("sticky");
  }
  window.scrollY > initialCoord.top
    ? mynav.classList.add("sticky")
    : mynav.classList.remove("sticky");
});
