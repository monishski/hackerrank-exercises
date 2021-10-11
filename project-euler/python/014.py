# Again I was not able to make this work for most cases...
#!/bin/python3
import sys
# This is taken directly from the discussions... 

def collatz_odd(n):
    return (n << 1) + (n << 0) + 1 #equivalent to 3n + 1

def collatz_even(n):
    return n >> 1 #equivalent to n/2

def longest_collatz_seq(n):
    if n < cache_limit and cache_collatz[n-1] != 0:
        return cache_collatz[n-1]
    else:
        steps = 0
        if n & 1: #equivalent to n%2 == 1
            # steps = 1 + longest_collatz_seq(3*n + 1)
            steps = 1 + longest_collatz_seq(collatz_odd(n))
        else:
            # steps = 1 + longest_collatz_seq(n >> 1)
            steps = 1 + longest_collatz_seq(collatz_even(n))
        if n < cache_limit:
            cache_collatz[n-1] = steps
        return steps

inputs = [int(input()) for _ in range(int(input()))]

cache_limit = max(inputs) #I thought this would speed it up instead of having all the way up to 5e6
cache_collatz = [0] * cache_limit
cache_collatz[0] = 1

results = [] #this is absolutely key... searching for index is expensive
index = 0
longest_n = 0
for i in range(1, cache_limit+1):
    if longest_collatz_seq(i) >= longest_n:
        longest_n = longest_collatz_seq(i)
        index = i
    results.append(index)
    
# print(cache_collatz)
# print(results)
    
for n in inputs:
    # arr_inverse = cache_collatz[:n][::-1]
    # print(n - arr_inverse.index(max(arr_inverse)))
    # print(n)
    print(results[n-1])
