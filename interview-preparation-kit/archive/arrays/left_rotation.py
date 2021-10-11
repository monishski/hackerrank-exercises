#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the rotLeft function below.
def rotLeft(a, d):
    arr = a[d:]
    arr.extend(a[:d])
    return arr

if __name__ == '__main__':

    nd = input().split()
    n = int(nd[0])
    d = int(nd[1])

    arr = list(map(int, input().rstrip().split()))

    result = rotLeft(arr, d)

    print(' '.join(map(str, result)))
