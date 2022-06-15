var u;
var l;
var a;
var mods = [];
var x;
var y;
var count;

let sop;
let spt;
let multiuso;

function setup() {
  createCanvas(windowWidth, windowHeight);
  u = 100;
  l = 40;
  var hCount = height/80;
  var wCount = width/80;
  count = int(hCount * wCount);
  
  var index = 0;
  for (var xc = 0; xc < wCount; xc++) {
    for (var yc = 0; yc < hCount; yc++) {
      mods[index++] = new Module(int(xc)*u,int(yc)*u);
    }
   colorMode(HSB, 360, 100, 100);
    
 noFill();
  strokeWeight(50);
   
  sop = width / 2;
  spt = height / 2;
  multiuso = 0; }
}

var i,r
function draw() {
  

  if (mouseIsPressed) {
    
    
    background(0, 3, 5, 10);

    multiuso += 80;

   r=height
   background(255,50,random(255));
   for(i=0;i<50;i++)
   {
      noFill()
      strokeWeight(10)
      stroke(map(i,0,0,0,255),random(255),random(255))
      ellipse(width/2,height/2, r-i*100-map(mouseY,mouseX,width,0,100)); 
    }
 
    translate(width/2, height/2);
   
   var circleResolution = map(mouseY, 0, height, 2, 80);
   var radius = mouseX- width /2 + 0.5;
   var angle = TWO_PI / circleResolution;
   
   strokeWeight( mouseY / 150 );
   stroke(360 - mouseY, 100, 100);
   
   beginShape();
      for (var i = 0; i <= circleResolution; i++) {
         var x = cos(angle * i ) * radius;
         var y = sin( angle * i ) * radius;
         line(0, 0, x, y);
      }
    
    beginShape();
      for (var i = 0; i <= circleResolution; i++) {
         var x = cos(angle * i ) * radius;
         var y = tan( angle * i ) * radius;
         line(0, 0, x, y);
      }
    
    beginShape();
      for (var i = 100; i <= circleResolution; i++) {
         var x = tan(angle * i ) * radius;
         var y = cos( angle * i ) * radius;
         line(0, 0, x, y);
      }
   endShape(CLOSE);   
    
    

  } else {
    background(255);
  }
  
  noStroke();
  translate(20, 20);
  if (mouseIsPressed) {
    translate(-width/2, -height/2);  
  }
  for (let i = 0; i <= count; i++) {
    mods[i].update();
    mods[i].draw1();
    mods[i].draw2();
  }

}

function Module(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.a = 0;
  

}

Module.prototype.update = function() {
    this.a = atan2(mouseY-this.y, mouseX-this.x);
}

Module.prototype.draw1 = function() {
  push();
  translate(this.x, this.y);
  fill(255);
  ellipse(0, -10, 70, 70);
  pop();
}


Module.prototype.draw2 = function() {
  push();
  translate(this.x, this.y);
  rotate(this.a);

  fill(0);
  ellipse(10, 0, 30, 30);

  pop();
}

function mousePressed() {
   
let verde = color(141, 171, 127);
let limon = color(207, 238, 158);
   
  if (mouseButton==LEFT) {
    stroke(verde);
  }

  if (mouseButton==RIGHT) {
    stroke(limon);
  }
}