import sys
from functools import wraps, reduce

sys.setrecursionlimit(10**6) 

def memoize(func):
    cache = dict()
    @wraps(func)
    def hidden(*args):
        if args in cache:
            return cache[args]
        result = func(*args)
        cache[args] = result
        return result
    return hidden

@memoize
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n-1)

def factorial_digit_sum(n):
    arr = map(int, list(str(factorial(n))))
    return reduce(lambda x, y: x+y, arr, 0)

num_inputs = int(input().strip())
for _ in range(num_inputs):
    n = int(input().strip())
    print(factorial_digit_sum(n))