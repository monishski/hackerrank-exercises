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

// I dont need this!
function isPrime(N) {
    if (N==0 || N==1) { return false }
    if (N==2) { return true }
    if (N%2==0) { return false } 
    for (let i = 3; i < Math.ceil(Math.sqrt(N))+1; i=i+2) {
        if (N%i==0) { return false }            
    }
    return true    
}

function largestPrimeFactor(N) {

    let temp = N //I think you need temp because of the square root below?
    while (temp%2 === 0) {
        if (temp === 2) { break } //exit before we get to 1
        temp = temp/2
    }
    
    for (let i = 3; i < Math.ceil(Math.sqrt(N))+1; i=i+2) {
        while (temp%i === 0) {
            if (temp === i) { break } //exit before we get to 1 
            temp = temp / i
        } 
    }

    return temp
}

function main(input) {

    const inputArray = input
        .split('\n')
        .filter(elem => elem !== '')
        .map(curr => parseInt(curr) )
    const numInputs = inputArray[0];

    for(var i = 1; i < numInputs+1; i++) {
        console.log(largestPrimeFactor(inputArray[i]))
    }

}
