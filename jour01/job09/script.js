function tri(numbers, order) {
  function comparer(a, b) {
    if (order === "asc") {
      return a - b;
    } else if (order === "desc") {
      return b - a;
    }
    return 0; // ne trie pas
  }
  return numbers.sort(comparer); //utilise la methode
}

console.log(tri([3, 9, 12, 1, 22], "asc"));
console.log(tri([3, 9, 12, 1, 22], "desc"));