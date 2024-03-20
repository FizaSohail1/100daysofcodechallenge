// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

let programmerKnows = {
    languages:["HTML","JavaScript", "TypeScript", "Python"],
    tools:["Git","Webpack","Docker"],
    frameworks:["React","Vue", "Angular"]
};
// Getting specific skills from the list
let {languages , tools , frameworks} = programmerKnows;

// Showing one skill from each category 
console.log(`languages:${languages[0]} tools:${tools[0]} , frameworks : ${frameworks[0]}`);