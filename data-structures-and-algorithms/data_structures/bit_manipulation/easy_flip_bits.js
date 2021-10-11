const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout
});
rl.prompt();

let input = '' 

rl.on('line', (inputLine) => {
  input+=(inputLine+'\n');
})

rl.on('close', () => {
  main(input);
  process.exit(0);
})


// O(bits)
const denary2binary = (n, bits) => {
  //The .toString() method is find but it wont give you it in the bit representation that you want
  //https://stackoverflow.com/questions/16132905/string-conversion-in-javascript-decimal-to-binary
  let bin = ""
  while (bits > 0) {
    // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-3.php
    bin = (n & 1).toString() + bin // n & 1 is the remainder
    n = n >> 1 
    bits--
  }
  return bin
}
// The above would convert denary to binary, flip the binary and then conver the binary to denary

// O(1)
const _flipBits = n => ~n>>>0

// Alternative is (1 XOR x) = inverse:
const flipBits = n => 1 ^ n


function main(input) {
  const inputArray = input.split('\n').map(elem => parseInt(elem))
  for (let i = 1; i < inputArray.length-1; i++) {
    console.log(flipBits(inputArray[i]));  
  }
}
