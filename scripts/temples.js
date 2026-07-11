// 1. Dynamic Footer Dates
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// 2. Hamburger Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    // Changes hamburger icon to an 'X' when open
    menuToggle.innerHTML = navMenu.classList.contains("open") ? "&times;" : "&#9776;";
});