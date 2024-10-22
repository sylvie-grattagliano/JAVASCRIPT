
//annee bissextile divisible par 4 donc fonction et condition:
/*Une année est bissextile si :
Elle est divisible par 4 */

function bissextile(annee) {
    //Vérifie si l'année est divisible par 4
    if (annee % 4 === 0) { 
        return true;  // Divisible par 4, donc bissextile
    } else {
        return false;
    }
}



//  variable estBissextile avec let mais pas obligatoire
// let estBissextile = bissextile(2024)
// Appelle la fonction bissextile avec l'année 2024
// console.log(estBissextile)
// alert(estBissextile)  
//  Appelle la fonction et affiche directement le résultat
console.log(bissextile(2024));  // Affiche true
alert(bissextile(2024));        // Affiche une alerte avec true


