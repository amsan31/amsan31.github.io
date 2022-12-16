function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
   //noise smooths out the lines
  noiseSeed(0.1);
    colorMode(HSB, 300,300,260);

  // background(30)
}

var tick =0.0;

function draw() {

  
   background(30);
  
  strokeWeight(4);
  noiseDetail(2,1)
  
  noFill();
  
  for(var start = 100; start < 500; start+= 10){
    stroke(start/2,200,255);


    beginShape();
    
     for (var x = 0; x<= window.width; x += 5){
    
  var y =map(noise(x/200,sin(tick)),0,1,start,start+200);  //sine wave to make it loop 
      
     vertex(x,y-100);//positioning 
    

    }
 
    endShape();
  }
  
  tick +=0.02; //loop  timings
  
}
