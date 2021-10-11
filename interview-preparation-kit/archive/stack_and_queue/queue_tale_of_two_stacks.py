#Remember a stack has a push and pop method only!
#A queue and enqueue (which is still a push) and dequeue (which is pop(0))

class MyQueue(object): #I am using FIFO method here
    def __init__(self):
        self.stack_ordered = []
        self.stack_reverse = []

    def peek(self):
        #Initally when I wrote this I thought I couldn't use [-1]... and only use pop() to access the last element...
        #So, I emptied stack_ordered and stored a separate varibable which was overwritten while stack_ordered was emptied using pop
        #And then repopulated stack_ordered by poping all the elements from stack_ordered
        if not self.stack_reverse: #We need to only populate stack_reverse ONLY if its empty... (this might be difficult to understand at first)
            while self.stack_ordered:
                self.stack_reverse.append(self.stack_ordered.pop())
        # print(self.stack_ordered)
        # print(self.stack_reverse)
        return self.stack_reverse[-1]

    def pop(self): #When I initially built it, it was very similar to peek but we don't populate stack_reverse with the first element from stack_ordered
        if not self.stack_reverse: #Move all the elements to stack_reverse
            while self.stack_ordered:
                self.stack_reverse.append(self.stack_ordered.pop())
        self.stack_reverse.pop() #Remove the past element from stack_reverse permenantly...
        # print(self.stack_ordered)
        # print(self.stack_reverse)

    def put(self, value):
        self.stack_ordered.append(value)

queue = MyQueue()

t = int(input())
for line in range(t):
    values = map(int, input().split())
    values = list(values)
    if values[0] == 1:
        queue.put(values[1])
    elif values[0] == 2:
        queue.pop()
    else:
        print(queue.peek())
