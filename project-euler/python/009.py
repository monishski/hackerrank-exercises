#!/bin/python3
import sys

def is_int(n):
    return n == int(n)

def pythagoreon_triplet(n):
    prod = - 1
    if n%2 == 0:
        for a in range(1, int(n/3)+1):
            b = (n*n - 2*n*a)/(2*n - 2*a)
            c = n - a - b
            if is_int(b) and a*a + b*b == c*c:
                prod = max(prod, int(a*b*c))
    return prod

num_inputs = int(input().strip())
for _ in range(num_inputs):
    n = int(input().strip())
    print(pythagoreon_triplet(n))