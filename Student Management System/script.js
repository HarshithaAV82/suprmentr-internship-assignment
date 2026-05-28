// Array of student objects
const students = [
  { name: "Harshitha", marks: [85, 90, 88] },
  { name: "Hema", marks: [70, 75, 80] },
  { name: "Acchu", marks: [92, 89, 95] },
];

// Function to calculate average
function calculateAverage(marks) {
  let sum = 0;

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }

  return sum / marks.length;
}

// Display student details
students.forEach((student) => {
  let avg = calculateAverage(student.marks);

  console.log("Student Name:", student.name);
  console.log("Marks:", student.marks);
  console.log("Average:", avg);
  console.log("----------------------");
});
