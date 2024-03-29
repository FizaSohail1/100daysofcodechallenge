// Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
 
// This function swaps "JavaScript" with "TypeScript" in a sentence
function replaceSentance(sentence: string): string {
    return sentence.replace(/JavaScript/g, "TypeScript");
    
}
console.log(replaceSentance("I love JavaScript and JavaScript is awesome!"));
