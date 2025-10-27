let phrase = "Hello, welcome to the world of JavaScript.";

let searchTerm = phrase.includes("welcome");
console.log(searchTerm); // true

let searchTerm2 = phrase.includes("Welcome");
console.log(searchTerm2); // false

let searchTerm3 = phrase.startsWith("Hello", 5);
console.log(searchTerm3); // false

// Extracting a substring using slice
let extracted = phrase.slice(7, 14); // "welcome"
console.log(extracted);

// Extracting a substring from a specific position to the end
let fromPosition = phrase.slice(15); // "to the world of JavaScript."
console.log(fromPosition);

// Using negative indices to extract from the end
let negativeIndex = phrase.slice(-10); // "JavaScript."
console.log(negativeIndex);