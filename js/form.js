const form = document.querySelector("#contact form");
const submitButton = form.querySelector("button");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  // On désactive le bouton pendant l'envoi
  submitButton.disabled = true;

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        submitButton.innerHTML = "✅ Message envoyé !";
        submitButton.style.backgroundColor = "#4CAF50"; // vert
        form.reset();

        // Remet le bouton à son état normal après 3 secondes
        setTimeout(() => {
          submitButton.innerHTML =
            '<i class="fa-solid fa-paper-plane"></i> Envoyer';
          submitButton.style.backgroundColor = "";
          submitButton.disabled = false;
        }, 3000);
      } else {
        submitButton.innerHTML = "❌ Erreur, réessayez";
        submitButton.style.backgroundColor = "#f44336"; // rouge
        setTimeout(() => {
          submitButton.innerHTML =
            '<i class="fa-solid fa-paper-plane"></i> Envoyer';
          submitButton.style.backgroundColor = "";
          submitButton.disabled = false;
        }, 3000);
      }
    })
    .catch(() => {
      submitButton.innerHTML = "❌ Erreur, réessayez";
      submitButton.style.backgroundColor = "#f44336"; // rouge
      setTimeout(() => {
        submitButton.innerHTML =
          '<i class="fa-solid fa-paper-plane"></i> Envoyer';
        submitButton.style.backgroundColor = "";
        submitButton.disabled = false;
      }, 3000);
    });
});
