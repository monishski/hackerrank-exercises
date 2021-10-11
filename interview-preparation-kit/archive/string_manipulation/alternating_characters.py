#!/bin/python3

import math
import os
import random
import re
import sys

def alternatingCharacters(string):
    # print(len(list(filter(lambda bool: bool==True, [string[index]==string[index+1] for index in range(len(string)-1)]))))
    deletions=0
    for index in range(len(string)-1):
        if string[index]==string[index+1]:
            deletions+=1
    return deletions

if __name__ == '__main__':
    n = int(input())
    for _ in range(n):
        string = input()
        result = alternatingCharacters(string)
        print(str(result)+'\n')
