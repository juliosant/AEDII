/*[1]*/

class Node{
    constructor(key, parent = null, leftChild = null, rightChild = null){
        this.key = key; //"this" serve para armazenar o valor de key, para possível reutilização.
        this.parent = parent;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
        /* OBS: O valor armazenado é sempre o do nó raiz */
    }

/*--------------------------------------XXX-------------------------------------------*/

    hasLeftChild(){ 
        return this.leftChild != null;
    } /* Se caso existir nó-filho à esquerda, retornará true. se não houver nó à esquerda, 
    retornará false.  */

    hasRightChild(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        return this.rightChild != null;
    }/* Se caso existir nó-filho à direita, retornará true. se não houver nó à esquerda, 
    retornará false.  */

/*--------------------------------------XXX-------------------------------------------*/

/*--------------------------------------XXX-------------------------------------------*/

/*[2]*/
    add(node){
        if(node.key < this.key){ /*Se chave do nó incrementado for menor que o raiz */
            if(this.leftChild === null){ /**/
                this.leftChild = node;
                this.leftChild.parent = this;
            }
            else {
                this.leftChild.add(node);
            }
            
        }

        else {
            if(node.key > this.key){ /*Se chave do nó incrementado for maior que o raiz */
                if(this.rightChild === null){
                    this.rightChild = node;
                    this.rightChild.parent = this;
                }
                else {
                    this.rightChild.add(node);
                }

            }

        }

    }

}


let root = new Node(10);
root.leftChild = new Node(7); 
root.rightChild = new Node(13);

//console.log(root.hasLeftChild()); 

root.add(new Node(6));
root.add(new Node(12));
root.add(new Node(15));

console.log(root);