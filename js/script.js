/* Variaveis */

/* Menu e navbar-lista */
const menuHamburguer = document.getElementById("hamburguer-menu-wrapper");
const navLista = document.querySelector(".navbar-lista");
const hamburguerInp = document.getElementById("hamburguerInp");

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav_link");
const cabecalho = document.querySelector(".cabecalho");

/* Efeito hidden */
const hiddenElements = document.querySelectorAll(".hidden");

/* -------------------------------------------------------- */

/* Menu e navbar */

menuHamburguer.addEventListener("click", () => {
  hamburguerInp.checked = !hamburguerInp.checked;

  navLista.classList.toggle("show-nav");
});

let currentSection = "home";
window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop + 200) {
      currentSection = sec.id;
    }
  });

  navLinks.forEach((navLink) => {
    if (navLink.href.includes(currentSection)) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
});

/* Efeito hidden com observer */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el));

/* Copyright data */
const anoAtual = new Date().getFullYear();
const copyright = document.querySelector(".copyright");
copyright.innerHTML = `&copy;${anoAtual} Pedro Alves.`;
