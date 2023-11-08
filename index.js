const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".header-nav");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));

const navlink = document.querySelector(".header-nav__links");
navlink.addEventListener("click", (e) => {
  let target = e.target;
  if (target.className !== "link") return;
  nav.classList.toggle("active");
});
