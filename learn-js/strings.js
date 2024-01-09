let text = `
the quick brown fox
jumps over the 
lazy dog.
`;
console.log(text);

let text2 = "Apple, Banana, Kiwi";
let part = text2.slice(7, 13);
let part2 = text2.slice(-12, -6);
let part3 = text2.substr(7, 6);
console.log(part);
console.log(part2);
console.log(part3);

let text1 = "hello world";
let text3 = text1.toUpperCase();
console.log(text3);

let t1 = "            Hello World!                    ";
let t2 = t1.trim();
console.log(t1);
console.log(t2);

let aText = "5";
let padded = aText.padStart(4, "x");
let padded2 = aText.padEnd(4, "x");
console.log(padded);
console.log(padded2);

let repeated = text1.repeat(5);
console.log(repeated);

let textText = "Please visit China!";
let tt2 = textText.replace("China", "ur mom lol");
console.log(tt2);
