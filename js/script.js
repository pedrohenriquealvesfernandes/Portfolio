/* Variaveis */

/* Theme */

const changeTheme = document.getElementById("change-theme")
const themeCheck = document.querySelector(".box-check")

/* Menu e navbar-lista */
const menuHamburguer = document.getElementById("hamburguer-menu-wrapper")
const navLista = document.querySelector(".navbar-lista")
const hamburguerInp = document.getElementById("hamburguerInp")

const sections = document.querySelectorAll('section')


/* --------------------------------------------------------- */

/* Theme */
themeCheck.addEventListener('click',()=>{
    changeTheme.checked = !changeTheme.checked
})

/* Menu e navbar */

menuHamburguer.addEventListener('click',()=>{
    hamburguerInp.checked = !hamburguerInp.checked
    navLista.style.display = navLista.style.display === 'flex' ? 'none' : 'flex';
})

/* */







