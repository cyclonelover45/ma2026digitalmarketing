// Create the navigation menu
const nav = document.createElement("nav");
nav.id = "main-navigation";

// Create the navigation links
const links = [
    {
        text: "Hobbies",
        link: "#hobbies"
    },
    {
        text: "Education",
        link: "#education"
    },
    {
        text: "Work Experience",
        link: "#work"
    }
];

// Add each link to the navigation
links.forEach(item => {
    const a = document.createElement("a");

    a.textContent = item.text;
    a.href = item.link;

    nav.appendChild(a);
});

// Add the navigation to the page
document.body.prepend(nav);

// Style the navigation
nav.style.position = "fixed";
nav.style.top = "20px";
nav.style.left = "20px";
nav.style.display = "flex";
nav.style.flexDirection = "column";
nav.style.gap = "12px";
nav.style.backgroundColor = "#1e3a5f";
nav.style.padding = "15px";
nav.style.borderRadius = "10px";
nav.style.zIndex = "1000";

// Style each link
const navLinks = nav.querySelectorAll("a");

navLinks.forEach(link => {
    link.style.color = "white";
    link.style.textDecoration = "none";
    link.style.fontFamily = "Arial, sans-serif";
    link.style.fontSize = "16px";
    link.style.padding = "8px 12px";
    link.style.borderRadius = "5px";

    // Change color when mouse enters
    link.addEventListener("mouseenter", () => {
        link.style.backgroundColor = "#35658f";
    });

    // Return to normal when mouse leaves
    link.addEventListener("mouseleave", () => {
        link.style.backgroundColor = "transparent";
    });
});
