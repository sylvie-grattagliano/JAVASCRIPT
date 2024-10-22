// for ($i=0;$i<10;$i++) boucle PHP
// for (leti=0;i<10;i++) boucle JS

//tableau jours semaine CONST par ce que les jours de semaine ne changent pas  
const jourssemaine = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];

//Déclare la fonction afficherjourssemaine

function afficherjourssemaine() {
  for (let i = 0; i < 7; i++) console.log(jourssemaine[i]);
}
// Appelle la fonction pour afficher les jours de la semaine
afficherjourssemaine();
//creer variable let i="0" DONC ON NE REPETE PAS LET pour I dans la boucle
