
// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('nav-shadow', window.scrollY > 20);
});
