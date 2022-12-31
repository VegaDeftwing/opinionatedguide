# this is a stack of numbers being stored for operation
number_stack = []


def push_num(n):
    number_stack.append(int(n))


def pop_num():
    # the stack has a 0 "pinned" to the bottom of it
    if len(number_stack) == 0:
        return 0
    else:
        return number_stack.pop()


while 1:
    number_stack[:] = []
    print("> ", end="")
    line = input()

    if line.startswith('q'):
        break

    # step one: break the line into pieces
    # keeping track of position
    parts = line.split()
    pos = 1  # not zero due to an offset in the prompt

    for part in parts:
        pos += len(part)

        # decide what the part of the string is. there are several options
        # 1. is it a number? append in on the stack
        if part.isdigit():
            push_num(part)
        # 2. is it an addition? pop two items and add them, then append
        elif part == "+":
            push_num(pop_num() + pop_num())
        # 3. is it a multiplication? same idea
        elif part == "x" or part == "*":
            push_num(pop_num() * pop_num())
        # 4. if it is a blank, then that means we can skip it
        # otherwise, finally if it's anything else, ther is a syntax error
        elif part != '':
            print(" " * pos + "^")
            print("syntax error: unknown token")
            break

        pos += 1  # account for the space

    # in case of a syntax error, it was printed, so continue to the next line
    if pos == len(line) + 1:
        continue
    else:
        print(number_stack[-1])
