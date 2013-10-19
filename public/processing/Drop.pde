class Circle {
  float xPos, yPos, opacity;
  int speed, eSize;

  Circle (float x, float y, int es) {
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
    speed = 10;
    xPos += speed;
    if (xPos > width) {
      xPos = 0;
    }
    ellipse(xPos, yPos, eSize, eSize);
  }
}


ArrayList circles;

void setup() {
  size(500, 500);
  frameRate(15);
  circles = new ArrayList();
}

void draw() {
  background(0);
  spawn();
  display();
}

void spawn() {
  int size = int(random(0, 100));
  Circle c = new Circle(mouseX, mouseY, size);
  circles.add(c);
  c = null;
  if (circles.size() > 100) {
    circles.remove(0);
  }
}

void display() {
  for(int i = 0; i < circles.size(); i++)
  {
    Circle c = (Circle)circles.get(i);
    c.dot();
    c = null;
  }
}
 
void mouseClicked() {
  int r = int(random(0, 255));
  int g = int(random(0, 255));
  int b = int(random(0, 255));
  //  fill(r, g, b);
}

