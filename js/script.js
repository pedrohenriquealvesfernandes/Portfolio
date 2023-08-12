/* Variaveis */

/* Tema */

const changeTheme = document.getElementById("change-theme")
const themeCheck = document.querySelector(".box-check")

/* Menu e navbar-lista */
const menuHamburguer = document.getElementById("hamburguer-menu-wrapper")
const navLista = document.querySelector(".navbar-lista")
const hamburguerInp = document.getElementById("hamburguerInp")


/* --------------------------------------------------------- */

themeCheck.addEventListener('click',()=>{
    changeTheme.checked = !changeTheme.checked
})

menuHamburguer.addEventListener('click',()=>{
    hamburguerInp.checked = !hamburguerInp.checked
    navLista.style.display = navLista.style.display === 'flex' ? 'none' : 'flex';
})







