// Dynamically load components
async function loadComponent(id, file) {
const element = document.getElementById(id);
if (element) {
const response = await fetch(file);
const html = await response.text();
element.innerHTML = html;
}
}


// Load header, footer, and banner
window.addEventListener('DOMContentLoaded', () => {
loadComponent('header', 'components/header.html').then(() => initMenu());
loadComponent('footer', 'components/footer.html');
const bannerElement = document.getElementById('banner');
if (bannerElement) loadComponent('banner', 'components/banner.html');
});


// Mobile navigation menu toggle
function initMenu() {
const menu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
if (menu && navLinks) {
menu.addEventListener('click', () => {
navLinks.classList.toggle('active');
});
}
}

function initMenu() {
  const menu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  if (menu && navLinks) {
    menu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}
