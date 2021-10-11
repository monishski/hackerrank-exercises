const readline = require('readline');

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

// The solution for this specific question is based on one of the discussions comments
// There is 'divisor function' that calculates the sum of divisors O(1) as long as a we have all the primes (for which its recommended that you use sieve).
// https://en.wikipedia.org/wiki/Divisor_function
// Since N <= 10e5... at max we only need to compute primes up to 10e5
// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

const sieveOfEratosthenes = n => {
    const primes = new Array(n).fill(true)
    primes[0] = false
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (primes[i-1]) {
            for (let j = i * i; j <= n; j = j + i) {
                primes[j-1] = false                
            }
        }        
    }
    return primes
}

const primesBool = sieveOfEratosthenes(120000) //the largest input will be 10,000 (this should be fairly fast)
// const primes = primesBool.reduce((arr, val, index) => val ? arr.concat(index + 1) : arr, []) //I got a suspicion this is really slow

const sumOfProperDivisors = n => {
    if (primesBool[n-1]) {
        return 1;
    }  

    let temp = n
    let product = 1
    for (let index = 0; index < primesBool.length; index++) {
        if (primesBool[index]) {
            const prime = index + 1
            
            let primeMultiplier = 0
            while (temp%prime === 0) {
                temp /= prime
                primeMultiplier += 1
            } 
    
            product *= ((prime ** (primeMultiplier + 1) - 1) / (prime - 1))
            
            if (prime > n) {
                break
            }
        }
    }
    return product - n
}

const amiacableNum = upperLimit => {
    const sumOfPropDivisors = []
    const amiacableN = []
    for (let i = 1; i < upperLimit*1.1; i++) {
        sumOfPropDivisors.push(sumOfProperDivisors(i))
        const sumOfPropDivisorsOfSum = sumOfPropDivisors[sumOfProperDivisors(i)-1]
        if (i === sumOfPropDivisorsOfSum && i !== sumOfProperDivisors(i)) {
            amiacableN.push(i, sumOfProperDivisors(i))
        }
    }
    amiacableN.sort()
    // console.log(amiacableN)
    return amiacableN.reduce((sum, val) => sum + (val < upperLimit ? val : 0), 0)
}

// That's all neat but it doesnt work, its too slow...
// There is a sieve for sum of divisors, which follows along the same steps as the original primes sieve
// See: https://blog.dreamshire.com/solutions/project_euler/project-euler-problem-021-solution/
// Alsl: https://codeforces.com/blog/entry/22229

const sieveSumOfDivisors = upperLimit => {
    const arr = new Int32Array(1.2*upperLimit).fill(1) //this problem is confusing because you need to compute both pairs and 1 of the pairs might sit outside the upper limit
    for (let i = 2; i <= 1.2*upperLimit; i++) {
        for (let j = i * 2; j <= 1.2*upperLimit; j = j + i) {
            arr[j-1] += i               
        }        
    }
    return arr
}
const sumOfPropDivisors = sieveSumOfDivisors(100000)

const amiacablePairsSum = upperLimit => {
    const amiacableN = []
    
    for (let i = 1; i < upperLimit; i++) {
        if (i === sumOfPropDivisors[sumOfPropDivisors[i-1]-1] 
            && i !== sumOfPropDivisors[i-1]) {
            amiacableN.push(i)
        }   
    }
    amiacableN.sort()
    return amiacableN.reduce((sum, val) => sum + (val < upperLimit ? val : 0), 0)
}

const processData = input => {
    
    const inputArray = input
        .split('\n')
        .filter(elem => elem !== '')
        .map(val => parseInt(val))

    let numTestCases = inputArray[0]

    for (let index = 1; index < numTestCases + 1; index++) {
        console.log(amiacablePairsSum(inputArray[index]))
    }
}    
