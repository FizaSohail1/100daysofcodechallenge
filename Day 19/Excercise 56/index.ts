// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

// Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only those words.

let bagofitems =[1,"Sugar", "mango", 4, "Ball",7,"Laptop"]
// new list
let newList = bagofitems.filter(item => typeof item === "string");
console.log(newList)
