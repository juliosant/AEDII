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
            if(this.hasLeftChild()){
                this.leftChild.add(node); /**/
            }

            else {
                this.leftChild = node;
                this.leftChild.parent = this;
            }
            
        }

        else {
            if(node.key > this.key){ /*Se chave do nó incrementado for maior que o raiz */
                if(this.hasRightChild()){
                    this.rightChild.add(node);
                }

                else {
                    this.rightChild = node;
                    this.rightChild.parent = this;
                }

            }

        }

    }
/*--------------------------------------XXX-------------------------------------------*/
/*--------------------------------------XXX-------------------------------------------*/
    saidaTerminal(){ 
        let log = "";
        if(this.parent != undefined)
            log = "key: "+this.key+" key_pai:"+this.parent.key;
        else
            log = "key: "+this.key;

        /*return this.parent != undefined ? 
                      "key: "+this.key+" key_pai:"+this.parent.key : 
                      "key: "+this.key;
                    

        */
       return log;
    }
/*--------------------------------------XXX-------------------------------------------*/
    preOrder(){
        console.log(this.saidaTerminal());

        if(this.hasLeftChild())
            this.leftChild.preOrder();
        
        
        if(this.hasRightChild())
           this.rightChild.preOrder();
        
        

    }

}

