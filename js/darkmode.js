/* Theme */

const changeTheme = document.getElementById("change-theme");
const themeCheck = document.querySelector(".box-check");

themeCheck.addEventListener("click", () => {
  changeTheme.checked = !changeTheme.checked;
  document.body.classList.toggle("dark");
});
