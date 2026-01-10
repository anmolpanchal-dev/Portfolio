(function () {
  emailjs.init("Twc8LwyZe8gchY7id"); 
})();

const msgContainer = document.getElementById("submitMsg");

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  console.log("Form submitted");

  emailjs.sendForm(
    "service_43l84zb",      
    "template_rrgl3v1",      
    this                     
  ).then(
    () => {
      msgContainer.innerHTML = "<p id='successMsg'>Successfully Sent.</p>";
      setTimeout(() => (msgContainer.innerHTML = ""), 2000);
      this.reset();
    },
    (error) => {
      msgContainer.innerHTML = "<p id='failedMsg'>Failed to Send.</p>";
      setTimeout(() => (msgContainer.innerHTML = ""), 2000);
      console.error("EmailJS Error:", error);
    }
  );
});

document.getElementById("previouspage").addEventListener("click", () => {
  window.history.back();
});
