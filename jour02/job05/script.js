// Fonction qui calcule le pourcentage 
function changeFooterColorOnScroll() {
    const footer = document.querySelector('footer');
//  // Hauteur totale de défilement
const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
// Position actuelle du scroll
const scrollTop = window.scrollY;
// Calcul du pourcentage de scrolling
const scrollPercent = (scrollTop / totalHeight) * 100;

// Change la couleur du footer en fonction du pourcentage de scrolling
if (scrollPercent < 25) {
    // 0 - 25 % : bleu clair
    footer.style.backgroundColor = "rgb(244, 86, 211"; // ROSE
} else if (scrollPercent < 50) {
    // 25 - 50 % : vert
    footer.style.backgroundColor = "rgb(116, 11, 94)"; // VIOLET
} else if (scrollPercent < 75) {
    // 50 - 75 % : orange
    footer.style.backgroundColor = "rgb(83, 9, 46)"; // VIOLET PLUS FONCE
} else {
    // 75 - 100 % : rouge
    footer.style.backgroundColor = "rgb(146, 10, 33)"; // Rouge
}
}
// Écoute l'événement de scroll sur la fenêtre
window.addEventListener('scroll', changeFooterColorOnScroll);