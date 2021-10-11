# Complete the insertNodeAtPosition function below.

#
# For your reference:
#
# SinglyLinkedListNode:
#     int data
#     SinglyLinkedListNode next
#
#
class Node(object):

    def __init__(self, data):
        self.data = data
        self.next = None

class SinglyLinkedList(object):

    def __init__(self, head=None):
        self.head = Node(head)
        #Interesting, you can define a tail here...
        #self.tail = None

    def insert_node(self, data):
        current_node = self.head
        if current_node.data:
            while current_node.next:
                current_node = current_node.next
            current_node.next = Node(data)
        else:
            self.head = Node(data)

    #If you define a tail this simply becomes:
    # def insert_node(self, data):
    #     node = Node(data)
    #     if not self.head: self.head = node
    #     else: self.tail.next = node
    #     self.tail = node


def insertNodeAtPosition(head, data, position):
    new_node = Node(data)
    if position==0:
        new_node.next = head
        head = new_node
    else:
        curr_node = head
        curr_node_pos = 0
        while curr_node.next:
            curr_node_pos+=1
            if curr_node_pos==position:
                temp = curr_node.next
                curr_node.next = new_node #if you reverse the 2 lines before you don't need temp!
                new_node.next = temp
                break
            else:
                curr_node = curr_node.next

    return head

if __name__ == '__main__':

    n_nodes = int(input())
    ll = SinglyLinkedList()

    for _ in range(n_nodes):
        node_value = int(input())
        ll.insert_node(node_value)

    data = int(input())
    position = int(input())

    ll_head = insertNodeAtPosition(linked_list.head, data, position)

    #hackerrank had a built in function for priting
    #I only proved that it worked for the test case here: 16 13 1 and then insert 7 at position 2
    print(ll_head.value)
    print(ll_head.next.value)
    print(ll_head.next.next.value)
    print(ll_head.next.next.next.value)
