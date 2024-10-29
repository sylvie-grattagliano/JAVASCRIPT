$(document).ready(function () {
  //creation des variables
  const size = 3; //  grille images 3x3
  const $grid = $("#grid");
  const $message = $("#message");
  const $restartButton = $("#recommencer");

  // tableau des 8 images
  let tiles = [
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png",
    "images/7.png",
    "images/8.png",
    null, // Case vide
  ];

  // Mélange les images
  function shuffleTiles() {
    tiles = tiles.sort(() => Math.random() - 0.5);
    renderGrid();
  }

  // Génère la grille avec les images
  function renderGrid() {
    $grid.empty();
    tiles.forEach((tile, index) => {
      const $tileDiv = $("<div>")
        .addClass("tile")
        .data("index", index)
        .toggleClass("empty", tile === null);

      // Si le bloc contient une image, l'ajoute en tant qu'arrière-plan
      if (tile) {
        $tileDiv.css("background-image", `url(${tile})`);
        $tileDiv.click(function () {
          moveTile(index);
        });
      }

      $grid.append($tileDiv);
    });
  }

  // Déplace un carreau dans la case vide
  function moveTile(clickedIndex) {
    const emptyIndex = tiles.indexOf(null);
    const validMoves = [
      emptyIndex - 1,
      emptyIndex + 1,
      emptyIndex - size,
      emptyIndex + size,
    ];

    // Si le carreau est adjacent à la case vide, on échange
    if (validMoves.includes(clickedIndex)) {
      [tiles[emptyIndex], tiles[clickedIndex]] = [
        tiles[clickedIndex],
        tiles[emptyIndex],
      ];
      renderGrid();
      checkWin();
    }
  }

  // Vérifie si le joueur a gagné
  function checkWin() {
    const isWin = tiles
      .slice(0, -1)
      .every((tile, index) => tile && tile.endsWith(`${index + 1}.png`));
    if (isWin) {
      $message.text("Vous avez gagné !").css("color", "green").show();
      $(".tile").off("click"); // Désactiver les clics
      $restartButton.show();
    }
  }

  // Bouton pour recommencer le jeu
  $restartButton.click(function () {
    shuffleTiles();
    $message.hide();
    $restartButton.hide();
  });

  // Initialisation du jeu
  shuffleTiles();
});
