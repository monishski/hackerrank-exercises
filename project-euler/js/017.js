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

// I dont like defining global variables and using them in functions but yah
const teens = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
const keys = {
    1000000000000: 'Trillion', 
    1000000000: 'Billion', 
    1000000: 'Million',
    1000: 'Thousand',
}

const tensInWords = n => { 
    if (n > 100) {
        throw new Error('Input must be < 100')
    }
    if (n < 20) {
        return teens[n]
    } else if (n >= 20 && n < 100) {
        const space = n%10 === 0 ? '' : ' '
        return tens[Math.floor(n/10)] + space + teens[n%10]
    }
}

const hundredsInWords = n => { //The smallest unit is a hundreth
    if (n > 1000) {
        throw new Error('Input must be < 1000')
    }
    const space = n%100 === 0 ? '' : ' '
    if (n < 100) {
        return tensInWords(n%100)
    }
    return teens[Math.floor(n/100)] + ' Hundred' + space + tensInWords(n%100)
}

const numToWords = n => {
    
    if (n === 0) {
        return 'Zero'
    } else if (n < 1000) {
        return hundredsInWords(n)
    } else {
        const factors = [1000000000000, 1000000000, 1000000, 1000]
        let coeff = {}
        for (let factor = 0; factor < factors.length; factor++) {
            if (n % factors[factor] !== n) { //if factor > n then the modulo doesnt do anything and they will be equal
                let temp = n
                coeff[factors[factor]] = Math.floor(temp/factors[factor])
                n = temp % factors[factor]   
            };
            if (factors[factor] === 1000) { //this needs to live outside the other if statement
                coeff[100] = n //check case 1000010
            }
        }
    
        let factors_ = Object.keys(coeff).reverse(); //this is factors basically
        let numInWords = '';
        factors_.forEach(factor => {
            const space = parseInt(factor) === 100 ? '' : ' '
            const key = parseInt(factor) === 100 ? '' : keys[factor]
            numInWords += hundredsInWords(coeff[factor]) + space + key + space
        })
        return numInWords
    }
}

const main = input => {
    
    const inputArray = input
        .split('\n')
        .filter(elem => elem !== '')
        .map(curr => parseInt(curr))
    const numInputs = inputArray[0];
    
    for (let index = 1; index < numInputs + 1; index++) {
        console.log(numToWords(inputArray[index]))
    }
} 