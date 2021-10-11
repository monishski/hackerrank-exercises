#!/bin/python3
import sys

teens = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
keys = {
    1000000000000: 'Trillion', 
    1000000000: 'Billion', 
    1000000: 'Million',
    1000: 'Thousand',
}

def tens_in_words(n):
    if (n>100):
        raise ValueError
    if n<20:
        return teens[n]
    else:
        space = '' if n%10 == 0 else ' '
        return tens[int(n/10)] + space + teens[n%10]

def hundreds_in_words(n):
    if (n>1000):
        raise ValueError
    if n<100:
        return tens_in_words(n)
    else:
        space = '' if n%100 == 0 else ' '
        return teens[int(n/100)] + ' Hundred' + space + tens_in_words(n%100)

def num_to_words(n): #I am trying to condence the JS code
    if n == 0:
        return 'Zero'
    elif n < 1000:
        return hundreds_in_words(n)
    else:
        factor = 1000000000000
        num_in_words = ''
        while factor >= 1000:
            if n%factor != n: 
                space = '' if n%1000 == 0 else ' '
                num_in_words += hundreds_in_words(int(n/factor)) + ' ' + keys[factor] + space
                n = int(n%factor)
            if factor == 1000 and int(n) != 0:
                num_in_words += hundreds_in_words(n)
            factor = factor/1000
    return num_in_words

num_inputs = int(input().strip())
for _ in range(num_inputs):
    n = int(input().strip())
    print(num_to_words(n))