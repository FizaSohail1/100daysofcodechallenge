// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
var programmerKnows = {
    languages: ["HTML", "JavaScript", "TypeScript", "Python"],
    tools: ["Git", "Webpack", "Docker"],
    frameworks: ["React", "Vue", "Angular"]
};
var languages = programmerKnows.languages, tools = programmerKnows.tools, frameworks = programmerKnows.frameworks;
console.log("languages:".concat(languages[0], " tools:").concat(tools[0], " , frameworks : ").concat(frameworks[0]));
