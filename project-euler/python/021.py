import sys
from functools import reduce

def sieve_sum_of_proper_divisiors(upper_limit):
    sum_proper_divisors = [1]*upper_limit
    for i in range(2, upper_limit):
        for j in range(i*2, upper_limit, i):
            sum_proper_divisors[j-1] += i
    return sum_proper_divisors

sum_of_divisors = sieve_sum_of_proper_divisiors(120000)
print(len(sum_of_divisors))
    
def amicable_pairs_sum(upper_limit):
    amicable_n = []
    for i in range(2, upper_limit):    
        if (i > sum_of_divisors[i-1] #if value if bigger than array then it would fail
            and i == sum_of_divisors[sum_of_divisors[i-1]-1]):
            amicable_n.append(i)
    amicable_n.sort()
    return reduce(lambda sum, val: sum+(val if val < upper_limit else 0), amicable_n, 0)

num_inputs = int(input().strip())
for _ in range(num_inputs):
    n = int(input().strip())
    print(amicable_pairs_sum(n))