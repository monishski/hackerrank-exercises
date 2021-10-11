#!/bin/python3
import os
import sys

def dfs_inorder_swap_nodes(tree, swap_depth_multiples):
    arr = []
    for swap_depth_multiple in swap_depth_multiples:
        inorder = []
        stack = []
        current_index = 1
        depth = 0
        while True:
            #Note you can't set current_node = tree[current_index-1] here because
            #you'll reach current_index=-1 eventally so things will break!
            if current_index!=-1: #Keep traversing until you reach -1
                depth+=1 #Note this is the only place we add incrementall to depth
                if depth%swap_depth_multiple==0: #restructure the tree?
                    # left_node = tree[current_index-1][0]
                    # tree[current_index-1][0] = tree[current_index-1][1]
                    # tree[current_index-1][1] = left_node
                    tree[current_index-1][0], tree[current_index-1][1] = tree[current_index-1][1], tree[current_index-1][0]
                stack.append((current_index, depth))
                current_index = tree[current_index-1][0]
            elif stack:
                #When the current index is eventually -1, we will start having to move up,
                #and the order of elements in the stack IS THE inorder order
                current_index_depth = stack.pop()
                depth = current_index_depth[1]
                #The depth needs to be reset to whichever node we are current at as we start moving back up,
                #because if there is a node on the right tree, we must add 1
                inorder.append(current_index_depth)
                current_index = tree[current_index_depth[0]-1][1]
            else:
                break
        arr.append(list(list(zip(*inorder))[0]))
    return arr

if __name__ == '__main__':
    # indexes = [[2, 3], [4, 5], [6, -1], [7, -1], [8, -1], [9, 10], [-1, 11],
        # [-1, -1], [-1, -1], [-1, -1], [-1, -1]] #My customer tree with greater complexity to chekc if nodes on the right were being correctly accounted!
    indexes = [[2, 3], [4, -1], [5, -1], [6, -1], [7, 8], [-1, 9], [-1, -1],
        [10, 11], [-1, -1], [-1, -1], [-1, -1]]

    queries = [2, 4]

    result = dfs_inorder_swap_nodes(indexes, queries)
    print(result)
    # fptr.write('\n'.join([' '.join(map(str, x)) for x in result]))
    # fptr.write('\n')

    # fptr.close()
