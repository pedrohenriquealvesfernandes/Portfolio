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

/* --------------------------------------------------------- */

/* Theme */
themeCheck.addEventListener('click',()=>{
    changeTheme.checked = !changeTheme.checked
})

/* Menu e navbar */

menuHamburguer.addEventListener('click',()=>{
    hamburguerInp.checked = !hamburguerInp.checked
    navLista.style.display = navLista.style.display === 'flex' ? 'none' : 'flex';
    document.querySelector(".cabecalho").style.border = 'none'
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

/* */







