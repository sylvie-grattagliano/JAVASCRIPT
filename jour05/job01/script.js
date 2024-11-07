// verifie execution script si document DOM chargé avant

document.addEventListener("DOMContentLoaded", function () {

  //création variables 
  const form = document.querySelector("form");// ne sélectionnera que le premier formulaire (loginForm).
  const prenom = document.getElementById("prenom");
  const nom = document.getElementById("nom");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const prenomError = document.getElementById("prenomError");
  const nomError = document.getElementById("nomError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // Fonction de validation des champs
  function validateField(input, errorField, validator) {
    const errorMessage = validator(input.value);
    errorField.textContent = errorMessage;
    return !errorMessage;
  }

  // creation variable pour validation formulaire et regroupe les fonctions
  const validators = {
    prenom: (value) =>
      value.length < 3 ? "La taille de votre prénom est trop petite" : "",
    nom: (value) =>
      value.length < 3 ? "La taille de votre nom est trop petite" : "",
    email: (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ""
        : "Veuillez entrer un email valide",
    password: (value) =>
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(value)
        ? ""
        : "Minimum 8 caractères, au moins une lettre, un chiffre et un caractère spécial",
    // confirmPassword: (value) =>
    //   value === password.value ? "" : "Les mots de passe ne correspondent pas",
  };

  // Écouteurs pour la validation en temps réel
  prenom.addEventListener("input", () =>
    validateField(prenom, prenomError, validators.prenom)
  );
  nom.addEventListener("input", () =>
    validateField(nom, nomError, validators.nom)
  );
  email.addEventListener("input", () =>
    validateField(email, emailError, validators.email)
  );
  password.addEventListener("input", () =>
    validateField(password, passwordError, validators.password)
  );

  // Validation au moment de la soumission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la soumission pour la validation
    const isValidPrenom = validateField(prenom, prenomError, validators.prenom);
    const isValidNom = validateField(nom, nomError, validators.nom);
    const isValidEmail = validateField(email, emailError, validators.email);
    const isValidPassword = validateField(
      password,
      passwordError,
      validators.password
    );
    // const isValidConfirmPassword = validateField(
    //   confirmPassword,
    //   confirmPasswordError,
    //   validators.confirmPassword
    // );

    if (
      isValidPrenom &&
      isValidNom &&
      isValidEmail &&
      isValidPassword
      //   isValidConfirmPassword
    ) {
      // Tous les champs sont valides, on peut soumettre le formulaire
      alert("Inscription réussie !");
      form.submit();
    } else {
      alert("Veuillez corriger les erreurs avant de soumettre le formulaire.");
    }
  });
});
