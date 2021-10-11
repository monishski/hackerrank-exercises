#!/bin/python3
import sys

#This works for 3/5 cases (not sure why it doesnt work for test cases 3 and 5)
def nth_prime(n): 
    #this is the same implementation as that in JS with the is_prime check with in the loop
    primes = [2]
    i = 3
    while len(primes) < n:
        is_prime = True
        j = 3
        while j <= int(i**0.5)+1:
            if i % j == 0 and i != j:
                is_prime = False
                break
            j += 2
        if is_prime:
            primes.append(i)        
        i += 2
    return primes[-1]

num_inputs = int(input().strip())
for _ in range(num_inputs):
    n = int(input().strip())
    print(nth_prime(n))