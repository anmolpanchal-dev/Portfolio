const aiBtn = document.getElementById("aiToolsBtn");
const aiDropdown = document.getElementById("aiDropdown");

aiBtn.addEventListener("click", () => {
  aiDropdown.style.display =
    aiDropdown.style.display === "block" ? "none" : "block";
});

document.getElementById("contactForm").addEventListener("click", () => {
  window.location.href = "form/form.html";
});

document.getElementById("projectStack").addEventListener("click", () => {
  window.location.href = "projectstack/project.html";
});

const aboutBtns = document.querySelectorAll(".aboutBtn");
const aboutPopup = document.getElementById("aboutPopup");
const aboutClose = aboutPopup.querySelector(".close-btn");

aboutBtns.forEach(btn => {
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

const resumeBtns = document.querySelectorAll(".resumeBtn");
const resumePopup = document.getElementById("resumePopup");
const resumeClose = document.getElementById("closeResume");

resumeBtns.forEach(btn => {
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

function closeAllPopups() {
  aboutPopup.style.display = "none";
  resumePopup.style.display = "none";
}
