var ghibliMovies = ["Spirited Away", "Princess Mononoke", "My Neighbour Totoro", "Howl's Moving Castle", "Ponyo", "My Neighbours the Yamadas"];


function doSomething(arr, f) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    newArray.push(f(arr[i]));
  }
  return newArray;
}

console.log(doSomething(ghibliMovies, (title) => title.split("").reverse().join("")));
console.log(doSomething(ghibliMovies, (title) => title.toUpperCase()));
console.log(doSomething(ghibliMovies, (title) => title.length));

// function listLength (list) {
//   return list.length;
// }

// function upperCase (list) {
//   return list.toUpperCase();
// }

// function reverse (list) {
//   return list.split("").reverse().join("");
// }

// console.log(map(ghibliMovies, function(word) {
//   return word.length;
// })); // = ghibliMovies.map(..)
// // [ghibliMovies[0].length, ghibliMovies[1].length]

// console.log(
//   map(ghibliMovies, function(word) {
//   return word.toUpperCase();
// }));

// console.log(
// map(ghibliMovies, function(word) {
//   return word.split('').reverse().join('');
// }));