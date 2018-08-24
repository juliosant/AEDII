 class Node{
     constructor(key, parent = null, leftChild = null, rightChild = null){
         this.key = key;
         this.parent = parent;
         this.leftChild = leftChild;
         this.rightChild = rightChild;
     }

 }

let root = new Node(10);
root.leftChild = new Node(7); /*Adicionado nó filho à esquerda*/ 
root.rightChild = new Node(13); /*Adicionado nó filho à direita*/ 

console.log(root);

