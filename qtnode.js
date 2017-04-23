function QuadTreeNode(posx, posy, width, parent, tree) {
  this.posx = posx;
  this.posy = posy;
  this.width = width;

  this.tree = tree;
  this.parent = parent; //placeholder
  this.children = []; // placeholder
  this.potential_points = in_points



  this.divide = function() {
    //generate four children cells.
    this.children.push(new QuadTreeNode(this.posx, this.posy, this.width/2, this, this.tree)) //top left
    this.children.push(new QuadTreeNode(this.posx + this.width / 2, this.posy, this.width / 2, this, this.tree)) // top right
    this.children.push(new QuadTreeNode(this.posx, this.posy + this.width/ 2, this.width / 2, this, this.tree)) // bottom left
    this.children.push(new QuadTreeNode(this.posx + this. width / 2, this.posy + this.width / 2, this.width/2, this, this.tree)) // bottom right
  }


  this.check_coords = function(max) {
    var num_in = 0;
    for(var i = 0; num_in < max; i++){
      if(coordinates[i][0] < this.posx + this.width && coordinates[i][1] < this.posy+this.width){
        num_in += 1;
        this.potential_points.push([coordinates[i][0], coordinates[i][1]])
      }
      if (j = 10){
        this.divide();
      }
    }
  }

  this.check_coords(10);



  this.display = function() {
    rect(this.posx, this.posy, this.width, this.width);
  }

  this.display();

}
