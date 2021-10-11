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

function fnIsPrime(n) {
    if (n === 0 || n === 1 || (n % 2 === 0 && n !== 2)) { 
        return false 
    }
    for (let i = 3; i < Math.ceil(Math.sqrt(n)) + 1; i++) {
        if (n % i === 0) { return false }
    }
    return true
}

function nthPrime(n) {
    let i = 0
    while (n !== 0) {
        i++
        if (isPrime(i)) {
            n--
        }   
    }
    return i
}

// The code above works for 4/5 cases... I dont see anything majorly different from that below...
function nthPrimeFactor(n) {
    let primes = [2]
    for (i = 3; primes.length < n; i += 2) {
        let isPrime = true
        for (let j = 3; j <= Math.ceil(Math.sqrt(i))+1; j += 2) {
            if (i%j === 0 && i !== j) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            primes.push(i)
        }
    }
    return primes[primes.length-1]
}

function main(input) {

    const inputArray = input
        .split('\n')
        .filter(elem => elem !== '')
        .map(curr => parseInt(curr) )
    const numInputs = inputArray[0];

    for(var i = 1; i < numInputs+1; i++) {
        console.log(nthPrimeFactor(inputArray[i]))
    }

}
