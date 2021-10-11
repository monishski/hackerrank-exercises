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

const __lonelyInteger = (arr) => {
  let count = {}
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] = (!!count[arr[i]] ? count[arr[i]] : 0) + 1
  }
  return parseInt(Object.keys(count).find(key => count[key] === 1))
}

const _lonelyInteger = (arr) => {
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    result = result ^ arr[i]    
  }
  return result
}

const lonelyInteger = arr => arr.reduce((a, b) => a ^ b, 0)

function main(input) {
  const inputArrString = input.split('\n')[1]
  const inputArr = inputArrString.split(' ').map(elem => parseInt(elem))
  console.log(lonelyInteger(inputArr))
}
