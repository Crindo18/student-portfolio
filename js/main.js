// js/main.js
// Bootstrap CDN bundle activates automatically via data-bs-* attributes.
// This file adds optional portfolio-specific enhancements.

// --- Dark Mode Toggle ---
// Add <button id="theme-toggle"> anywhere in your HTML to use this.
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    const current = html.getAttribute('data-bs-theme') || 'light';
    html.setAttribute('data-bs-theme', current === 'dark' ? 'light' : 'dark');
    themeToggle.textContent = current === 'dark' ? 'Dark Mode' : 'Light Mode';
  });
}

// --- Active nav link highlight on scroll (Intersection Observer) ---
// ScrollSpy is already active via data-bs-spy on <body>.
// This is a manual fallback for reliability.
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === '#' + entry.target.id
        );
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => observer.observe(section));