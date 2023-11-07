const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".header-nav");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));
