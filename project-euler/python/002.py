#!/bin/python3
import sys

def fib_even_sum(n):
    sum = 0
    prev = 0
    curr = 1
    while curr<n:
        if curr%2==0:
            sum+=curr
        temp_prev = curr
        curr = prev + curr
        prev = temp_prev
    return sum
        
num_inputs = int(input().strip())
for _ in range(num_inputs):
    n = int(input().strip())
    print(fib_even_sum(n))
