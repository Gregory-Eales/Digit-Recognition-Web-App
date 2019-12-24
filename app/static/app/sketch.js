var points = [];

function setup()
{
  createCanvas(400, 400);
}

function draw()
{
  background(255);
  fill(0);
  drawPoints();
  checkDraw();
}

function clearCanvas()
{
  points = [];
}


function drawPoints()
{
  for(i=0; i<points.length; i++)
  {
    ellipse(points[i][0], points[i][1], 20, 20);
  }
}


function checkDraw()
{
  if (mouseIsPressed)
  {
    points.push([mouseX, mouseY]);
  }
}
