// Implement a try-catch block to handle potential errors in a block of code.
try {
    // Intentionally cause an error
    throw new Error("Something went wrong");
}
catch (error) {
    console.log(error.message); // Logs the error message
}
