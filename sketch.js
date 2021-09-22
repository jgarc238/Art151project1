function setup() {
  createCanvas(windowWidth /2, windowHeight);
  balls = [];
  squares = [];
  arr = [1000];
  noCursor();
  background(220);
  alert("The Color Coder by Jonathan Garcia \n My focus for this project is color.\n You can draw with the cursor, and the computer can also draw with \n lines.\n Left-click = ball trail\n r = rectangle/reset\n l = lines\n c + Left-click = single ball + background change");
  

}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function draw() {
  
  noStroke();
  fill(random(0, 255), random(0, 255), random(0, 255));
  var x = 30;
  var y = 30;
  var e = ellipse(pmouseX, pmouseY, x, y);
  
  stroke(0);
  
  if (key == "l") {
    stroke(random(0, 255), random(0, 255), random(0, 255));
    for(let i = 0; i < 10; i++){
      line(random(arr[0], arr[10000]), random(arr[0], arr[10000]), random(arr[0], arr[10000]), random(arr[0], arr[10000]));
    }
  }
  
  if(key == "c"){
    background(0);
    
  }
  

  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].show();
  }

  if (key == "r") {
    background(220);
    squares.push(new Square(mouseX, mouseY));
    for (let i = 0; i < squares.length; i++) {
      squares[i].show();
    }
  }
  
  if(squares.length > 10){
     squares.splice(0, 1);
     }
}

function mousePressed() {
  balls.push(new Ball(mouseX, mouseY));
}

function Ball(x, y) {
  this.pos = createVector(x, y);
  

  this.dir = createVector(random(-1, 1), random(-1, 1));
  this.speed = (10, 10);

  this.update = function () {
    uPos = p5.Vector.mult(this.dir, this.speed);
    this.pos.add(uPos);

    if (this.pos.x < 0 && this.pos.x > windowWidth) {
      this.dir.x *= -1;
    }
    if (this.pos.y < 0 && this.pos.y > windowHeight) {
      this.dir.y *= -1;
    }
  };
  this.show = function () {
    noStroke();
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(this.pos.x, this.pos.y, 30, 30);
    //rect(this.pos.x, this.pos.y, 20, 30);
  };
}

//function keyPressed() {
  // if (keyCode === 83) {
   // push();
   // fill(random(0, 255), random(0, 255), random(0, 255));
   // translate(width * 0.8, height * 0.5);
   // rotate(frameCount / 3.0);
   // star(random(0, windowWidth / 2), random(0, windowHeight/ 2), 30, 70, 5);
   // pop();
 // }
//}

function Square(x, y) {
  this.pos = createVector(x, y);

  this.show = function () {
    stroke(0);
    fill(0);
    rect(this.pos.x - 15, this.pos.y - 15, 30, 50);
  };
}


