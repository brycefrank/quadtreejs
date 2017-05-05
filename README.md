# quadtreejs

A quadtree demonstration in p5js. This is intended as a learning exercise before experimenting with
applications in LiDAR clipping to irregularly shaped areas.

Here is a functioning version:
https://www.openprocessing.org/sketch/423228

## Structure

A canvas of 800 by 800 is created. After this, an array of random coordinates is constructed and displayed on the canvas.

A QuadTree object is initialized. Upon initialization the QuadTree object initializes a QuadTreeNode object as the "head node."

This head node checks how many points are within its bounding box, if that number exceeds the maximum defined threshold,
the node divides itself into four equal sub-nodes. For each of these nodes, this process repeats until the number of
points within each node is <= the maximum threshold.

## TODO:

Index point cloud with nodes.
"Intersect" nodes with geometry (simply...)
