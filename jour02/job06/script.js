const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiIndex = 0;

// Écoute l'événement "keydown" pour détecter les touches pressées
document.addEventListener('keydown', function(event) {
    // Vérifie si la touche tapée correspond à celle attendue dans le code Konami
    if (event.keyCode === konamiCode[konamiIndex]) {  // Utilise event.keyCode ici
        konamiIndex++; // Passe à l'étape suivante du code

        // Si toute la séquence est correcte, on applique les styles
        if (konamiIndex === konamiCode.length) {
            activateKonamiStyle();
            konamiIndex = 0; // Réinitialise l'index pour permettre une nouvelle tentative
        }
    } else {
        konamiIndex = 0; // Réinitialise si la touche n'est pas correcte
    }
});

// Fonction qui applique le style après la saisie du code Konami
function activateKonamiStyle() {
    document.body.classList.add('konami'); // Ajoute la classe "konami" pour changer le style
}
