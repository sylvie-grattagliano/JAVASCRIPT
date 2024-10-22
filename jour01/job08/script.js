

//fonction définir nbre premier 
/*Nombres Premiers :
//2 : Divisible uniquement par 1 et 2
// 7 : Divisible uniquement par 1 et 7*/

function estPremier(nombre) {
    if (nombre < 2) {
        return false;  //inférieur à 2 ne sont pas premiers
    }
      
    // Vérification si le nombre a un diviseur autre que 1 et lui-même
    for (let i = 2; i <= nombre / 2; i++) { 
        if (nombre % i === 0) {
            return false; //  diviseur  n'est pas un nombre premier
        }
    }
    return true; // Si aucun diviseur n'est trouvé, le nombre est premier
}
function sommenombrespremiers (a,b){

//a et b sont tous les deux des nombres premiers
if (estPremier(a) && estPremier(b)) {
    return a + b; // Retourne la somme 
} else {
    return false; 
}
}

//création variable pour resultat 
// let resultat = sommenombrespremiers (4,8);
// let resultat = sommenombrespremiers (7,3);
// let resultat = sommenombrespremiers (3,5);
// let resultat = sommenombrespremiers (7,11);
// let resultat = sommenombrespremiers (10,13);

// console.log(resultat); 
console.log(sommenombrespremiers(4, 8))
console.log(sommenombrespremiers(7, 3))
console.log(sommenombrespremiers(3, 5));
console.log(sommenombrespremiers(7, 11));
console.log(sommenombrespremiers(10, 13));


