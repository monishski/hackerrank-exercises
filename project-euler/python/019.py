#Note this is a solution from someone in the discussions...
#Although my own way of implementing

#!/bin/python3
import sys  

def zeller_congruence(year, month, day):
    q = day
    m = month + 12 if month <= 2 else month 
    Y = year - 1 if (month == 1 or month == 2) else year
    h = (q + (13*(m+1)//5) + Y + Y//4 - Y//100 + Y//400)%7
    return h == 1

def num_sundays(date_begin, date_end):
    count = 0
    while True:
        if date_begin[2]==1:
            if zeller_congruence(date_begin[0], date_begin[1], date_begin[2]):
                count+=1
        
        date_begin[2] = 1
        date_begin[1] += 1
        if date_begin[1] > 12:
            date_begin[1] = 1
            date_begin[0] += 1
            
        if is_date_order_valid(date_begin, date_end):
            break
    return count

def is_date_order_valid(date_begin, date_end):
    if date_begin[0] > date_end[0]:
        return True
    elif date_begin[0] == date_end[0]: #years are the same 
        if date_begin[1] > date_end[1]: #months are wrong
            return True
        elif date_begin[1] == date_end[1]:
            if date_begin[2] > date_end[2]:
                return True
    return False

num_tests = int(input().strip())
for _ in range(num_tests):
    date_begin = list(map(int, input().strip().split(' ')))
    date_end = list(map(int, input().strip().split(' ')))
    if is_date_order_valid(date_begin, date_end):
        date_begin, date_end = date_end, date_begin
    print(num_sundays(date_begin, date_end))