const readline = require('readline')
const BigNumber = require('bignumber.js');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
rl.prompt();

let input = '' 

rl.on('line', (inputLine) => {
    input+=(inputLine+'\n');
})

rl.on('close', () => {
    main(input);
    process.exit(0);
})

const powerDigitSum = n => {
    // return BigInt(Math.pow(2, n))
    return new BigNumber(2).exponentiatedBy(n)
        .toFixed()
        .split('')
        .reduce((acc, val) => acc+parseInt(val), 0)
}

const main = input => {
    
    const inputArray = input
        .split('\n')
        .filter(elem => elem !== '')
        .map(curr => parseInt(curr))
    const numInputs = inputArray[0];
    
    for (let index = 1; index < numInputs + 1; index++) {
        console.log(powerDigitSum(inputArray[index]))
    }
} 


