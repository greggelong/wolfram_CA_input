# wolfram_CA_input
## simple web app to show wolfram 1D cellular automata
a little web app to show wolfram one dimensional cellular automata with p5js.  This just uses the pixel array. So no array switching. Each time through the draw() loop, it just looks at pixels of the current generation and sets the new one just below.  It does have problems with edge cases and with later generations or odd numbered rules.  As Wolfram CA rules map directly to binary numbers the user can enter a rule in decimal form and the callback function converts it to binary and restarts the animation.
webpage[https://greggelong.github.io/wolfram_CA_input/]
