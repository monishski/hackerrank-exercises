#This file is not in the same format as Hackerrank... 
#It reads a filename 011.txt from the local directory (with test case)...

from functools import reduce

func = lambda x: x not in ['', '\n']
file = open('011.txt').readlines()
arr = [list(map(int, filter(func, i.split(' ')))) for i in file]

for row_index in range(len(arr)):
    arr[row_index] = [0, 0, 0] + arr[row_index] + [0, 0, 0]

zero_row = [[0]*len(arr[0])]*3
arr.extend(zero_row)

def horizontal_prod(grid, row, col):
    # return grid[row][col] * grid[row][col+1] * grid[row][col+2] * grid[row][col+3]
    return reduce(lambda x, y: x*y, grid[row][col:col+4]) 

def vertical_prod(grid, row, col):
    # print(grid[row:row+4][col]) #slicing of columns in 2d arr is not straight forward
    col_tuples = list(zip(*grid))
    return reduce(lambda x, y: x*y, col_tuples[col][row:row+4])

def right_diagonal_prod(grid, row, col):
    return grid[row][col] * grid[row+1][col+1] * grid[row+2][col+2] * grid[row+3][col+3]

def left_diagonal_prod(grid, row, col):
    return grid[row][col] * grid[row+1][col-1] * grid[row+2][col-2] * grid[row+3][col-3]

def largest_prod_grid(grid):
    largest_prod = 0
    for row in range(len(grid) - 3):
        for col in range(3, len(grid[0]) - 3):
            largest_prod = max(
                largest_prod,
                horizontal_prod(grid, row, col),
                vertical_prod(grid, row, col),
                right_diagonal_prod(grid, row, col),
                left_diagonal_prod(grid, row, col)
            )
    return largest_prod

print(largest_prod_grid(arr))
