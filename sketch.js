// added a checkbox for random initial state

let generation = 0;
//let rules = [0, 0, 0, 1, 1, 1, 1, 0]; // 30
//let rules = [1,0,1,1,0,1,1,0];  //182
let rules;
let para; // for html
let myinput;
let myCheckbox;

function setup() {
  para = createP(rules);
  
  myinput = createInput("30");
  myinput.changed(setBinRule);
  myCheckbox = createCheckbox("Rand first state",false);
  myCheckbox.changed(setBinRule);
  print(myCheckbox.checked())
  setBinRule();
  createCanvas(800, 800);
  background(0);
  stroke(255, 255, 0)
  // set the first 1 dot or random dots in the zero generatioin 
  
  if(myCheckbox.checked()){
    for (let i =0; i< width/4; i++){
    
      point(random(width),generation);
    }
    }else{
      point(width / 2, generation);
  }
}


function setBinRule() {
  // as Wolfram rules 0 to 255 are just binary numbers 
  // this callback function converts user input to binary. then clears and restarts animation
  let a = int(myinput.value()); // converts user input to int
  let b = a.toString(2); // converts it to binary but leading zeros, not 8 bits eg. 3 = "11"
  let mask = "00000000" // a mask to get the extra zeros
  let c = mask.slice(0, 8 - b.length); // slice to get the right number of zeros 
  // if b = "11" then c = "000000"
  let binstring = c + b; // binary string so 3 will give 00000011 8 bits

  rules = int(binstring.split("")); // is an aray of ints so [0,0,0,0,0,0,1,1]
  console.log(rules);
  background(0);
  stroke(255, 255, 0)
  // set the first dot in the zero generatioin   
  generation = 0; // reset generation
  // set single dot or random dots for first generation
  
   // set the first 1 dot or random dots in the zero generatioin 
  
  if(myCheckbox.checked()){
    for (let i =0; i< width/4; i++){
    
      point(random(width),generation);
    }
    }else{
      point(width / 2, generation);
  }

  loop();


}



function draw() {
  getNextGen(); // call function
  generation++; // update generation
  para.html(generation)

  if (generation > height - 10) { // stop it 
    noLoop();

  }
}

function getNextGen() {
  // to get the edge cases we have to make these have a wider scope
  // we can not use % modulo in javascrip as it works diffently to python for negative numbers 
  let leftP;
  let iP;
  let rightP; // wider scope
  //loadPixels(); // just to look, no need to update, as they are set with point.; // actuall don't need to call this
  // first look at all the pixels in the current gen

  
  for (let i = 0; i < width; i++) { //looping through line of pixel
    if (i === 0) {
      leftP = get(width-1, generation); // edge caseget left pixel val with -1 because pixels start with 0 so 0-299
      //print("boom", leftP, width);
    } else {
      leftP = get((i - 1), generation); // get left pixel val
    }
    iP = get(i, generation); // get this pixel val

    if (i === width) {

      rightP = get(0, generation); // edge case get right pixel val    

    } else {

      rightP = get((i + 1), generation); // get right pixel val 

    }
    let binary = "";
    // set an empty binay number of three digits
    // left,middle,right 000 - 111 
    // this will get us the index of the which ruleset

    if (leftP[0] > 0) {
      binary += "1";
    } else {
      binary += "0";

    }
    if (iP[0] > 0) {
      binary += "1";
    } else {
      binary += "0";

    }
    if (rightP[0] > 0) {
      binary += "1";
    } else {
      binary += "0";
    }

    let minIndex = parseInt(binary, 2);
    let index = 7 - minIndex
    if (rules[index] === 1) {
      point(i, (generation + 1));


    }

  }
}


/* 
   // as Wolfram rules are just binary numbers
   // eg rule 30 = 00011110  is just 30 in binary
   
   // lather in the code will need to get a reverse index
   // the values at indexes which are reversed
   // example: 111 give us the first rule sent which is
   // held in index 0 and binary 111 is 7 so we much subtract
   // to get the right index. 
    
    
  
  */
