function QuadTreeNode(posx, posy, width, parent, in_points, generation, tree) {
  this.posx = posx;
  this.posy = posy;
  this.width = width;
  this.parent = parent; //placeholder
  this.children = []; // placeholder
  this.potential_points = in_points;
  this.generation = generation;
  this.id = "" + posx + posy
  this.has_children = 0; //could be lumped into some other variable
  this.tree = tree;
  this.final_points = [];
  this.verts = [[this.posx, this.posy],
              [this.posx + this.width, this.posy],
                  [this.posx, this.posy + this.width], [this.posx+this.width, this.posy+this.width]]


  if (this.generation < 10) {
    this.divide = function(new_points) {
      //generate four children cells.
      this.children.push(new QuadTreeNode(this.posx,                  this.posy,                  this.width / 2, this,  new_points, this.generation+1, this.tree)); //top left
      this.children.push(new QuadTreeNode(this.posx + this.width / 2, this.posy,                  this.width / 2, this,  new_points, this.generation+1, this.tree)); // top right
      this.children.push(new QuadTreeNode(this.posx,                  this.posy + this.width / 2, this.width / 2, this,  new_points, this.generation+1, this.tree)); // bottom left
      this.children.push(new QuadTreeNode(this.posx + this.width / 2, this.posy + this.width / 2, this.width / 2, this,  new_points, this.generation+1, this.tree)); // bottom right
    }


    this.intersect = function() {
      // Returns an array of all intersecting points.
      // Check all potential points for intersect.
      var in_points = [];
      for (var i = 0; i < this.potential_points.length; i++) {
        if( this.potential_points[i][0] > this.posx               &&
            this.potential_points[i][0] < this.posx + this.width &&
            this.potential_points[i][1] > this.posy              &&
            this.potential_points[i][1] < this.posy + this.width) {
          //If it is in the bounds, append it to the new_points array.
          in_points.push(this.potential_points[i]);
        }
      }
      return in_points;
    }

    this.check_intersect = function(max) {
      // Checks if the intersection exceeds the division limit. If so, calls the divison function.
      var in_points = this.intersect();

      if(in_points.length > max) {
        // This node has child nodes.
        this.divide(in_points);
        this.has_children = 1;
        noFill();
        rect(this.posx, this.posy, this.width, this.width);
      } else if (in_points.length > 0){
        // This node is at the bottom and has POI.
        this.final_points = in_points;
        this.tree.nodes_of_interest.push(this.id);
        this.bottom = true;
        fill(100);
        rect(this.posx, this.posy, this.width, this.width)
      } else {
        // This node is at the bottom and has no POI
        noFill();
        this.bottom = true;
        rect(this.posx, this.posy, this.width, this.width);
      }
    }

    this.check_geom = function() {
      //Checks if the node is inside or outside of the circle by checking
      // if any of the 4 vertices are less than a radius away from the circle
      // circle_center
      var verts = this.verts;
      for (var i = 0; i < verts.length; i++) {
        //Check distance
        distance = Math.sqrt((Math.pow(verts[i][0] - circle_center[0], 2)) + (Math.pow(verts[i][1] - circle_center[1], 2)));
        if ((distance < circle_radius) && (this.bottom == true) && (this.final_points.length == 0)) {
          this.in_circle = true;
          console.log("bloop")
          break
        }
      }
    }
    this.check_intersect(5);
    this.check_geom();
    }
}
