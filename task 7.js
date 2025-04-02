// Obiectul 'person' cu getter-e
let person = {
  name: "Rusnac Lilian",
  age: 20,
  salary: 50000,
  contacts: { phone: "+37376117681", email: "rusnaklilik07@gmail.com" },
  address: "Chisinau, Moldova",

  // Getter pentru 'name'
  getName() { return this.name; },

  // Getter pentru 'age'
  getAge() { return this.age; },

  // Getter pentru 'salary'
  getSalary() { return this.salary; },

  // Getter pentru 'contacts'
  getContacts() { return this.contacts; },

  // Getter pentru 'address'
  getAddress() { return this.address; }
};

// Testăm getter-ele
console.log(person.getName());      // Rusnac Lilian
console.log(person.getAge());       // 20
console.log(person.getSalary());    // 50000
console.log(person.getContacts());  // { phone: "+37367117681", email: "rusnaklilik07@gmail.com" }
console.log(person.getAddress());   // Chisinau, Moldova
