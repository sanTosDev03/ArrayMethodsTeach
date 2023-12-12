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
// Forma Imperativa
let acumulador = 0; 
for (let index = 0; index < students.length; index++) {
   acumulador +=  students[index].age    
}
console.log(acumulador)

/*`reduce` en JavaScript permite consolidar un array en un único valor aplicando una función 
acumulativa a cada elemento, creando un resultado final.*/
const valAcumulador = students.reduce( (total,student) => {
    return total + student.age;
}, 0 )
console.log(valAcumulador);

const developers = [
    {
      id: 1,
      name: "John",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS","Java"],
    },
    {
      id: 2,
      name: "Jane",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
    },
    {
      id: 3,
      name: "Jack",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
    },
];

const allSkills = developers.reduce( (totalSkills,dev) => {
    return Array.from( new Set([...totalSkills, ...dev.skills]) );
}, [])

console.log(allSkills);