#!/bin/python3
import sys
from functools import reduce

def largest_prod_series(n_digits, n_digits_prod, n):
    largest_prod = 0
    arr = list(map(int, list(str(n))))
    for i in range(n_digits - n_digits_prod + 1):
        sub_arr = arr[i:i+n_digits_prod]
        temp_prod = reduce((lambda x, y: x*y), sub_arr)
        largest_prod = max(largest_prod, temp_prod)
    return largest_prod

num_inputs = int(input().strip())
for _ in range(num_inputs):
    n_digits, n_digits_prod = map(int, input().strip().split(' '))
    n = input().strip()
    print(largest_prod_series(n_digits, n_digits_prod, n))