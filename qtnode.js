function QuadTreeNode(posx, posy, width, parent, in_points, generation, id) {
  this.posx = posx;
  this.posy = posy;
  this.width = width;
  this.parent = parent; //placeholder
  this.children = []; // placeholder
  this.potential_points = in_points;
  this.generation = generation;
  this.pos = id

  this.final_points = [];


  if (this.generation < 10) {
    this.divide = function(new_points) {
      //generate four children cells.
      this.children.push(new QuadTreeNode(this.posx,                  this.posy,                  this.width / 2, this,  new_points, this.generation+1, "TL")); //top left
      this.children.push(new QuadTreeNode(this.posx + this.width / 2, this.posy,                  this.width / 2, this,  new_points, this.generation+1, "TR")); // top right
      this.children.push(new QuadTreeNode(this.posx,                  this.posy + this.width / 2, this.width / 2, this,  new_points, this.generation+1, "BL")); // bottom left
      this.children.push(new QuadTreeNode(this.posx + this.width / 2, this.posy + this.width / 2, this.width / 2, this,  new_points, this.generation+1, "BR")); // bottom right
    }


    this.intersect = function() {
      // Returns an array of all intersecting points.
      // Check all potential points for intersect.
      var intersect = [];
      for (var i = 0; i < this.potential_points.length; i++) {
        if( this.potential_points[i][0] > this.posx               &&
            this.potential_points[i][0] < this.posx + this.width &&
            this.potential_points[i][1] > this.posy              &&
            this.potential_points[i][1] < this.posy + this.width) {
          //If it is in the bounds, append it to the new_points array.
          intersect.push(this.potential_points[i]);
        }
      }
      console.log(intersect.length + this.pos);
      return intersect;
    }

    this.check_intersect = function(max) {
      // Checks if the intersection exceeds the division limit. If so, calls the divison function.
      var intersect = this.intersect();

      if(intersect.length > max) {
        this.divide(intersect);
      } else {
        this.final_points = intersect;
      }
    }

    this.check_intersect(5);

    rect(this.posx, this.posy, this.width, this.width);



    }

}
