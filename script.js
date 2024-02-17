/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr
    .filter((student) => student.marks > 50)
    .map((student) => {
      console.log(`${student.name} - Marks: ${student.marks}`);
    });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((student) => {
    if (student.marks > 50) {
      console.log(`${student.name} - Marks: ${student.marks}`);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newStudent = { id: 5, name: "vishnu", age: 22, marks: 95 };

  // Append the new student to the array
  arr.push(newStudent);

  // Log the updated array
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  const studentsPassed = arr.filter((student) => student.marks >= 50);

  // Log the updated array
  console.log(studentsPassed);
}

function concatenateArray() {
  //Write your code here, just console.log
  const additionalStudents = [
    { id: 6, name: "Vicky", age: 24, marks: 85 },
    { id: 7, name: "Parama", age: 22, marks: 55 },
    { id: 8, name: "Siva", age: 21, marks: 66 },
  ];

  // Combine the two arrays
  const allStudents = [...arr, ...additionalStudents];

  // Log the combined array
  console.log(allStudents);
}
