var coordinates = [];

function setup() {
  createCanvas(800,800);
  noFill()

  // Create random coordinates

  for (var i = 0; i < 500; i++) {
    coordinates.push([random(1, 799), random(1, 799)]);
  }

  // Draw a circular "plot" (once for now)
  ellipse(400, 400, 500, 500);

  // TEMP: For now just playing with one rectangle and finding
  // the number of points within.




  // Draw the coordinates (once for now)
  for (var i = 0; i < coordinates.length; i++) {
    ellipse(coordinates[i][0], coordinates[i][1], 5, 5)
  }

  //Initiate the quadtree object

  var quadtree = new QuadTree(coordinates);




}

// function draw() {
// }
