let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Toggle the menu icon and navbar active state
menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");

    // Update aria-expanded attribute for accessibility
    const isExpanded = navbar.classList.contains("active");
    menuIcon.setAttribute("aria-expanded", isExpanded ? "true" : "false");
};

// Close the navbar when clicking outside of it
document.addEventListener("click", (event) => {
    if (!menuIcon.contains(event.target) && !navbar.contains(event.target)) {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
        menuIcon.setAttribute("aria-expanded", "false");
    }
});

// Allow keyboard accessibility (toggle menu on Enter key press)
menuIcon.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");
        const isExpanded = navbar.classList.contains("active");
        menuIcon.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    }
});
