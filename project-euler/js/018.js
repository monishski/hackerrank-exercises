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

const addValue = (n, arr) => arr.map(elem => elem + n)

const maxPathSum = tree => {
    const sumTree = [[tree[0]]]
    for (let row = 1; row < tree.length; row++) {
        const sumTreeTemp = []
        const currTreeRow = tree[row]
        const prevSumTreeRow = sumTree[row-1]
        sumTreeTemp.push(addValue(currTreeRow[0], prevSumTreeRow[0])) //value + array
        for (let col = 1; col < row; col++) {
            const left = addValue(currTreeRow[col], prevSumTreeRow[col-1]) 
            const right = addValue(currTreeRow[col], prevSumTreeRow[col])
            sumTreeTemp.push([...left, ...right])
        }
        sumTreeTemp.push(addValue(currTreeRow[currTreeRow.length-1], prevSumTreeRow[prevSumTreeRow.length-1]))
        sumTree.push(sumTreeTemp)
    }
    let flat = [].concat(...[].concat(...sumTree)) //We have an array of an array of an arry (e.g. [ [[3]], [[10], [7]], [[12], [14,11], [13]], [[20], [17,19,16], [23, 20, 22], [16]] ] )
    return Math.max(...flat)
}

// The trick to this problem is to solve bottom to top, not top to bottom! (see discussion?)
const maxPathSumDP = tree => {
    let row = tree.length - 2
    while (row >= 0) {
        for (let col = 0; col < tree[row].length; col++) {
            tree[row][col] += Math.max(tree[row+1][col], tree[row+1][col+1])
        }
        row--
    }
    return tree[0][0]
}

const main = input => {
    
    const inputArray = input
        .split('\n')
        .filter(elem => elem !== '')
        .map(curr => curr
            .split(' ')
            .map(val => parseInt(val)))
    let numTestCases = inputArray[0][0];
    inputArray.shift()
    
    let numRows = inputArray[0][0]; //This was a pain to put together why does Node input suck?
    while (numTestCases > 0) {
        inputArray.shift()
        const tree = inputArray.slice(0, numRows)
        console.log(maxPathSum(tree))
        inputArray.splice(0, numRows)
        if (inputArray.length !== 0) {
            numRows = inputArray[0][0]
        }
        numTestCases--
    }
}    
