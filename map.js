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

// El metodo .map a diferencia del ForEach, nos retorna un NUEVO array al terminar de recorrer
// ademas de crear un nuevo array, si debemos indicarle que valor retornar. No modifica el anterior.
const result = students.map( (student, i) => {
    return `Alumno : ${student.name} ${student.lastname}- Edad: ${student.age} - ${i + 1}`;
})

// Podemos iterar y usar este metedo con otra variable que utilize este método
// Cuando defines una función de flecha (=>) que solo tiene una expresión, puedes omitir 
// las llaves {} y el return si devuelves directamente el valor. 
// Esto se conoce como una "expresión de retorno implícita"
const doubleAges = students.map((student, index) => ({
    ...student,
    age: students[index].age * 2
}));

console.log(result);
console.log(doubleAges);
