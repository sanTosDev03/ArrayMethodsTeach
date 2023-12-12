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

for (let index = 0; index < students.length; index++) {
    if (students[index].course === "Web Development") {
        console.log(students[index]);
    }
    
}

/* El método `.filter` en JavaScript se utiliza para crear un nuevo array con los elementos 
que cumplen una condición específica,filtrando solamente aquellos que cumplen la condición. */

const programmers = students.filter(student => {
    if (student.age <= 21) {
        return true;
    }
})

console.log(programmers);