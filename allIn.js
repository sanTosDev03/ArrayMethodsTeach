const students = [
    {
      name: "Jill",
      lastname: "Doe",
      age: 23,
      course: "Marketing",
    },
    {
      name: "John",
      lastname: "Doe",
      age: 20,
      course: "Web Development",
    },
    {
      name: "Jack",
      lastname: "Doe",
      age: 22,
      course: "Accounting",
    },
    {
      name: "Ryan",
      lastname: "Ray",
      age: 24,
      course: "Web Development",
    },
    {
      name: "Jane",
      lastname: "Doe",
      age: 21,
      course: "Financial Management",
    },
];
  
const result = students.map(student => ({
    student: `${student.name} ${student.lastname}`,
    age: `${student.age}`
})).filter(student => student.age >= 22).sort((a,b) => a.age < b.age ? 1 : -1)
.reduce((total,student) => {
    return total + parseInt(student.age);
}, 0 )

console.log(result)

