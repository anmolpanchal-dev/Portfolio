(function () {
      emailjs.init("kClAcwdc9zDtf8Dno");
    })();

    document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_iyq09kr", 
          "template_ic2gwfd", 
          this
        )
        .then(
          function () {
            alert("✅ Message sent successfully!");
            document.getElementById("contactForm").reset();
          },
          function (error) {
            alert("❌ Failed to send message. Please try again.");
            console.error(error);
          }
        );
    });


document.getElementById("previouspage").addEventListener("click", function() {
    window.location.href = "../index.html";
});