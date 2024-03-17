// Excercise 37:"Large Shirts:"
function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Shirt Size: ".concat(size.toUpperCase(), ",Message: ").concat(message));
}
// large shirt with default message
make_shirt();
// medium shirt with default message
make_shirt('medium');
