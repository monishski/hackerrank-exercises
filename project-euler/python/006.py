#!/bin/python3
import sys

def sum_of_square(n):
    return sum(map(lambda x: x*x, range(1, n+1)))

def square_of_sum(n):
    return int(((n*(n+1))/2)**2)

def sum_square_diff(n):
    return abs(square_of_sum(n)-sum_of_square(n))

num_inputs = int(input().strip())
for _ in range(num_inputs):
    n = int(input().strip())
    print(sum_square_diff(n))