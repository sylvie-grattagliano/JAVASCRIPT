// function citation(){
// const textCitation = document.getElementById('citation').innerText
// console.log(textCitation)
// }


// Ajouter un écouteur d'événement au bouton pour appeler la fonction 'citation' lors du clic
// NE PAS PRENDRE ONCLICK CAR MELANGE HTML  ALORS QUE ADDEVENTLISTENER EST DANS LE JS PLUS FACILE


// Fonction pour récupérer et afficher la citation dans la console
        function citation() {
            // Récupérer le texte de l'élément ayant l'id 'citation'
            const texteCitation = document.getElementById("citation").innerText;

            // Afficher le texte dans la console
            console.log(texteCitation);
        }
        /* Ajouter un écouteur d'événement au bouton pour appeler la fonction 'citation' lors du clic
        retirer un écouteur d'événement avec removeEventListener(),*/
        
        document.getElementById("button").addEventListener("click", citation);