#!/bin/python3
import sys

def fn_prime_factors(n):
    # https://stackoverflow.com/questions/15347174/python-finding-prime-factors
    temp = n
    prime_factors = {}
    i = 2
    while i * i <= n:
        if temp%i: #when not equal to 0
            i += 1 
        else:
            temp//=i
            if not prime_factors.get(i): 
                prime_factors[i] = 1 
            else:
                prime_factors[i] += 1
    if temp > 1:
        prime_factors[temp] = 1
    return prime_factors

def smallest_multiple(n):

    smallest_multiple_factors = {}
    for i in range(2, n+1):
        prime_factors = fn_prime_factors(i)
        for key, value in prime_factors.items():
            num_multiples = smallest_multiple_factors.get(key) or 0
            if (value > num_multiples):
                smallest_multiple_factors[key] = max(num_multiples, value)

    product = 1
    for key, value in smallest_multiple_factors.items():
        product *= key**value
    return product

num_inputs = int(input().strip())
for _ in range(num_inputs):
    n = int(input().strip())
    print(smallest_multiple(n))