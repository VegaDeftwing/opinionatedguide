import re

# raw strings are to make sure that the back slashes are not interpreted by Python itself
number_re = r'0|([1-9][0-9]*)'
oper_re = r'\+|\*'
whitespace_re = r'\s+'

def lex_line(line):
    orig_line = line
    pos = 0
    output_tokens = []
    while len(line) > 0:
        # try to match all of the token types with '^' -- beginning of the line
        re_m = re.match(number_re, line)
        op_m = re.match(oper_re, line)
        ws_m = re.match(whitespace_re, line)

        if re_m is not None:
            next_token = {'pos': pos, 'kind': 'int', 'value': int(re_m.group(0))}
            pos += re_m.end()
            line = line[re_m.end():]
        elif op_m is not None:
            next_token = {'pos': pos, 'kind': 'op', 'value': op_m.group(0)}
            pos += op_m.end()
            line = line[op_m.end():]
        elif ws_m is not None:
            next_token = {'pos': pos, 'kind': 'space'}
            pos += ws_m.end()
            line = line[ws_m.end():]
        else:
            next_token = {'pos': pos, 'kind': 'error', 'value': line[0]}
            output_tokens.append(next_token)
            return output_tokens
        output_tokens.append(next_token)
    return output_tokens
