// Fonction pour afficher/masquer l'article
function showhide() {
    // Récupérer l'élément article
    let article = document.getElementById("texte");
  
    // Vérifier si l'article est actuellement visible
    if (article) {
      // Si l'article existe, le supprimer (le cacher)
      article.remove();
    } else {
      // Sinon, le créer et l'ajouter au DOM (l'afficher)
      article = document.createElement("article");
      article.id = "texte";
      article.innerText = "L'important n'est pas la chute, mais l'atterrissage.";
      document.body.appendChild(article);
    }
  }
  
  // Ajouter l'événement 'click' au bouton en dehors de la fonction showhide
  document.getElementById("button").addEventListener("click", showhide);
  
  console.log("bouton");
  
//document.getElementById("button").removeEventListener("click", texte);pour annuler click

/* .style : C'est une propriété JavaScript qui permet d'accéder ou de modifier les styles CSS 
en ligne d'un élément HTML via le DOM */
//appenChild methde js qui va recuperer l'element article

// document.getElementById("button").addEventListener('click', (texte) => {

// });
