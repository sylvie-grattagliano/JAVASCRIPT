<?php

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js"> </script>
    <title>jour Fériés</title>
</head>
<body>
    <h1> JE TESTE LES JOURS FERIES </h1>
    
    <p>1. Condition if (joursFeries.some(jourFerie => jourFerie.getTime() === date.getTime())) :
joursFeries : Il s'agit d'un tableau contenant des objets Date représentant les jours fériés de l'année.

<p>.some() : Cette méthode de tableau vérifie si au moins un élément du tableau satisfait la condition donnée dans la fonction. Si c'est le cas, elle retourne true, sinon false.</p>

<p>jourFerie => jourFerie.getTime() === date.getTime() :</p>

<p>Pour chaque élément du tableau joursFeries (appelé ici jourFerie), cette fonction compare l'heure (en millisecondes) du jour férié à celle de la date donnée (date.getTime()).
getTime() : Cette méthode retourne le nombre de millisecondes écoulées depuis le 1er janvier 1970 pour un objet Date. Cela permet de comparer deux dates directement, car deux objets Date ne peuvent pas être comparés par simple égalité (===), étant des objets complexes.
Résultat : Si la condition est vraie (c'est-à-dire que la date correspond à un jour férié), le bloc console.log sera exécuté pour afficher un message indiquant que la date donnée est un jour férié.</p>

<p>2. Condition else if (date.getDay() === 0 || date.getDay() === 6) :
date.getDay() : Cette méthode retourne un nombre représentant le jour de la semaine pour la date donnée (0 pour dimanche, 1 pour lundi, ..., 6 pour samedi).</p>

<p>date.getDay() === 0 || date.getDay() === 6 : Ici, on vérifie si la date correspond à un dimanche (0) ou à un samedi (6).</p>

<p>Résultat : Si c'est le cas, cela signifie que la date tombe un week-end, donc un message est affiché pour indiquer que ce jour est un week-end.</p>

<p>3. Bloc else :
Si la date ne correspond ni à un jour férié ni à un week-end, cette dernière condition sera exécutée. Cela signifie que la date est un jour de semaine (lundi à vendredi) et qu'elle n'est pas un jour férié.</p>

<p>console.log() : Ce bloc affichera un message indiquant que la date est un jour travaillé.</p>

<p>En résumé :
Si la date correspond à un jour férié (présent dans le tableau joursFeries), un message indique que c'est un jour férié.
Sinon, si c'est un week-end (samedi ou dimanche), un message indique que c'est un week-end.
Sinon (ni jour férié, ni week-end), le message indique que c'est un jour travaillé.
Cela permet de classer une date donnée en trois catégories : jour férié, week-end, ou jour travaillé.</p>
<!-- Test des différentes dates-->

    
</body>
</html>

