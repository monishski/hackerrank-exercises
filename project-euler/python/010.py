#!/bin/python3
import sys
import math

def sieve_of_eratosthenes(n):

    bool_arr = [True]*n
    bool_arr[0] = False

    for i in range(2, int(math.sqrt(n))+1):
        if bool_arr[i-1]:
            bool_arr[i*i-1::i] = [False] * len(bool_arr[i*i-1::i])

    sum_arr = [0]
    for index in range(1, len(bool_arr)):
        sum_arr.append(sum_arr[index-1] + ((index + 1) if bool_arr[index] else 0))
    return sum_arr

arr = sieve_of_eratosthenes(1000000)

num_inputs = int(input().strip())
for _ in range(num_inputs):
    n = int(input().strip())
    print(arr[n-1])