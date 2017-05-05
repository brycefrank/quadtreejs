function QuadTree(coords) {
  // Holds head node, creates new nodes
  this.width = 800;
  this.height = 800;
  this.nodes_of_interest = [];

  this.head_node = new QuadTreeNode(0, 0, 800, 0, coords, 0, this);

  var node_array = this.head_node.children;

  //TODO: Make a recursive thingy.

  console.log(this.nodes_of_interest);
}
