# requires package: binarytree==6.5.1
from binarytree import Node, get_parent

def parse_tokens(tokens):
    # parse, but now build a tree
    nodes = []
    for token in tokens:
        # decide what the token of the string is. there are several options
        # 1. is it a number? append in on the stack
        if token['kind'] == 'int':
            nodes.append(Node(token['value']))
        # 2. is it an operator? then put the last children into a tree with it
        elif token['kind'] == "op":
            left = nodes.pop()
            right = nodes.pop()
            nodes.append(Node(token['value'], left=left, right=right))
        # 3. otherwise it should be whitespace. there is no other token type
        elif token['kind'] != 'space':
            print(" " * token['pos'] + "^")
            print("internal error: unknown token")
            break
    return nodes
