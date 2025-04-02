// Obiectele person1 și person2
const person1 = {
  name: "Person",
  age: 123,
  salary: 1542.33,
  contacts: {
    phone: "112",
    email: "email@domain.com"
  },
  address: "Moldova"
};

const person2 = {
  name: "Person",
  age: 123,
  salary: 2000.00, // Valoare diferită
  contacts: {
    phone: "112",
    email: "email@domain.com"
  },
  address: "Romania" // Valoare diferită
};

// Funcția de intersectare
function Intersection(obj1, obj2) {
  let result = {};

  // Comparăm doar cheile care au aceleași valori în ambele obiecte
  for (let key in obj1) {
    if (obj1[key] === obj2[key]) {
      result[key] = obj1[key];
    } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      // Comparăm obiectele imbricate
      let nestedResult = Intersection(obj1[key], obj2[key]);
      if (Object.keys(nestedResult).length > 0) {
        result[key] = nestedResult;
      }
    }
  }

  return result;
}

// Apelăm funcția de intersectare
const intersectionResult = Intersection(person1, person2);

// Afișăm rezultatul
console.log(intersectionResult);
