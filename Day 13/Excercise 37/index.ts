// Excercise 37:"Large Shirts:"
function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`Shirt Size: ${size.toUpperCase()},Message: ${message}`);
    
}

// large shirt with default message
make_shirt();

// medium shirt with default message
make_shirt('medium');
