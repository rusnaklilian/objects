// Array-ul de puncte
let points = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: null, y: 4 },
  { x: 3, y: undefined }
];

// Funcția care filtrează punctele valide
function filterValidPoints(points) {
  return points.filter(point => point.x != null && point.y != null);
}

// Afișăm punctele valide
console.log(filterValidPoints(points));
