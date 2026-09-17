document.addEventListener("DOMContentLoaded", function () {
    // 1. Highlight active menu link
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const allLinks = document.querySelectorAll(".mr-primary-nav a, .mr-side-nav a, .mr-footer a");

    allLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("is-active");
        }
    });

    // 2. Mobile Menu Toggle Setup
    const toggleBtn = document.querySelector(".mr-mobile-toggle");
    const primaryNav = document.querySelector(".mr-primary-nav");

    if (toggleBtn && primaryNav) {
        toggleBtn.addEventListener("click", function () {
            primaryNav.classList.toggle("is-open");
        });
    }
});
