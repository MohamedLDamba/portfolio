// Example functionality: Highlight active nav link
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.forEach(nav => nav.classList.remove("active"));
        link.classList.add("active");
      });
    });
  });
  