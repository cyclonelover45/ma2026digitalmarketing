document.addEventListener("DOMContentLoaded", function () {
    // 1. Highlight active menu link
    let currentPage = window.location.pathname.split("/").pop();
    if (!currentPage || currentPage === "") {
        currentPage = "index.html";
    }

    const allLinks = document.querySelectorAll(".mr-primary-nav a, .mr-side-nav a, .mr-footer a");

    allLinks.forEach(link => {
        const linkHref = link.getAttribute("href");
        if (linkHref === currentPage) {
            link.classList.add("is-active");
        } else {
            link.classList.remove("is-active");
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
