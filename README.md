# wolfram_CA_input
## simple web app to show wolfram 1D cellular automata
a little web app to show wolfram one dimensional cellular automata with p5js.  This just uses the pixel array. So no array switching. Each time through the draw() loop, it just looks at pixels of the current generation and sets the new one just below.  It does have problems with edge cases and with later generations or odd numbered rules.  As Wolfram CA rules map directly to binary numbers the user can enter a rule in decimal form and the callback function converts it to binary and restarts the animation.
[webpage](https://greggelong.github.io/wolfram_CA_input/)

here is the code on the p5 web editor it is not working there either on firefox

but it is working on chrome must be some firefox  the favicon issue I thought it was

https://editor.p5js.org/greggelong/sketches/Xi_4lrU6M

works on chrome with an old version of p5 in chrome and edge 

was working on android.

must have something to do with the pixel array and how it is read off the canvas

the best solution would be to not get update information from this as it changes over platforms

but rather calculate it from an array as I have done in python

I really wanted to skip that step but the multi platform nature of javaScript coding

makes that impractical.   This is not the days of the C64 when memory locations were actual

states of the microchips.  