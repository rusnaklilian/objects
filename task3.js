function multiplyNumeric(obj) {
  // Parcurge toate proprietățile obiectului
  for (let key in obj) {
    // Verifică dacă valoarea proprietății este un număr
    if (typeof obj[key] === "number") {
      // Înmulțește valoarea numerică cu 2
      obj[key] *= 2;
    }
  }
}

// Exemplu de utilizare
let menu = {
  width: 200,  // Proprietate numerică
  height: 300, // Proprietate numerică
  title: "My menu" // Proprietate de tip string (nu se modifică)
};

multiplyNumeric(menu); // Modifică direct obiectul

console.log(menu);
// Output: { width: 400, height: 600, title: 'My menu' }
