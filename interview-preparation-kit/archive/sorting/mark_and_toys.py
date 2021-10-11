import math
import os
import random
import re
import sys

# Complete the maximumToys function below.
def maximumToys(prices, k):

        affordable_prices = list(filter(lambda x: x<=k, prices))
        affordable_prices = sorted(affordable_prices) #this is hard coded? Surely you can order?

        spend = 0
        num_toys = 0
        print(affordable_prices)
        for i in affordable_prices:
            spend+=i
            if spend<=k: num_toys+=1
            else: break

        return num_toys


if __name__ == '__main__':

    nk = input().split()
    n = int(nk[0])
    k = int(nk[1])

    prices = list(map(int, input().rstrip().split()))
    result = maximumToys(prices, k)

    print(str(result) + '\n')
