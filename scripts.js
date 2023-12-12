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
  
const developers = [
    {
      id: 1,
      name: "John",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
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
  
   const points = [
    100, 20, 30, 44, 55, 70, 90, 10, 30, 45, 60, 80, 100, 100,
];


// Forma impetativa === Indico todo lo que tiene que hacer paso a paso;
/* for (let index = 0; index < students.length; index++) {
    console.log(students[index]);
} 

// ForEach
developers.forEach( (dev,i,devs) => {
    console.log(dev.name);
    console.log(i);
    console.log(devs);
})*/


// El forEach no retorna ningun valor cuando termina de recorrer, es decir, que nosotros tenemos que indicar que debe
// retornar. EJ:
const fullnames = [];
students.forEach( student => {
    fullnames.push(`${student.name} ${student.lastname}`)
})
console.log(fullnames);

