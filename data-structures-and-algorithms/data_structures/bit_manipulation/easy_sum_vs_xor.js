const { parse } = require('node:path');
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

const _sumXor = n => { //This is too slow for some super larger numbers
  let count = 0
  for (let i = 0; i < n; i++) {
    if ((BigInt(n) + BigInt(i)) === (BigInt(n) ^ BigInt(i))) {
      count++
    }   
  }
  return count ? count : 1 
}

const denary2binary = n => parseFloat(n, 2).toString(2) 
// Initially I had n >>> 2 to deal with negative numbers but remove that because it doesnt work for very large numbers
// The reason we dont use Number(n).toString(2) is because it doesnt work for negative numbers
// >>> 0 shift by 0 bits to the right
// https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript

// There is a O(nlogn) solution
const sumXor = n => {
  const bin = denary2binary(n) 
  return bin.length === 1 ? 1 : Math.pow(2, bin.match(/0/g).length) //this covers for case of empty array and 0?
}

function main(input) {
  const n = parseInt(input)
  console.log(sumXor(n))
}

1000000000000000