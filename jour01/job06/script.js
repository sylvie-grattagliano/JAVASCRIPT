//création fonction fizzbuzz avec ceation variable let i
/*exercice Créez une fonction fizzbuzz qui ne prend pas de paramètre. Dans cette fonction,
affichez dans la console web les nombres de 1 à 151. Remplacez certains nombres par
un mot selon les conditions suivantes :
● Si le nombre est un multiple de 3, affichez “Fizz”.
● Si le nombre est un multiple de 5, affichez “Buzz”.
● Si le nombre est un multiple de 3 et de 5, affichez “FizzBuzz”. */

function fizzbuzz() {
  for (let i = 1; i <= 151; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    }
    //Cette condition vérifie si let i est divisible par 3 sans reste.//
    //Si let i % 3 donne 0, cela signifie que  let i est un multiple de 3.//
    else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
// Appelle la fonction pour afficher les fizz buzz ou fizzbuzz
fizzbuzz();
