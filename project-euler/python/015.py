#!/bin/python3
import sys

# So this works in most cases in Python but times out for others
def num_lattice_paths(rows, cols): 
    # grid = [[0]*(cols+1)]*(rows+1) //this is neat but doesnt work because of deep copying...
    grid = [[0]*(cols+1) for _ in range(rows+1)]
    for row in range(rows+1):
        grid[row][0] = 1
    for col in range(cols+1):
        grid[0][col] = 1
    for row in range(1, rows+1):
        for col in range(1, cols+1):
            grid[row][col] = grid[row-1][col] + grid[row][col-1]
    return grid[rows][cols]

#Combinatorics (this worked fine)
def factorial(n):
    while (n > 1):
        return n * factorial(n - 1)
    return 1

def num_lattice_paths_combinatorics(rows, cols):
    return (factorial(rows + cols)//(factorial(rows)*factorial(cols))) % 1000000007


num_inputs = int(input().strip())
for _ in range(num_inputs):
    rows, cols = map(int, input().strip().split(' '))
    # print(num_lattice_paths(rows, cols))
    print(num_lattice_paths_combinatorics(rows, cols))