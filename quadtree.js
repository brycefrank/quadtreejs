function QuadTree(coords) {



  // Holds head node, creates new nodes

  this.width = 800;
  this.height = 800;



  this.head_node = new QuadTreeNode(0, 0, 800, 0, coords, 0, "head");

  var node_array = this.head_node.children;


  for (var i = 0; i < node_array.length; i++) {
    console.log(node_array[i].children)
  }



  // Count all the elements upon initiation






  // this.display = function() {
  //
  //   for (var i = 0; i < this.nodes.length; i++){
  //
  //     this.nodes[i].display();
  //   }

  //}
}
