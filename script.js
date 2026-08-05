document.addEventListener("DOMContentLoaded", function () {

  // Footer Year
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Mobile Menu
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }

  // Booking Form
  const form = document.getElementById("bookingForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const service = document.getElementById("service").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;

      const message =
`🌿 *New Appointment Booking*

👤 Name: ${name}

📞 Mobile: ${phone}

💆 Massage: ${service}

📅 Date: ${date}

⏰ Time: ${time}`;

      const whatsapp =
"https://wa.me/919355182588?text=" + encodeURIComponent(message);

      window.open(whatsapp, "_blank");

      form.reset();
    });
  }

});
