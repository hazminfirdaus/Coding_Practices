// let num = 25; // Number data type
// let str = "Hello, World!";
// let bool = true; // Boolean data type
// let arr = [1, 2, 3, 4, 5];
// let obj = { name: "Alice", age: 30 }; // Object data type
// let und; // Undefined data type
// let nul = null; // Null data type

// console.log("Number:", num);
// console.log("String:", str);
// console.log("Boolean:", bool);
// console.log("Array:", arr);
// console.log("Object:", obj);
// console.log("Undefined:", und);
// console.log("Null:", nul);  

// console.log("Type of null:", typeof nul); // Outputs: object (this is a known quirk in JavaScript)

let pet = {
    name: "Buddy",
    type: "Cat",
    age: 5,
    isVaccinated: true,
    favoriteFoods: ["fish", "chicken", "tuna"],
    owner: {
        name: "John",
        contact: "john@example.com"
    }
}

console.log("I have a pet named " + pet.name + ". It is a " + pet.type + " and is " + pet.age + " years old.");
console.log("Is my pet vaccinated? " + pet.isVaccinated);
console.log("My pet's favorite foods are: " + pet.favoriteFoods.join(", ") + ".");
console.log("My pet's owner is " + pet.owner.name + ". You can contact them at " + pet.owner.contact + ".");

let num = [10, 20, 30, 40, 50];

console.log("The array of numbers is: " + num.join(", ") + ".");

const veryBigNumber = 1234567890123456789012345678901234567890n; // BigInt data type