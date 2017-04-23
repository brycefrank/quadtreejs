function QuadTree(coords) {



  // Holds head node, creates new nodes

  this.width = 800;
  this.height = 800;

  this.nodes = []; //an array for now


  this.head_node = new QuadTreeNode(0, 0, 800, 0, this);
  this.nodes.push(this.head_node)

  // Count all the elements upon initiation






  this.display = function() {

    for (var i = 0; i < this.nodes.length; i++){

      this.nodes[i].display();
    }

  }
}
