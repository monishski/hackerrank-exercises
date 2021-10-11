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

// Time Complexity O(n^2)
const maximisingXor = (l, r) => {
  let max = 0;
  for (let i = l; i <= r; i++) {
    for (let j = i; j <= r; j++) {
      max = Math.max(max, i ^ j)
    }    
  }
  return max
}

function main(input) {
  const [l, r] = input.split('\n').map(elem => parseInt(elem))
  console.log(maximisingXor(l, r))
}
