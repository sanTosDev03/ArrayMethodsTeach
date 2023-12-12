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
      age: 20,
      course: "Web Development",
    },
    {
      name: "Jane",
      lastname: "Doe",
      age: 21,
      course: "Financial Management",
    },
];

/*El método `.find` en JavaScript se utiliza para encontrar el primer elemento en un array
que cumple con una condición dada, devolviendo dicho elemento o `undefined` si no se encuentra ninguno.*/
const xStudent = students.find( student => {
    if (student.name === "Ryan") {
        return 1;
    }
})

console.log(xStudent);
