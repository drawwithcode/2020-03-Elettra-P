let run;
let runFlip;
let mySong;
let songRate = 1;
let myBubbles = [];


function preload() {
  run = loadImage("./assets/images/running1.png");
  runFlip = loadImage("./assets/images/running2.png");
  mySong = loadSound("./assets/audio/Forget Me Not - Patrick Patrikios.mp3");
}

function setup() {
  mySong.loop();
  //randomization of bubble parameters
  for (let i = 0; i < 1000; i++) {
    const options = {
      x: width / 2 + random(-10, 10),
      y: height / 2 + random(-10, 0),
      radius: random(70, 130)
    }
        myBubbles.push(new Bubble(options));
  }

}



function draw() {
    if (!mySong.isPlaying()) {
    mySong.play()
  }


  createCanvas(windowWidth, windowHeight);
  background("#EC9A29")


  for (let i = 0; i < myBubbles.length; i++) {
    myBubbles[i].run();
  }

//when the key up arrow is pressed the image changesand the song rates gets faster
  imageMode(CENTER);
  if (keyIsDown(UP_ARROW)) {
    songRate = songRate + 0.01;
    image(runFlip, windowWidth / 2, 6 * windowHeight / 7, runFlip.width, runFlip.height);
    mySong.rate(songRate)
  } else {
    image(run, windowWidth / 2, 6 * windowHeight / 7, run.width, run.height)
  }

//how to play text
  push();
  noStroke();
  fill("#A8201A");
  rect(10, 850, 410, 1000, 20);
  pop();
  push();
  textFont("Courier New");
  textStyle(BOLD)
  textSize(24);
  fill("#DAD2D8");
  text("Press the ARROW UP key up to make the Joker run, and don't forget to turn the volume up!", 30, 900, 400, 400);
  pop();
}


//class and methods to create bubbles randomly sized and randomly moving in the background
class Bubble {
  constructor({
    x,
    y,
    radius
  } = {}) {
    this.x = x;
    this.y = y;
    this.radius = radius;

  }

  show() {
    push();
    stroke("#143642");
    fill("#0F8B8D")
    ellipse(this.x, this.y, this.radius * 2)
    pop()
  }

  move() {
    this.x += random(-windowWidth, windowWidth)
    this.y += random(100, -100)
  }

  run() {
    this.move();
    this.show();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
