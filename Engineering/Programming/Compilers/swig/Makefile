# This line may need changed depending on your distribution.
GCC_INCLUDE_DIR ?= /usr/include
GCC = gcc-10

all: _gccjit.so
.PHONY: all

clean:
	rm -f _gccjit.so gccjit_wrap.c example gccjit.py
.PHONY: clean

example: example.c
	$(GCC) -o $@ $< -lgccjit

_gccjit.so: gccjit_wrap.c
	$(GCC) -fPIC -shared -o $@ -I/usr/include/python3.8 -I$(GCC_INCLUDE_DIR) gccjit_wrap.c -lgccjit

gccjit_wrap.c gccjit.py: gccjit.i
	swig -python -outcurrentdir -I$(GCC_INCLUDE_DIR) gccjit.i
