const aiBtn = document.getElementById("aiToolsBtn");
const aiDropdown = document.getElementById("aiDropdown");

if (aiBtn && aiDropdown) {
  aiBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    aiDropdown.style.display =
      aiDropdown.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", (e) => {
    if (!aiDropdown.contains(e.target) && e.target !== aiBtn) {
      aiDropdown.style.display = "none";
    }
  });
}

const contactBtn = document.getElementById("contactForm");
if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    window.location.href = "form/form.html";
  });
}

const aboutBtns = document.querySelectorAll(".aboutBtn");
const aboutPopup = document.getElementById("aboutPopup");
const aboutClose = aboutPopup ? aboutPopup.querySelector(".close-btn") : null;

if (aboutBtns.length && aboutPopup && aboutClose) {
  aboutBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      closeAllPopups();
      aboutPopup.style.display = "flex";
    });
  });

  aboutClose.addEventListener("click", () => {
    aboutPopup.style.display = "none";
  });

  aboutPopup.addEventListener("click", (e) => {
    if (e.target === aboutPopup) {
      aboutPopup.style.display = "none";
    }
  });
}

const resumeBtns = document.querySelectorAll(".resumeBtn");
const resumePopup = document.getElementById("resumePopup");
const resumeClose = document.getElementById("closeResume");

if (resumeBtns.length && resumePopup && resumeClose) {
  resumeBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      closeAllPopups();
      resumePopup.style.display = "flex";
    });
  });

  resumeClose.addEventListener("click", () => {
    resumePopup.style.display = "none";
  });

  resumePopup.addEventListener("click", (e) => {
    if (e.target === resumePopup) {
      resumePopup.style.display = "none";
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAllPopups();
  }
});

function closeAllPopups() {
  if (aboutPopup) {
    aboutPopup.style.display = "none";
  }
  if (resumePopup) {
    resumePopup.style.display = "none";
  }
}
