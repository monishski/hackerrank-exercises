#!/bin/python3
import sys
from functools import reduce

def large_sum(arr):
    return str(reduce(lambda sum, val: sum + val, arr, 0))[:10]

arr_inputs = []
num_inputs = int(input().strip())
for _ in range(num_inputs):
    n = int(input().strip())
    arr_inputs.append(n)

print(large_sum(arr_inputs))