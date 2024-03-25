// Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
// Demonstrating block scope
{
    let blockLet = "visible inside the block";
    const blockConst = "also only inside the block";
    console.log(blockLet); 
    console.log(blockConst);
}

try {
    console.log(blockLet); // This will show eror
} catch (error) {
    console.log("`blockLet` is not accessible outside the block.");
}

try {
    console.log(blockConst); // This will also show error
} catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}
