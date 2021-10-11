#!/bin/python3
import sys

def sumMultiplesON(n):
    sum = 0    
    for i in range(n):
        if i%3==0 or i%5==0:
            sum+=i
    return sum

def sumMultiplesO1(n):
    num_three = (n-1)//3
    num_five = (n-1)//5
    num_fifteen = (n-1)//15

    sum_three = 3*(num_three*(num_three+1))//2
    sum_five = 5*(num_five*(num_five+1))//2
    sum_fifteen = 15*(num_fifteen*(num_fifteen+1))//2

    return sum_three + sum_five - sum_fifteen

num_test = int(input().strip())
for _ in range(num_test):
    n = int(input().strip())
    print(sumMultiplesO1(n))