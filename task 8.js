// Obiectul cu zilele săptămânii în engleză
const weekDays = {
  "Mo": "Monday",
  "Tu": "Tuesday",
  "We": "Wednesday",
  "Th": "Thursday",
  "Fr": "Friday",
  "Sa": "Saturday",
  "Su": "Sunday",
};

// Funcția care traduce zilele din engleză în română
function translate() {
  const translations = {
    "Monday": "Luni",
    "Tuesday": "Marți",
    "Wednesday": "Miercuri",
    "Thursday": "Joi",
    "Friday": "Vineri",
    "Saturday": "Sâmbătă",
    "Sunday": "Duminică",
  };

  // Modificăm valorile direct
  for (let key in weekDays) {
    weekDays[key] = translations[weekDays[key]];
  }
}

// Apelăm funcția de traducere
translate();

// Afișăm obiectul actualizat
console.log(weekDays);
