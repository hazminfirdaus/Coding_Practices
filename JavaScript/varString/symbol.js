const crypticKey1 = Symbol('crypticKey1');
const crypticKey2 = Symbol('crypticKey2');

console.log(crypticKey1 === crypticKey2); // false

const object = {
  [crypticKey1]: 'value1',
  [crypticKey2]: 'value2'
};

console.log(object[crypticKey1]); // 'value1'
console.log(object[crypticKey2]); // 'value2'

for (const key in object) {
  console.log(key); // No output, symbols are not enumerable
}

console.log(Object.keys(object));