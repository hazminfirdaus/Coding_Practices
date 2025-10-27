// EXPLICIT BASIC TYPES

// String
let greeting: string = "Hello, TypeScript!";

// Number
let age: number = 30;

// Boolean
let isStudent: boolean = false;

// Array
let scores: number[] = [95, 85, 76];

// Tuple
let person: [string, number] = ["Alice", 25];

console.log(greeting);
console.log(`Age: ${age}, Is Student: ${isStudent}`);
console.log(`Scores: ${scores.join(", ")}`);
console.log(`Person: Name - ${person[0]}, Age - ${person[1]}`);

// EXPLICIT FUNCTIONS

function greet(name: string): string {
    return `Hello, ${name}!`;
}

function add(a: number, b: number, c: number): number {
    return a + b + c;
}

function logMessage(message: string): void {
    console.log(message);
}

console.log(greet("Bob"));
console.log(`Sum: ${add(5, 10, 15)}`);
logMessage("This is a log message.");

// EXPLICIT OBJECTS

interface User {
    id: number;
    name: string;
    email?: string; // Optional property
}

let user: User = {
    id: 1,
    name: "Charlie",
    email: "charlie@example.com"
};

console.log(`User ID: ${user.id}`);
console.log(`User Name: ${user.name}`);
console.log(`User Email: ${user.email}`);