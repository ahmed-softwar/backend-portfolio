
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".navbar a");

const closeMenu = () => {
    navbar.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
};

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navbar.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 650) {
            closeMenu();
        }
    });
}
