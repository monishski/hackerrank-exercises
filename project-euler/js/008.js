const { parse } = require('path');
const readline = require('readline')

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

function largestProdSeries(numDigits, numDigitsProd, n) {
    let largestProd = 0
    const array = n.toString().split('').map(elem => parseInt(elem))
    for (let i = 0; i < numDigits - numDigitsProd + 1; i++) {
        let tempProd = 1
        for (let j = 0; j < numDigitsProd; j++) {
            tempProd *= array[i+j]            
        }
        largestProd = Math.max(largestProd, tempProd)
    }
    return largestProd
}

function main(input) {

    const inputArray = input
        .split('\n')
        .filter(elem => elem !== '')
        .map(elem => elem.split(' ')
            .map(elem => parseInt(elem)))

    const numInputs = inputArray[0][0];

    for(var i = 1; i < numInputs+1; i+=2) {
        console.log(largestProdSeries(inputArray[i][0], inputArray[i][1], inputArray[i+1][0]))
    }

}
