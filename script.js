// Personalize these values before publishing.
const PORTFOLIO = {
  email: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-linkedin-profile/"
};

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("emailLink").href = `mailto:${PORTFOLIO.email}`;
document.getElementById("linkedinLink").href = PORTFOLIO.linkedin;

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});
