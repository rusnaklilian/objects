// Creăm obiectul inițial
let user1 = {
  name: "User 1",
  age: 123
};

// Clonăm obiectul folosind spread operator (...)
let user2 = { ...user1 };

// Modificăm valorile din user2
user2.name = "User 2";
user2.age = 321;

// Afișăm ambele obiecte în consolă
console.log("user1:", user1); // { name: "User 1", age: 123 }
console.log("user2:", user2); // { name: "User 2", age: 321 }
