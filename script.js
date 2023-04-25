const menu = document.querySelector(".menu-icon")
const overlay = document.querySelector(".overlay")
const closeIcon = document.querySelector(".close-icon")
const navDrawer = document.querySelector(".nav-drawer")

menu.addEventListener("click", () => {
    navDrawer.classList.add("open")
    overlay.classList.add("open")
})

overlay.addEventListener("click", closeDrawer)
closeIcon.addEventListener("click", closeDrawer)

function closeDrawer() {
    navDrawer.classList.remove("open")
    overlay.classList.remove("open")
}