//This file is not in the same format as Hackerrank... 
//It reads a filename 011.txt from the local directory (with test case)...
var fs = require('fs')

function horizontalProd(grid, row, col) {
    return grid[row][col] * grid[row][col+1] * grid[row][col+2] * grid[row][col+3]
}

function verticalProd(grid, row, col) {
    return grid[row][col] * grid[row+1][col] * grid[row+2][col] * grid[row+3][col]
}

function rightDiagonalProd(grid, row, col) {
    return grid[row][col] * grid[row+1][col+1] * grid[row+2][col+2] * grid[row+3][col+3]
}

function leftDiagonalProd(grid, row, col) {
    return grid[row][col] * grid[row+1][col-1] * grid[row+2][col-2] * grid[row+3][col-3]
}

function largestGridProd(grid) {

    let largestProd = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid.length; col++) {
            let horiProd = 0
            let vertProd = 0
            let rightDiagProd = 0
            let leftDiagProd = 0

            if (col <= grid.length - 4) { //this is known as boundary checking
                horiProd = horizontalProd(grid, row, col);
            }

            if (row <= grid.length - 4) {
                vertProd = verticalProd(grid, row, col)
            }

            if (row <= grid.length - 4 && col <= grid.length - 4) {
                rightDiagProd = rightDiagonalProd(grid, row, col)
            }
            
            if (row <= grid.length - 4 && col >= 4 - 1) {
                leftDiagProd = leftDiagonalProd(grid, row, col)
            } 

            largestProd = Math.max(
                horiProd, 
                vertProd,
                leftDiagProd,
                rightDiagProd,
                largestProd)
        }
    }
    return largestProd
}

// By adding 3 columns at the beginning & end and 3 rows at the end, you dont need any boundary checks
function largestGridProdNoBoundary(grid) {
    let largestProd = 0
    //note the num. of cols was expanded to 26 (hence the subtraction & adjustment to starting point)
    //note the num. of rows was expanded to 23 
    for (let row = 0; row < grid.length - 3; row++) { 
        for (let col = 3; col < grid[0].length - 3; col++) { 
            largestProd = Math.max(
                horizontalProd(grid, row, col), 
                verticalProd(grid, row, col),
                leftDiagonalProd(grid, row, col),
                rightDiagonalProd(grid, row, col),
                largestProd)
        }
    }
    return largestProd
}
    
function main() {
    let arr =  fs.readFileSync('011.txt', 'utf8')      
        .split('\r\n')
        .map(elem => { //remember map returns a new array
            return elem
                .split(' ')
                .filter(value => value !== '')
                .map(value => parseInt(value))
        }) 
        .map(subArray => { //subArray.unshift(...).push(...) will not work because subArray.unshift() is a inline method?
            subArray.unshift(...[0, 0, 0]) 
            subArray.push(...[0, 0, 0]) 
            return subArray
        })
        
    let zeroRow = Array(arr[0].length).fill(0) 
    arr.push(zeroRow, zeroRow, zeroRow)

    console.log(largestGridProdNoBoundary(arr))
}

main()