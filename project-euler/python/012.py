# This passes the first 4 cases but timesout otherwise...?
# This implementation replicates what I have done in JS

#!/bin/python3
import sys
from functools import reduce

def triangular_n(n):
    return int(n*(n+1)/2)

def prime_factorisation(n):
    if n == 1:
        return { 1: 0 }
    prime_factors = {}
    while n%2 == 0:
        prime_factors[2] = prime_factors.get(2, 0) + 1
        n/=2
    for i in range(3, int(n**0.5)+1, 2):
        while (n%i == 0 and n != i):
            prime_factors[i] = prime_factors.get(i, 0) + 1
            n = n / i
    if n > 1:
        prime_factors[n] = prime_factors.get(n, 0) + 1
    return prime_factors

def highly_divisible_triangular_n(n):
    num_divisors = 0
    index = 0
    while num_divisors < (n+1):
        index+=1
        prime_factors = prime_factorisation(triangular_n(index))
        num_divisors = reduce(lambda x, y: x*(y+1), prime_factors.values(), 1)
        # print(index, triangular_n(index), prime_factors, list(prime_factors.values()), num_divisors)
    return triangular_n(index)

num_inputs = int(input().strip())
for _ in range(num_inputs):
    n = int(input().strip())
    print(highly_divisible_triangular_n(n))