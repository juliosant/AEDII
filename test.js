let root = new Node(10);

//console.log(root.hasLeftChild()); 
root.add(new Node(7));
root.add(new Node(13));
root.add(new Node(6));
root.add(new Node(12));
root.add(new Node(15));

//console.log(root);

//console.log(root.leftChild);

console.log(root.preOrder());