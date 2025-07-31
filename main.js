document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const messageDiv = document.getElementById('formMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = form.elements['firstname'].value.trim();
    const email = form.elements['email'].value.trim();

    if (name === '' || email === '') {
      showMessage('Please fill in all the fields.', 'error');
    } else if (!validateEmail(email)) {
      showMessage('Please enter a valid email address.', 'error');
    } else {
      showMessage(
        `Message Sent!
        Thanks for completing the form. We'll be in touch soon!
        `
        , 'success');
    }
  });

  function showMessage(msg, type) {
    messageDiv.innerHTML = msg.replace(/\n/g, '<br>');
    messageDiv.className = '';
    messageDiv.classList.add(type === 'success' ? 'success' : 'error');
    messageDiv.classList.remove('hidden');
  }

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
});