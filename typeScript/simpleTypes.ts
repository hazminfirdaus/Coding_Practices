// Boolean type
let isActive: boolean = true;
let hasPermission: boolean = false;

console.log(`Is Active: ${isActive}`);
console.log(`Has Permission: ${hasPermission}`);

// Number type
let decimal: number = 42;
let hex: number = 0x2A;
let binary: number = 0b101010;
let octal: number = 0o52;

console.log(`Decimal: ${decimal}`);
console.log(`Hexadecimal: ${hex}`);
console.log(`Binary: ${binary}`);
console.log(`Octal: ${octal}`);

// String type
let firstName: string = "John";
let lastName: string = "Doe";
let fullName: string = `${firstName} ${lastName}`;
let age: number = 30;
let color: string = "green";

console.log(`My name is ${fullName} and I'll be ${age + 1} years old next year. My favorite color is ${color}.`);

// BigInt type
let bigIntValue: bigint = 9007199254741991n;
let hugeNumber: bigint = BigInt(123456789012345678901234567890);
console.log(`BigInt Value: ${bigIntValue}`);
console.log(`Huge Number: ${hugeNumber}`);

// Symbol type
const uniqueKey: symbol = Symbol("uniqueIdentifier");
const obj = {
    [uniqueKey]: "This is a unique property"
}
console.log(obj[uniqueKey]);
console.log(`Symbol Key Description: ${uniqueKey.description}`);