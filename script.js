// Adding animations and interactivity

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.querySelector("main input");

    // Animation effect: Input box glow on focus
    inputField.addEventListener("focus", () => {
        inputField.style.boxShadow = "0 0 10px 2px rgba(255, 77, 77, 0.8)";
    });

    inputField.addEventListener("blur", () => {
        inputField.style.boxShadow = "none";
    });

    // Logo animation: Hover effect
    const logo = document.querySelector("header .logo img");

    logo.addEventListener("mouseover", () => {
        logo.style.transform = "scale(1.1)";
        logo.style.transition = "transform 0.3s ease-in-out";
    });

    logo.addEventListener("mouseout", () => {
        logo.style.transform = "scale(1)";
    });

    // Footer year update dynamically
    const footer = document.querySelector("footer");
    const year = new Date().getFullYear();
    footer.innerHTML = `Copyright &copy; ${year} | All rights reserved`;
});
