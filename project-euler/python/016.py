#!/bin/python3
import sys
from functools import reduce

def power_digit_sum(n):
    return reduce(lambda x, y: x +y, map(int, list(str(2**n))))

num_inputs = int(input().strip())
for _ in range(num_inputs):
    n = int(input().strip())
    print(power_digit_sum(n))