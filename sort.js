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

/*El método `.sort()` en JavaScript se utiliza para ordenar los elementos de un array alfabéticamente o numéricamente,
modificando el array original.*/


const sortedStudent = students.sort( (first,second) => {
    if (first.age > second.age) {
        return 1
    } else {
        return -1
    }
})
const shortSortedAges = students.sort((a,b) => a.age < b.age ? 1 : -1 ) // Operador Ternario
console.log(sortedStudent);
console.log(shortSortedAges);
