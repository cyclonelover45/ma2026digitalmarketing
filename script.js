// Wait until the webpage has loaded
document.addEventListener("DOMContentLoaded", function () {

    // Find all navigation links
    const navLinks = document.querySelectorAll(
        "#main-navigation a"
    );

    // Add functionality to each navigation link
    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            // Find the section the link points to
            const target = document.querySelector(
                link.getAttribute("href")
            );

            // If the section exists, scroll to it
            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });

});

