import re

# raw strings are to make sure that the back slashes are not interpreted by Python itself
number_re = r'0|([1-9][0-9]*)'
oper_re = r'\+|\*'
whitespace_re = r'\s+'

while True:
        line = input("> ")
        orig_line = line
        pos = 0
        while len(line) > 0:
            # try to match all of the token types starting at the line beginning
            re_m = re.match(number_re, line)
            op_m = re.match(oper_re, line)
            ws_m = re.match(whitespace_re, line)

            # the matching regex returns a match object rather than None
            if re_m is not None:
                print("Number token: {}".format(re_m.group(0))) # group(0) gets the entire match
                # since we are at the beginning, the end position of the match is the length
                pos += re_m.end()
                line = line[re_m.end():]
            elif op_m is not None:
                print("Operator token: {}".format(op_m.group(0)))
                pos += op_m.end()
                line = line[op_m.end():]
            elif ws_m is not None:
                print("Whitespace token: '{}'".format(ws_m.group(0)))
                pos += ws_m.end()
                line = line[ws_m.end():]
            else:
                # if none match, then it's an invalid character
                print(orig_line)
                print(' ' * pos + '^')
                print("error: unknown token")
                break
