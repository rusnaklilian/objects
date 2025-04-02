let person = {
  name: "Person",           // Numele persoanei
  age: 123,                 // Vârsta persoanei
  salary: 1542.33,          // Salariul persoanei
  contacts: {               // Obiectul 'contacts' conține informațiile de contact
    phone: "112",           // Numărul de telefon
    email: "email@domain.com" // Adresa de email
  },
  address: "Moldova"        // Adresa persoanei
};

//  Actualizăm numărul de telefon la +37312345678
person.contacts.phone = "+37312345678";

//  Eliminăm câmpul 'address'
delete person.address;

// Afișăm obiectul actualizat în consolă
console.log(person);
