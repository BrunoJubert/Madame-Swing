const form = document.getElementById("contactForm");
const feedback = document.querySelector(".form-feedback");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    feedback.textContent = "Merci de remplir tous les champs.";
    feedback.style.color = "red";
    return;
  }

  // Ici, envoi via EmailJS ou Formspree
  // Pour l'instant on simule l'envoi
  feedback.textContent = "Message envoyé avec succès !";
  feedback.style.color = "green";
  form.reset();
});
