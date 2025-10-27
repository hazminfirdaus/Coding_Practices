const prompt = require('prompt-sync')();

let userName = prompt("What is your name? ", "Guest");
console.log("Hello, " + userName + "!");

let age = prompt("How old are you? ");
if (age !== null) {
  console.log("You are " + age + " years old.");
} else {
  console.log("User canceled the prompt.");
}