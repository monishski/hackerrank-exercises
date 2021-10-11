#!/bin/python3
import sys

def is_palidrome(n):
    string_num = str(n)
    return string_num == string_num[::-1]

def largest_palindrome(n): #Note this implementation is not the same as JS...
    largest = 0
    for i in range(999, 99, -1): #Note 0 is upper limit
        for j in range(999, i-1, -1):
            prod = i*j
            if prod > n: continue
            if prod < largest: break 
            if is_palidrome(prod) and prod<n:
                largest = prod
    return largest                

num_inputs = int(input().strip())
for _ in range(num_inputs):
    n = int(input().strip())
    print(largest_palindrome(n))