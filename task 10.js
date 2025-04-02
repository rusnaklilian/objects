// Array-ul cu studenți și notele lor
const students = [
  {
    name: "Petru",
    marks: [8, 10, 7, 5, 4]
  },
  {
    name: "Maxim",
    marks: [3, 4, 2, 5, 6]
  },
  {
    name: "Andrei",
    marks: [9, 10, 8, 9, 7]
  },
  {
    name: "Ion",
    marks: [6, 5, 4, 7, 5]
  },
  {
    name: "Ana",
    marks: [10, 9, 10, 10, 9]
  }
];

// Funcție pentru a calcula media unui student
function calculateAverage(marks) {
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  return total / marks.length;
}

// 1. Afișăm media fiecărui student
students.forEach(student => {
  const average = calculateAverage(student.marks);
  console.log(`${student.name}: ${average.toFixed(1)}`);
});

// 2. Afișăm studenții cu media < 5
console.log("\nStudenți cu media < 5:");
students.forEach(student => {
  const average = calculateAverage(student.marks);
  if (average < 5) {
    console.log(`${student.name} (${average.toFixed(1)})`);
  }
});

// 3. Găsim studentul cu media maximă și minimă
let highest = students[0], lowest = students[0];

students.forEach(student => {
  const average = calculateAverage(student.marks);
  if (average > calculateAverage(highest.marks)) highest = student;
  if (average < calculateAverage(lowest.marks)) lowest = student;
});

console.log(`\nMedia maximă: ${highest.name} (${calculateAverage(highest.marks).toFixed(1)})`);
console.log(`Media minimă: ${lowest.name} (${calculateAverage(lowest.marks).toFixed(1)})`);

// 4. Sortăm studenții după media descrescătoare
students.sort((a, b) => calculateAverage(b.marks) - calculateAverage(a.marks));

console.log("\nLista ordonată după media notelor:");
students.forEach(student => {
  console.log(`${student.name}: ${calculateAverage(student.marks).toFixed(1)}`);
});

// 5. Afișăm studenții cu media mai mare decât media clasei
const classAverage = students.reduce((sum, student) => sum + calculateAverage(student.marks), 0) / students.length;
console.log(`\nMedia clasei: ${classAverage.toFixed(2)}`);

console.log("Studenți cu media mai mare decât media clasei:");
students.forEach(student => {
  const average = calculateAverage(student.marks);
  if (average > classAverage) {
    console.log(`${student.name} (${average.toFixed(1)})`);
  }
});
