let namePerson = "Alice";
let greeting = `Hello, ${namePerson}! Welcome to the world of template literals.`;
console.log(greeting);

// Multi-line string using template literals
let multiLineString = `This is a string
that spans multiple
lines using template literals.`;

console.log(multiLineString);

// Embedding expressions
let a = 5;
let b = 10;
let expressionString = `The sum of ${a} and ${b} is ${a + b}.`;

console.log(expressionString);

poem = `Roses are red,
Violets are blue,
Template literals are great,
And so are you.`;

console.log(poem);

// Nested template literals
let nestedTemplate = `Outer template literal with an inner one: ${`Inner template says hi!`}`;
console.log(nestedTemplate);

// Escaping backticks
let escapedBacktick = `This is how you include a backtick: \``;
console.log(escapedBacktick);