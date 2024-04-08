// Iterate over a Map of student IDs and names, and log each pair to the console.

let studentId= new Map<number, string>()
studentId.set(1,"Muhammad")
studentId.set(2,"Ali")
studentId.set(3,"Khadija")

studentId.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
  });
