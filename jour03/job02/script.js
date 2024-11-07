//pour m 'assurer que le DOM est pret à l'utilisation du script

$(document).ready(function () {
  // Mon Tableau arc en ciel
  const images = [
    "images/arc1.png",
    "images/arc2.png",
    "images/arc3.png",
    "images/arc4.png",
    "images/arc5.png",
    "images/arc6.png",
  ];

  // Fonction pour mélanger les images
  function melangerImages(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Fonction pour afficher les images dans le conteneur
  function afficherImages(images) {
    $("#MonArcEnCiel").empty();
    images.forEach((src) => {
      $("#MonArcEnCiel").append(`<img src="${src}" data-couleur="${src}">`);
    });
  }

  // Mélanger les images au clic sur le bouton
  $("#melange").click(function () {
    const imagesMelangees = melangerImages([...images]);
    afficherImages(imagesMelangees);
  });

  // Rendre le conteneur sortable pour le drag-and-drop
  $("#MonArcEnCiel").sortable();

  // Vérification de l’ordre des images
  $("#MonArcEnCiel").on("sortupdate", function () {
    let ordre = $("#MonArcEnCiel img")
      .map(function () {
        return $(this).attr("data-couleur");
      })
      .get();

    if (JSON.stringify(ordre) === JSON.stringify(images)) {
      $("#resultat").text("Vous avez gagné").css("color", "green");
    } else {
      $("#resultat").text("Vous avez perdu").css("color", "red");
    }
  });
});
