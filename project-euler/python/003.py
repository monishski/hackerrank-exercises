#!/bin/python3
import sys
import math

def largest_prime_factor(n):
    temp = n
    while temp%2==0:
        if temp == 2: break
        temp=temp//2
    
    for i in range(3, math.ceil(math.sqrt(n))+1, 2):
        while temp%i==0:
            if temp==i: break
            temp=temp//i
    return temp        


num_inputs = int(input().strip())
for _ in range(num_inputs):
    n = int(input().strip())
    print(largest_prime_factor(n))