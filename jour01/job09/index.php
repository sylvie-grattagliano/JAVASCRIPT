<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jour01-Job09--JavaScript</title>
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h2>Tri des nombres</h2>

    <p> Ce code te permet de trier un tableau soit dans l'ordre croissant, 
        soit dans l'ordre décroissant, selon la valeur de order.</p> 
        <p>Déclaration de la fonction tri :</p> 
        <p><strong>function tri(numbers, order) {</strong>
            </p> <br>
            <p>La fonction tri prend deux arguments :
numbers : Un tableau de nombres que tu souhaites trier.
order : Une chaîne de caractères qui peut être 'asc' (tri croissant) ou 'desc' (tri décroissant).</p>
<p>Déclaration de la fonction de comparaison comparer :</p>
<p> <strong> function comparer(a, b) {</strong>
    </p>
    <p><ul>
        <li>comparer est une fonction imbriquée dans la fonction tri et est utilisée pour comparer deux éléments a et b du tableau.</li>
        <li>Cette fonction est passée en tant que paramètre à la méthode sort() pour contrôler l'ordre du tri.</li>
    </ul></p>
    <p>Condition if pour vérifier l'ordre croissant :</p>
    <p>  <strong>  if (order === "asc") {
      return a - b;
    }</strong>
</p>
<p><ul>
    <li>Si l'ordre est 'asc' (croissant), la fonction retourne a - b.</li>
<li>Si a est plus petit que b, cela retourne un nombre négatif, ce qui place a avant b dans le tableau.</li>
<li>Si a et b sont égaux, cela retourne 0, donc l'ordre reste inchangé.</li>
<li>Si a est plus grand que b, cela retourne un nombre positif, ce qui place b avant a dans le tableau.</li>
</ul></p>
<p>Condition else if pour vérifier l'ordre décroissant :</p>
<p><strong>    } else if (order === "desc") {
      return b - a;
    }</strong>
</p>
<p><ul>
    <li>Si l'ordre est 'desc' (décroissant), la fonction retourne b - a.</li>
    <li>Cela inverse le tri : si b est plus petit que a, b sera placé avant a, car le résultat sera un nombre négatif.</li>
</ul></p>
<p>Retour par défaut :</p>
<p><strong>    return 0;</strong></p>
<p><ul>
    <li>Si aucune des conditions asc ou desc n'est remplie (c'est-à-dire si l'ordre est mal spécifié ou absent), la fonction retourne 0.</li>
    <li>return 0 signifie que a et b sont considérés comme égaux, donc l'ordre des éléments reste inchangé.</li>
</ul></p>
<p>Retour du tableau trié :</p>
<p><strong>  return numbers.sort(comparer);</strong></p>
<p><ul><li>La méthode sort() de JavaScript trie le tableau numbers en utilisant la fonction comparer comme critère de tri. Elle trie directement le tableau en fonction du résultat de la comparaison entre chaque paire d'éléments.</li>
<li>numbers.sort(comparer) trie et renvoie le tableau numbers trié selon l'ordre défini par asc ou desc.</li></ul></p>
<p>Appels à la fonction tri avec des exemples :</p>
<p><strong>console.log(tri([3, 9, 12, 1, 22], "asc"));
console.log(tri([3, 9, 12, 1, 22], "desc"));</strong></p>
<p><ul>
    <li>La première ligne appelle la fonction tri avec le tableau [3, 9, 12, 1, 22] et l'ordre 'asc'. Le résultat trié sera [1, 3, 9, 12, 22].</li>
    <li>La seconde ligne appelle la fonction tri avec le même tableau mais avec l'ordre 'desc'. Le résultat sera [22, 12, 9, 3, 1].</li>
</ul></p>
<p><ul>
    
    <li><strong>Récapitulatif du fonctionnement global :</li></strong>
<li>tri prend un tableau et un ordre.</li>
<li>comparer compare deux éléments à la fois selon l'ordre spécifié.</li>
<li>sort trie le tableau en utilisant comparer.</li>
<li>Le résultat est affiché avec console.log.</li>
Ce code te permet de trier un tableau soit dans l'ordre croissant, soit dans l'ordre décroissant, selon la valeur de order.</li>
</ul></p>

</body>
</html>