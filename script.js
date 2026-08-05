// Basic interactivity: mobile nav toggle, simple booking form validation/demo
document.addEventListener('DOMContentLoaded', () => {
  // year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile nav
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
    }
  });

  // booking form demo (client-side)
  const form = document.getElementById('bookingForm');
  const msg = document.getElementById('formMessage');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const fd = new FormData(form);
    // Demo behavior: show a friendly success message.
    msg.textContent = `Thanks ${fd.get('name')}. Your request for "${fd.get('service')}" on ${fd.get('date')} at ${fd.get('time')} has been received. We'll contact you at ${fd.get('email')}.`;
    msg.style.color = 'green';
    form.reset();

    // For production: send data to a server, or integrate with a booking API/email service.
  });
});