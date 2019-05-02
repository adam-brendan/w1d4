var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];


var result = input.map(tri => Math.sqrt(Math.pow(tri.x, 2) + Math.pow(tri.y, 2)));


console.log(result[0]);
console.log(result[1]);
console.log(result[2]);