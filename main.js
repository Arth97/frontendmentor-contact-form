document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = form.elements['firstname'].value.trim();
    const email = form.elements['email'].value.trim();

    if (nombre === '' || email === '') {
      alert('Por favor, completa todos los campos.');
    } else if (!validateEmail(email)) {
      alert('Por favor, ingresa un email válido.');
    } else {
      alert('¡Formulario enviado correctamente!');
      // form.submit();
    }
  });

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
});