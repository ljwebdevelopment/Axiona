// Shared behaviors for Axiona static pages.

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Fade-in animation for hero/login card.
  document.querySelectorAll("[data-animate]").forEach((element) => {
    if (!prefersReducedMotion) {
      element.classList.add("is-visible");
    } else {
      element.classList.add("is-visible");
    }
  });

  // Smooth scroll for anchor links on the home page.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Static demo message for contact form.
  const contactForm = document.getElementById("contactForm");
  const contactMessage = document.getElementById("contactMessage");
  if (contactForm && contactMessage) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      contactMessage.textContent = "Static demo — form not connected.";
    });
  }

  // Static demo message for login form.
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");
  if (loginForm && loginMessage) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      loginMessage.textContent =
        "Static demo — connect auth to enable login.";
    });
  }
});
