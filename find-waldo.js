function findWaldo(arr, found) {
  arr.forEach(function(element) {
    if (element === "Waldo") {
      found(arr.indexOf(element));   // execute callback)
    }
  });
}

function actionWhenFound(position) {
  console.log("Found him at index " + position);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);