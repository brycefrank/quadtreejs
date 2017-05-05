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
        this.divide(in_points);
        this.has_children = 1;
      } else if (in_points.length > 0){
        this.final_points = in_points;
        this.tree.nodes_of_interest.push(this.id);
        ellipse(this.posx, this.posy, 10, 10)
      }
    }
    this.check_intersect(5);
    rect(this.posx, this.posy, this.width, this.width);
    }
}
