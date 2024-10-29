//toujours s' assurer  que le DOM est prêt pour que le code s'execute 

$(document).ready(function() {
    // Action pour afficher le texte
    $("#afficherTexte").click(function() {
        $("#message").text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.");
        $("#message").show(); // Afficher le message
    });

    // Action pour cacher l'élément contenant le message
    $("#cacherElement").click(function() {
        $("#message").hide(); // Cacher le message
    });
});
