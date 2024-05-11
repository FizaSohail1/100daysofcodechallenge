// Tuples

let article:readonly [number, string, boolean] = [5,"Hello",true];

// Assigning a new tuple value to the `article` variable
article = [12, "World", false];
console.log(article);

// Destructuring the tuple into individual variables
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);