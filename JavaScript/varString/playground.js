let hello = "Hello";
hello += " world";
console.log(hello);

let $myVariable = "This is valid";
let _anotherVariable = "This is also valid";

console.log($myVariable);
console.log(_anotherVariable);

// let invalid-variable = "This will cause an error"; // Invalid variable name
// let 2ndVariable = "This will also cause an error"; // Invalid variable name
// let var = "This is a reserved keyword"; // Invalid variable name


const person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 28,
    isEmployed: false,
    car : {
        model: "Toyota",
        year: 2015,
    }
};

// Destructuring assignment

let { firstName, lastName, age, isEmployed, car, country = "Malaysia" } = person;

console.log("My name is " + firstName + " " + lastName + ". I am " + age + " years old. " + "I drive a " + car.model + " from year " + car.year + ". I live in " + country + ". ");

// Accessing properties without destructuring
console.log("My name is " + person.firstName + ".");

let greeting = "hello";

console.log(greeting.toUpperCase()); // Outputs: "HELLO"

console.log(greeting[0].toUpperCase() + greeting.slice(1)); // Outputs: "Hello"

console.log(greeting[0].replace("h", "H") + greeting.slice(1)); // Outputs: "Hello"

let text = "   Hello, World!   ";
console.log(text.trim()); // "Hello, World!"
console.log(text.trimStart()); // "Hello, World!   "
console.log(text.trimEnd()); // "   Hello, World!"

let repeatedWord = text.repeat(3);
console.log(repeatedWord); // "   Hello, World!      Hello, World!      Hello, World!   "


