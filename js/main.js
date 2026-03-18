// js/main.js

// Bootstrap JS is loaded via CDN bundle and activates automatically.
// This file adds optional portfolio-specific enhancements.

// --- Dark Mode Toggle ---
// To use: add <button id="theme-toggle" class="btn btn-sm btn-outline-secondary">Dark Mode</button>
// anywhere in your navbar or page.

const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    const current = html.getAttribute('data-bs-theme') || 'light';
    html.setAttribute('data-bs-theme', current === 'dark' ? 'light' : 'dark');
    themeToggle.textContent = current === 'dark' ? 'Dark Mode' : 'Light Mode';
  });
}

// --- Active nav link on scroll (Intersection Observer) ---
// ScrollSpy is already active via data-bs-spy on the <body> tag.
// This is a manual fallback.

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