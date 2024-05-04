/* Question What are the final values of all variables a, b, c and d after the code below?
let a = 1, b = 1;
let c = ++a; 
let d = b++; */
// sloution
let a = 1, b = 1;

alert( ++a ); // 2
alert( b++ ); // 1
alert( a ); // 2
alert( b ); // 2

//Task 2 
//What are the values of c and d after the code below?
let c = 2;
let d = 1 + (a *= 2);

// answer will be c = 4 and d =5