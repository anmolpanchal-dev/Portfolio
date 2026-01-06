const aiBtn = document.getElementById("aiToolsBtn");
const aiDropdown = document.getElementById("aiDropdown");

aiBtn.addEventListener("click", () => {
    if (aiDropdown.style.display === "block") {
        aiDropdown.style.display = "none";
    } else {
        aiDropdown.style.display = "block";
    }
});

document.getElementById("contactForm").addEventListener("click", () => {
  window.location.assign("form/form.html");
});



