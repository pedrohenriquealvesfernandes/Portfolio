/* Variaveis */

/* Theme */

const changeTheme = document.getElementById("change-theme")
const themeCheck = document.querySelector(".box-check")

/* Menu e navbar-lista */
const menuHamburguer = document.getElementById("hamburguer-menu-wrapper")
const navLista = document.querySelector(".navbar-lista")
const hamburguerInp = document.getElementById("hamburguerInp")

const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('.nav_link')
const cabecalho = document.querySelector(".cabecalho")

/* Efeito hidden */
const hiddenElements = document.querySelectorAll('.hidden')

/* --------------------------------------------------------- */

/* Theme */
themeCheck.addEventListener('click',()=>{
    changeTheme.checked = !changeTheme.checked
})

/* Menu e navbar */

menuHamburguer.addEventListener('click',()=>{
    hamburguerInp.checked = !hamburguerInp.checked

    if (navLista.style.display === 'flex') {
        navLista.style.display = 'none';
        document.querySelector(".cabecalho").style.borderBottom = '1px solid black'; 
    } else {
        navLista.style.display = 'flex';
        document.querySelector(".cabecalho").style.borderBottom = 'none'; 
    }
})


let currentSection = 'home'
window.addEventListener('scroll',()=>{
    sections.forEach(sec =>{
        if(window.scrollY >= (sec.offsetTop + 500)){
            currentSection = sec.id;
        }
    })

    navLinks.forEach(navLink =>{
        if(navLink.href.includes(currentSection)){
            navLink.classList.add('active')
        }else {
            navLink.classList.remove('active');
        }
    })
})

/* Efeito hidden com observer */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })
})

hiddenElements.forEach((el) => observer.observe(el));






