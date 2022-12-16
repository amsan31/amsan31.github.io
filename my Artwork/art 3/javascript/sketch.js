function setup() {
  createCanvas(1200,800);
  
  angleMode(DEGREES);
  rectMode(CENTER)
}

function draw() {
  background(30);
  noFill();
  stroke(255);
  
      translate(width/2, height/2);
  
  for (var i = 0; i<200; i++){
    push()
    
    rotate(sin(frameCount+i)*90);
    
    var r = map(sin(frameCount),-1,1,50,255);
      var g = map(sin(frameCount/2),-1,1,50,255);
      var b = map(sin(frameCount/4),-1,1,50,255);
    
    stroke(r, g, b)

    rect(0,0,700 - i*2, 600-i*3,200-i); 
    
    pop()
    
  }
  
}