/*[1]*/

class Node{
    constructor(key, parent = null, leftChild = null, rightChild = null){
        this.key = key; //"this" serve para armazenar o valor de key, para possível reutilização.
        this.parent = parent;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
        /* OBS: O valor armazenado é referente ao nó raiz */
    }

/*--------------------------------------XXX-------------------------------------------*/

/*[2]*/

    add(node){
        if(node.key < this.key){ /*Se chave do nó incrementado for menor que o raiz */
            if(this.leftChild === null){ /*Se não houver filho à esquerda. */
                this.leftChild = node;
                this.leftChild.parent = this;
            }
            else {
                this.leftChild.add(node); /*Chama metodo add recursivamente. */
            }
            
        }

        else {
            if(node.key > this.key){ /*Se chave do nó incrementado for maior que o raiz */
                if(this.rightChild === null){ /*Se não houver filho à direita. */
                    this.rightChild = node;
                    this.rightChild.parent = this;
                }
                else {
                    this.rightChild.add(node); /*Chama metodo add recursivamente. */
                }

            }

        }

    }

}


let root = new Node(10); /* Adiciona nó raiz */
root.leftChild = new Node(7); /* Adiciona nó filho à esaquerda. */
root.rightChild = new Node(13); /* Adiciona nó filho à direita */


root.add(new Node(6)); /* Adicionar nó cujo chave é "6"*/
root.add(new Node(12)); /* Adicionar nó cujo chave é "12"*/
root.add(new Node(15)); /* Adicionar nó cujo chave é "15"*/

console.log(root);