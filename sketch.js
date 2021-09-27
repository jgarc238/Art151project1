function setup() {
  createCanvas(windowWidth, windowHeight);
  balls = [];
  squares = [];
  arr = [windowHeight];
  noCursor();
  background(220);
  alert("The Color Coder by Jonathan Garcia \n My focus for this project is color and interaction.\n You can draw with the cursor, and the computer can also draw with \n lines.\n Left-click = ball trail\n r = rectangle/reset\n l = lines\n c + Left-click = single ball + background change");
  

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
      line(random(arr[0], arr[windowWidth]), random(arr[0], arr[windowHeight]), random(arr[0], arr[windowWidth]), random(arr[0], arr[windowHeight]));
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
  };
}


function Square(x, y) {
  this.pos = createVector(x, y);

  this.show = function () {
    stroke(0);
    fill(0);
    rect(this.pos.x - 15, this.pos.y - 15, 30, 50);
  };
}


