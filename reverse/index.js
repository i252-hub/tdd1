function reverse(str){
return str.split('').reverse().join('');
}

module.exports = reverse;

const originalString = "Hello, World!";
const reversedString = reverse(originalString);
console.log(reversedString);