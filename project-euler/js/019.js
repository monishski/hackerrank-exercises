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
// This is exactly the same implement as that on Python but fails with JS

const BigNumber = require('bignumber.js');
BigNumber.config({DECIMAL_PLACES: 0, ROUNDING_MODE: BigNumber.ROUND_FLOOR});

const zellerCongruence = (year, month, day) => {
    //https://en.wikipedia.org/wiki/Zeller%27s_congruence
    let q = new BigNumber(day)
    let m = month <= 2 ? new BigNumber(month + 12) : new BigNumber(month) 
    let Y = (month === 1 || month === 2) ? year.minus(1) : year
    let termB = m.plus(1).times(13).dividedBy(5)
    let termD = Y.dividedBy(4)
    let termE = Y.dividedBy(100)
    let termF = Y.dividedBy(400)
    let h = q.plus(termB).plus(Y).plus(termD).minus(termE).plus(termF).modulo(7)
    return h.toNumber() === 1
}

const numSundays = (date_begin, date_end) => {
    let count = 0
    while (true) {
        if (date_begin[2] === 1) {
            // console.log(year_begin, month_begin)
            if (zellerCongruence(date_begin[0], date_begin[1], date_begin[2])) {
                count++;
            } 
        }
        date_begin[2] = 1
        date_begin[1]++
        if (date_begin[1] > 12) {
            date_begin[1] = 1
            date_begin[0] = date_begin[0].plus(1)
        }
        
        if (isDateOrderValid(date_begin, date_end)) {
            break
        }   
            
    }
    return count
}

const isDateOrderValid = (date_begin, date_end) => {
    if (date_end[0].isLessThan(date_begin[0])) {
        return true
    } else if (date_end[0].isEqualTo(date_begin[0])) {
        if (date_end[1] < date_begin[1]) {
            return true
        } else if (date_end[1] === date_begin[1]) {
            if (date_end[2] < date_begin[2]) {
                return true
            }
        }
    } 
    return false
}

const processData = input => {
    
    const inputArray = input
        .split('\n')
        .filter(elem => elem !== '')

    let numTestCases = parseInt(inputArray[0])

    for (let index = 1; index < inputArray.length; index+=2) {

        let date_begin = inputArray[index]
            .split(' ')
            .map((val, idx) => idx === 0 ? new BigNumber((val)) : parseInt(val)) 
        let date_end = inputArray[index+1]
            .split(' ')
            .map((val, idx) => idx === 0 ? new BigNumber(val) : parseInt(val)) 
        
        if (isDateOrderValid(date_begin, date_end)) {
            [date_begin, date_end] = [date_end, date_begin]
        }

        console.log(numSundays(date_begin, date_end))
    }
}    
