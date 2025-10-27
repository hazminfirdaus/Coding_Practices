var _a;
// Boolean type
var isActive = true;
var hasPermission = false;
console.log("Is Active: ".concat(isActive));
console.log("Has Permission: ".concat(hasPermission));
// Number type
var decimal = 42;
var hex = 0x2A;
var binary = 42;
var octal = 42;
console.log("Decimal: ".concat(decimal));
console.log("Hexadecimal: ".concat(hex));
console.log("Binary: ".concat(binary));
console.log("Octal: ".concat(octal));
// String type
var firstName = "John";
var lastName = "Doe";
var fullName = "".concat(firstName, " ").concat(lastName);
var age = 30;
var color = "green";
console.log("My name is ".concat(fullName, " and I'll be ").concat(age + 1, " years old next year. My favorite color is ").concat(color, "."));
// BigInt type
var bigIntValue = 9007199254741991n;
var hugeNumber = BigInt(123456789012345678901234567890);
console.log("BigInt Value: ".concat(bigIntValue));
console.log("Huge Number: ".concat(hugeNumber));
// Symbol type
var uniqueKey = Symbol("uniqueIdentifier");
var obj = (_a = {},
    _a[uniqueKey] = "This is a unique property",
    _a);
console.log(obj[uniqueKey]);
console.log("Symbol Key Description: ".concat(uniqueKey.description));
