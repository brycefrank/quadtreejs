var coordinates = [];

function setup() {
  createCanvas(800,800);
  noFill()


  function make_cloud(n) {
    // Simulates a point cloud, 2d array of points.
    var coords = [];
    for (var i = 0; i < n; i++) {
      coords.push([random(0, 800), random(0, 800)])
    }
    return coords;
  }

  function make_circle(n, r) {
    // Makes a circle of radius r.
    // TODO: Fix n
    for (var angle = 0; angle < 2 * PI; angle = angle + n) {

      var x = r * sin(angle) + 400;
      var y = r * cos(angle) + 400;

      coordinates.push([x, y]);
    }
  }

  // Draw a circular "plot" (once for now)
  make_circle(0.05, 200);
  var cloud = make_cloud(10000);


  // Draw the coordinates (once for now)
  for (var i = 0; i < coordinates.length; i++) {
    ellipse(coordinates[i][0], coordinates[i][1], 5, 5);
  }
  
  for (var i = 0; i < cloud.length; i++) {
    ellipse(cloud[i][0], cloud[i][1], 1, 1);
  }

  //Initiate the quadtree object
  var quadtree = new QuadTree(coordinates);
}
