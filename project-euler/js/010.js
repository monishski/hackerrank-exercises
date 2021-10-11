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

function summationOfPrimes(n) {
    primes = [2]
    for (let i = 3; i <= n; i+=2) {
        let isPrime = true
        for (let j = 3; j <= Math.ceil(Math.sqrt(i)) + 1; j+=2) {
            if (i % j === 0 && i !== j) {
                isPrime = false
                break
            }            
        }
        if (isPrime) {
            primes.push(i)
        }
    }
    return primes.reduce((sum, val) => sum + val, 0)
}


function sieveOfEratosthenes(n) {
    // Pseudocode: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
    let array = new Array(n).fill(true)
    array[0] = false

    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i+=1) {
        if (array[i-1]) {
            for (let j = i**2; j <= n; j = j + i) {
                array[j-1] = false                
            }
        }
    }
    
    let arr = [] //cumulative sum array
    array.reduce((sum, value, index) => { return arr[index] = sum + (value ? (index + 1) : 0) }, 0)
    return arr
}

function main(input) {

    const inputArray = input
        .split('\n')
        .filter(elem => elem !== '')
        .map(curr => parseInt(curr) )
    const numInputs = inputArray[0];

    //Only compute the sieve once, the maximum input for N is 10^6
    const sieveArray = sieveOfEratosthenes(1000000) 
    
    for(var i = 1; i < numInputs+1; i++) {
        console.log(sieveArray[inputArray[i]-1])
    }

}
