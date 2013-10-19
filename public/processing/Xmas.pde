class Circle {
  float xPos, yPos, eSize, opacity, speed; 
 
  Circle (float x, float y, float es) {
    xPos = x; 
    yPos = y; 
    eSize = es;
    opacity = 255;
  }
 
  void dot() {
    eSize += 2;
    opacity -= 5;
    noFill();
    stroke(opacity);
    strokeWeight(3);
    ellipse(xPos, yPos, eSize, eSize);
  }
 
  void update() {    
    opacity -= random(0, 3);
    yPos += 5;
    fill(255, opacity);
    ellipse(xPos, yPos, eSize, eSize);
  }  
}




ArrayList circles;
int time = 0;


void setup() {
  size(600, 600);
  noStroke();
   
  circles = new ArrayList();   
  
  for(int i = 0; i < 20; i++){
    float eSize = random(50, 150);
    float x = random(0, 800);
    float y = random(0, 800);
    Circle c = new Circle(x, y, eSize);
    circles.add(c);
    c = null;
  }
}


void draw() {
  
  background(color(225, 74, 151));

  if (time % 10 == 0) { 
    float eSize = random(50, 150);
    float x = random(0, 800);
    Circle c = new Circle(x, - 100, eSize);
    circles.add(c);
    c = null;
  }
  
  for(int i = 0; i < circles.size(); i++)
  {
    Circle c = (Circle)circles.get(i);
    c.update  ();
    c = null;
  }   
  
  if (circles.size() > 50) {
    circles.remove(0); 
  }

  time++;
  
}

