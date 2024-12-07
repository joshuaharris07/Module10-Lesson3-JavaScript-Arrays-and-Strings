let fruits = ['apple', 'banana', 'orange'];
console.log(fruits);
fruits.push('pear');

console.log(fruits);

console.log(`Removing ${fruits.pop()}`);
console.log(fruits);

let numbers = [3, 1, 5, 2, 4];

numbers.sort()
console.log(numbers)

let doubled = numbers.map(num => num * 2);
console.log(doubled);

let oddNumbers = numbers.filter(num => num % 2 == 1);
console.log(oddNumbers);

let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum = ${sum}`);


let message = "Hello, World!";
console.log(`Length is ${message.length}`);
console.log(message.toLowerCase());
console.log(message.toUpperCase());

let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.substring(4, 19));
console.log(sentence.split(" "));