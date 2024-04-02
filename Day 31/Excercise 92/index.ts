//  Write a function to remove the last element from an array and return the removed element.


let sports: string[] = ['Cricket','Football','Badminton','Hockey']
function removeLastElement<T>(array: T[]): T | undefined {
    return array.pop(); 
}

console.log(removeLastElement(sports)); 
console.log(sports); 