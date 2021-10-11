#!/bin/python3
import sys

def max_path_sum(tree, tree_length):
    row = tree_length - 2
    while row>=0:
        for col in range(len(tree[row])):
            tree[row][col] += max(tree[row+1][col], tree[row+1][col+1])
        row-=1
    return tree[0][0]

n = int(input().strip())
for _ in range(n):
    tree_length = int(input().strip())
    tree = [list(map(int, input().strip().split(' '))) for _ in range(tree_length)]
    print(max_path_sum(tree, tree_length))
