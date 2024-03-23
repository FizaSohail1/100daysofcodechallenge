// Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

interface student{
    name:string,
    age:number,
    classes:string[]
}
let studentsinfo = [
    {
        name:'Fiza',
        age: 17,
        classes:['English','Urdu','computer']
    }
]
console.log(studentsinfo);
