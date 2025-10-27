class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age
    }
}

const myPerson = new Person("Hazmin", 25);
const anotherPerson = new Person("Alice", 30);

console.log("My name is " + myPerson.getName() + " and I am " + myPerson.getAge() + " years old.");
console.log("My name is " + anotherPerson.getName() + " and I am " + anotherPerson.getAge() + " years old.");