#!/bin/python3

import math
import os
import random
import re
import sys

#My solution works fine for small cases but it times out for large arrays.
#It is also super complicated.

# def is_prime(n):
#     if n==2 or n==3: return True
#     if n%2==0 or n<2: return False
#     for i in range(3, int(n**0.5)+1, 2):
#         if n%i==0: return False
#     return True
#
# def maxSubsetSum(arr):
#
#     primes = list(filter(is_prime, range(1, len(arr)))) #if you make the filter into a list it can behave weirdly
#     max_nonadj_sum = float("-inf")
#
#     for counter in range(int(math.ceil(len(arr)**0.5))):
#         for prime in primes:
#             sub_arr = arr[counter::prime]
#             k = 2
#             # print(prime, sub_arr)
#             for i in range(len(sub_arr)):
#                 for j in range(i+1, len(sub_arr)):
#                     # print(sub_arr[i:j+1])
#                     max_nonadj_sum = max(max_nonadj_sum, sum(sub_arr[i:j+1]))
#                 while k<len(sub_arr):
#                     # print(sub_arr[i::k])
#                     max_nonadj_sum = max(max_nonadj_sum, sum(sub_arr[i::k]))
#                     k=k+1
#    return max_nonadj_sum

# A simpler solution looks at storing a recurring maximum sum in the previous index?

def maxSubsetSum(arr):
    sums = [0]*len(arr)
    sums[0], sums[1] = arr[0], max(arr[0], arr[1])
    #Max at position 0: value at 0
    #Max at position 1: either value at 0 or value 1

    for i in range(2, n):
        sums[i] = max(sums[i-1], sums[i-2]+sums[i], sums[i])
    #The max possible value at the current position can only be 3 things:
    # 1. the current element + the max value from the 2 position ago
    # 2. the last max value (imagine the first value in the array was negative, and the second value positive and the current value is 0)
    # 3. the current element (the max value from 2 positions ago could have been negative)

    return sums[-1]


if __name__ == '__main__':

    n = int(raw_input())
    arr = list(map(int, raw_input().rstrip().split()))

    res = maxSubsetSum(arr)
    print(res)
