
      // // Scroll reveal
      // const observer = new IntersectionObserver(entries => {
      //   entries.forEach(e => {
      //     if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); }
      //   });
      // }, { threshold: 0.1 });
      // document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

      // // Navbar shadow on scroll
      // window.addEventListener('scroll', () => {
      //   document.getElementById('nav').classList.toggle('nav-shadow', window.scrollY > 20);
      // });
/* ================================================================
   script.js  —  Anmol Panchal Portfolio
   Fixed: About Me popup, Resume popup, Download Resume button
   All original IDs preserved
================================================================ */

// ── ABOUT POPUP ──────────────────────────────────────────────
// id="aboutPopup", class="aboutBtn", class="close-btn"

const aboutPopup   = document.getElementById('aboutPopup');
const aboutBtns    = document.querySelectorAll('.aboutBtn');
const aboutClosBtn = aboutPopup ? aboutPopup.querySelector('.close-btn') : null;

function openAbout() {
  if (!aboutPopup) return;
  aboutPopup.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  // Small delay so CSS transition fires
  requestAnimationFrame(() => aboutPopup.classList.add('popup-open'));
}

function closeAbout() {
  if (!aboutPopup) return;
  aboutPopup.classList.remove('popup-open');
  setTimeout(() => {
    aboutPopup.style.display = 'none';
    document.body.style.overflow = '';
  }, 250);
}

aboutBtns.forEach(btn => btn.addEventListener('click', openAbout));
if (aboutClosBtn) aboutClosBtn.addEventListener('click', closeAbout);

// Close on backdrop click
if (aboutPopup) {
  aboutPopup.addEventListener('click', (e) => {
    if (e.target === aboutPopup) closeAbout();
  });
}


// ── RESUME POPUP ─────────────────────────────────────────────
// id="resumePopup", class="resumeBtn", id="closeResume"

const resumePopup  = document.getElementById('resumePopup');
const resumeBtns   = document.querySelectorAll('.resumeBtn');
const resumeClosBtn = document.getElementById('closeResume');

function openResume() {
  if (!resumePopup) return;
  resumePopup.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => resumePopup.classList.add('popup-open'));
}

function closeResume() {
  if (!resumePopup) return;
  resumePopup.classList.remove('popup-open');
  setTimeout(() => {
    resumePopup.style.display = 'none';
    document.body.style.overflow = '';
  }, 250);
}

resumeBtns.forEach(btn => btn.addEventListener('click', openResume));
if (resumeClosBtn) resumeClosBtn.addEventListener('click', closeResume);

// Close on backdrop click
if (resumePopup) {
  resumePopup.addEventListener('click', (e) => {
    if (e.target === resumePopup) closeResume();
  });
}


// ── CLOSE POPUPS ON ESC KEY ───────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAbout();
    closeResume();
  }
});


// ── CONTACT FORM BUTTON ───────────────────────────────────────
// id="contactForm" in footer → opens contact page
const contactBtn = document.getElementById('contactForm');
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    window.location.href = 'contact/form.html';
  });
}


// ── AI TOOLS DROPDOWN ─────────────────────────────────────────
// id="aiToolsBtn" toggles id="aiDropdown"
const aiToolsBtn  = document.getElementById('aiToolsBtn');
const aiDropdown  = document.getElementById('aiDropdown');

if (aiToolsBtn && aiDropdown) {
  aiToolsBtn.addEventListener('click', () => {
    const isOpen = aiDropdown.style.display === 'block';
    aiDropdown.style.removeProperty('display'); // remove the !important override
    aiDropdown.style.display = isOpen ? 'none' : 'block';

    // Rotate chevron icon
    const caret = aiToolsBtn.querySelector('.bi-chevron-down');
    if (caret) caret.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
  });
}


// ── PORTFOLIO TAG (sidebar highlight) ────────────────────────
// id="portfolioTag" — kept for original script compatibility
const portfolioTag = document.getElementById('portfolioTag');
// No action needed — purely visual, already styled active


// ── NAVBAR SHADOW ON SCROLL ───────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('nav-shadow', window.scrollY > 20);
});


// ── SCROLL REVEAL ─────────────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));