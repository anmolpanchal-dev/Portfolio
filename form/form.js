(function () {
      emailjs.init("kClAcwdc9zDtf8Dno");
    })();

    let msgContainer = document.querySelector("#submitMsg");

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
            msgContainer.innerHTML = `<p id='successMsg'>Successfully Sent.</p>`
            setTimeout(() => msgContainer.innerHTML = "", 2000);
            document.getElementById("contactForm").reset();
          },
          function (error) {
            msgContainer.innerHTML = `<p id='failedMsg'>Failed to Sent. </p>`
            setTimeout(() => msgContainer.innerHTML = "", 2000);
            console.error(error);
          }
        );
    });


document.getElementById("previouspage").addEventListener("click", function() {
    window.location.href = "../index.html";
});