const { parse } = require('path');
const readline = require('readline');
const { isDate } = require('util');

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
rl.prompt();

let input = '' 

rl.on('line', (inputLine) => {
    input+=(inputLine+'\n');
})

rl.on('close', () => {
    processData(input);
    process.exit(0);
})

////////////////////////////////////////////////////////////////////////////

const BigNumber = require('bignumber.js');
BigNumber.config({DECIMAL_PLACES: 0, ROUNDING_MODE: BigNumber.ROUND_FLOOR});

const print = console.log

const memoize = fn => {
    let cache = {}
    return (...args) => { //the REST operatr convers it into an array
        let n = args[0]
        if (n in cache) {
            return cache[n]
        } else {
            let result = fn(n)
            cache[n] = result
            return result
        }
    }
}

const factorial = memoize(n => {
    if (n.isEqualTo(0)) {
        return new BigNumber(1)
    }
    return n.times(factorial(n.minus(1)))
})

// print(factorial(new BigNumber(100)).toFixed())

const factorialDigitSum = n => {
    return factorial(new BigNumber(n))
        .toFixed() //watch out toString() will be wrong!
        .split('')
        .map(val => parseInt(val))
        .reduce((sum, val) => sum+val, 0)
}

const processData = input => {
    
    const inputArray = input
        .split('\n')
        .filter(elem => elem !== '')
        .map(val => parseInt(val))

    let numTestCases = inputArray[0]

    for (let index = 1; index < numTestCases + 1; index++) {
        console.log(factorialDigitSum(inputArray[index]))
    }
}    
