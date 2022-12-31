# requires package: binarytree==6.5.1
from binarytree import Node, get_parent

def exprs_from_tree(nodes):
    # build an expression in python out of the tree using an in-order traversal
    # combined with a bracket algorithm described here:
    # https://www.um.edu.mt/library/oar/bitstream/123456789/14892/1/
    #     Converting%20a%20binary%20tree%20expression%20to%20infix%20
    #     notation%20using%20the%20BAT%20algorithm.pdf
    def _uphill_search(root, node):
        p = get_parent(root, node)
        if p is None:
            return 0, 'left'
        if p.right == node:
            direction = 'right'
        else:
            direction = 'left'
        order = 0
        while True:
            node = p
            order += 1
            p = get_parent(root, node)
            if p is None:
                break
            if p.right == node:
                newdir = 'right'
            else:
                newdir = 'left'
            if newdir != direction:
                break
        return order, direction

    while len(nodes) > 0:
        for leaf in nodes[-1].leaves:
            order, direction = _uphill_search(nodes[-1], leaf)
            if direction == 'left':
                if isinstance(leaf.value, int):
                    leaf.value = str(leaf.value)
                leaf.value = '(' * order + leaf.value
            else:
                if isinstance(leaf.value, int):
                    leaf.value = str(leaf.value)
                leaf.value = leaf.value + ')' * order
        expr = ' '.join(n.value for n in nodes[-1].inorder)
        yield expr
        del nodes[-1]
