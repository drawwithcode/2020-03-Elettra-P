let trianglesArray1 = [];


let speedX;
let speedY;
let img;
let song;
let amp

function preload() {
  img = loadImage('assets/annie_lennox.jpg');
  song = loadSound('assets/sweet_dreams.mp3');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song.loop();
  amp = new p5.Amplitude();
  amp.setInput(song);


}


function draw() {
  image(img, 0, 0, width, width * img.height / img.width);

  let speed = amp.getLevel();

  let player = song.isPlaying();
  if (!player) {
    song.play();
  }

  for (let i = 0; i < 100; i++) {
    trianglesArray1[i] = new Triangles(random(0, width), random(0, height), 20 * random(-1, 1) * speed, 20 * random(-1, 1) * speed)

    for (let i = 0; i < trianglesArray1.length; i++) {
      trianglesArray1[i].paintTriangle(255);
      trianglesArray1[i].moveTriangle();
    }
  }

}


class Triangles {
  constructor(triX, triY, speedX, speedY) {
    this.X = triX
    this.Y = triY
    this.speedX = speedX
    this.speedY = speedY
  }

  paintTriangle(red) {
    noStroke()
    triangle(this.X, this.Y, this.X + 25, this.Y + 40, this.X - 25, this.Y + 40)
  }

  moveTriangle() {
    this.X += this.speedX;
    this.Y += this.speedY;

    if (this.Y > height || this.Y < 0) {
      this.speedY *= -1;
      fill(random(255), random(255), random(255))
    }

    if (this.X > width || this.X < 0) {
      this.speedX *= -1;
      fill(random(255), random(255), random(255))
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
