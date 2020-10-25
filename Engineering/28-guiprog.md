# Chapter 28 - Graphical Programming

Let's start in a way that's incredibly simple, and abstract away all the hard stuff at first by using a tool kit called 'Processing', which is available under that name from the community repo in arch. The default IDE that comes with it is awful to work in though, so go ahead and open up VSCode and grab the [Processing Language](https://marketplace.visualstudio.com/items?itemName=Tobiah.language-pde) add on, then in VSCode open up a new workspace folder and make a file called processing.pde, then open VSCode's command pallete (CTRL+Shift+P) and run 'Processing: create task file', after that you'll want to open the tasks.json file and change the `command:` line to have `"command": "/usr/bin/processing-java",` after that you can easily try new code just by re-building project the project with CTRL+Shift+B

Alright, setup out of the way, let's code! One of my first projects in processing was to make a [Topographic Map](https://en.wikipedia.org/wiki/Topographic_map), looking generator because I just find them quite visually appealing.

So, thinking about that problem, we clearly need data. probably an array of sorts with a bunch of values that have a smoothed relationship when viewing them as height map, then we'd want to look at the transition points between ranges of values.

Looking up random data generation in python, and you should stumble upon it's noise generation, and see that it uses [Perlin Noise](https://en.wikipedia.org/wiki/Perlin_noise), which upon looking at it should be obvious that it generates exactly what we want. So, looking up an example for that in processing we get to this page: https://processing.org/examples/noise2d.html

Well, that's already super close, so let's look at that code

```java
float increment = 0.02;

void setup() {
  size(640, 360);
}

void draw() {

  loadPixels();

  float xoff = 0.0; // Start xoff at 0
  float detail = map(mouseX, 0, width, 0.1, 0.6);
  noiseDetail(8, detail);

  // For every x,y coordinate in a 2D space, calculate a noise value and produce a brightness value
  for (int x = 0; x < width; x++) {
    xoff += increment;   // Increment xoff 
    float yoff = 0.0;   // For every xoff, start yoff at 0
    for (int y = 0; y < height; y++) {
      yoff += increment; // Increment yoff

      // Calculate noise and scale by 255
      float bright = noise(xoff, yoff) * 255;

      // Try using this line instead
      //float bright = random(0,255);

      // Set each pixel onscreen to a grayscale value
      pixels[x+y*width] = color(bright);
    }
  }

  updatePixels();
}
```

Alright, so line by line, it seems that line 1 is just defining a constant. Reading the Processing docs you'll find setup() should contain size() which takes two arguments that are the size of the output window in pixels (x and y) and that draw() is an endlessly looping function that updates that window.

Before going further let's copy and paste the code into VSCode and run it:

[TODO] add picture

[TODO]

C++ from scratch, JS electron app, Processing creative coding, Python Kivy or similar, Flutter (google lang), shaders (graphical editors), nimp, ronin, Nuklear

## GP-GPU



[TODO]

[Tracy - "A real time, nanosecond resolution, remote telemetry, hybrid frame and sampling profiler for games and other applications"](https://bitbucket.org/wolfpld/tracy/src/master/)

## Libraries

#### Native GUI

#### Web-based

#### Just plotting some data

[μPlot (Github)](https://leeoniya.github.io/uPlot/)