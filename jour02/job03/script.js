
let count = 0; // Variable pour garder la valeur du compteur

// Fonction pour incrémenter le compteur
function addone() {
    // Récupérer l'élément <p> avec l'id "compteur"
    let compteur = document.getElementById("compteur");

    // Incrémenter la valeur de count
    count++;

    // Mettre à jour le texte du compteur avec la nouvelle valeur de count
    compteur.innerText = count;

    // Afficher dans la console pour vérifier la valeur
    console.log("Compteur dans la console :", count);
}

// Attacher l'événement 'click' au bouton
document.getElementById("button").addEventListener("click", addone);



