function setup() {
    createCanvas(windowWidth, windowHeight);
    bubble = new Bubble(300, 400);
    bubble2 = new Bubble(500, 20);
    bubble3 = new Bubble(1500, 500);
}

function draw() {
    background(0);
    if (mouseX >= windowHeight / 2){
        bubble.move();
        bubble2.move();
        bubble3.move();
        bubble.show();
        bubble2.show();
        bubble3.show();
    }

 
   

    var x = 200;
	var y = 400;
	var e = ellipse(pmouseX, pmouseY, x, y);

	if (key == 'r'){
		e = rect(pmouseX, pmouseY, x, y);
		stroke('red');
		strokeWeight(10)
		fill('green');
	}


	if (key == 't'){
		strokeWeight(5)
		stroke('blue');
		fill('orange');
		
	}
	if (key == 'q'){
		background("blue");
}
    
}

class Bubble {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    move(){
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show(){
        
        strokeWeight(4);
        fill(255);
        ellipse(this.x, this.y - 100, 200);
        
    }
}