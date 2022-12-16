function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  angleMode(DEGREES);
  ellipseMode(CENTER);
}

function draw() {
  background(30);
  
  rotateX(60);

  noFill();
  stroke(255);
  strokeWeight(3);

  for (var i = 0; i< 25; i++){
    
    var r = map(sin(frameCount),-1,1,0,255);
    var g = map(i,0,20,0,255);
    var b = map(cos(frameCount),-1,1,255,0);
    

    
    stroke(r, g, b);
    
    beginShape();
    for (var j = 0; j < 360; j +=10) {
      var lin =  i * 8;
      var x = lin * cos(j);
      var y = lin * sin(j);
      var z = sin(frameCount +i *10 )*100;
      
      vertex(x,y,z);
      
    }
    
    endShape(CLOSE);
  }
}