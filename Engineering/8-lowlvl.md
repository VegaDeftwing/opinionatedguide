# Chapter 8 - Low Level Programming

<iframe width="100%" height="450" src="https://www.youtube.com/embed/Snr113r5ocY?list=FLFMnqfaTa1se1LfbCB3peJQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


> [Video Link: Program in C (YouTube)](https://www.youtube.com/watch?v=Snr113r5ocY&list=FLFMnqfaTa1se1LfbCB3peJQ&index=126)

the stack, pointers, etc.

psuedo code, bitwise opererators, types, unsigned, signed bit, 1's compliment, 2's compliment

## Some simple programs, in C++

TODO: [30 Seconds of C++ (Github)](https://github.com/Bhupesh-V/30-seconds-of-cpp)

### Hello World

fully discect each line and call and why each line is used, ASCII table

add greating and input

### Bit Operations

### Even or Odd, prime,

### Calculating sine and pi

### Sorting a list

mention efficenecy, analysis later

### Palindromes

### Cypher

## System Calls

## Interupt & Signal handeling

### Part 2, Going Deeper

[TODO] Interacting with the above, this program should run in the background and update the data, based on window focus events
using libxdo

This program should actually provide the VAST majority of the source code, with purposeful errors for demonstating the below

furthermore, the C code should check to see if there is a new article, and if so it should call a function that
first checks a 'meta' entry to see if the python code to change a published time to be newer or the number of entries has changed to optimize:

- generates a template markdown file for the article if PUBLISHED is FALSE and no file for it exists,

- generates a template markdown file for the article if PUBLISHED is TRUE and no file for it exists,

- generates a html file from the markdown if PUBLISHED is TRUE and no html exists then updates TEDIT, TPUB

- remove the html file if PUBLISHED is FALSE and an html file for it exists,

however, every time this will still need checked to monitor the md for changes, using ionotify

- generates a new html from the markdwon if PUBLISHED is TRUE and md has changed then updates TEDIT

- if markdown is removed, the html file should be as well

### What are we going to do?

[TODO]

### Tools to use

[TODO]

[C Gibberish <--> English Translator](https://cdecl.org/)

### Pseudo code

[TODO]

### Writing it

[TODO]

using a code editor, header files, libraries, writing and using a Make file, stdout / stderr,

### Debugging it

[TODO]

gdb + gef, gdbfrontend, Valgrind, https://cdecl.org/, etc. Mention Virtual v Physical adressing/translation

https://github.com/hediet/vscode-debug-visualizer/tree/master/extension

overflows

### Analyzing the Assembly

[TODO]

Cutter, TIS-100, Shenzhen IO,

### Patching it

[TODO]

source patching, binary patching

## File formats

[TODO] wav is easy, mp3 is hard.. show this. WAV format on 767 of POC||GTFO

## Where to get more practice with low level programming

[TODO]

https://github.com/rby90/Project-Based-Tutorials-in-C

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Five Seconds of Donkey Kong. <a href="https://twitter.com/hashtag/plottertwitter?src=hash&amp;ref_src=twsrc%5Etfw">#plottertwitter</a><br><br>The NES has 2048 bytes of RAM. I snapshotted the RAM at each frame (60 fps) during 5 seconds of gameplay and plotted time series of the ones that changed at least once. <a href="https://t.co/rtPT0mHiLD">pic.twitter.com/rtPT0mHiLD</a></p>&mdash; Michael Fogleman (@FogleBird) <a href="https://twitter.com/FogleBird/status/954464508705234944?ref_src=twsrc%5Etfw">January 19, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
