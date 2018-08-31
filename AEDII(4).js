/* [0] */

class Node{
    constructor(key, parent = null, leftChild = null, rightChild = null){
        this.key = key; //"this" serve para armazenar o valor de key, para possível reutilização.
        this.parent = parent;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
        /* OBS: O valor armazenado é sempre o do nó raiz */
    }

/*--------------------------------------XXX-------------------------------------------*/
/* [1] */

    hasLeftChild(){ 
        return this.leftChild != null;
    } /* Se caso existir nó-filho à esquerda, retornará true. se não houver nó à esquerda, 
    retornará false.  */

    hasRightChild(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        return this.rightChild != null;
    }/* Se caso existir nó-filho à direita, retornará true. se não houver nó à esquerda, 
    retornará false.  */

    hasBothChild(){
        return this.hasLeftChild() && this.hasRightChild();
    }

    isLeaf(){
        if(this.parent != null){
            return this.leftChild === null && this.rightChild === null;
        }
    }

    maximum(){
        if(this.hasRightChild())
            this.rightChild.maximum();
        
        else
            console.log(this.key);
    }

    minimum(){
        if(this.hasLeftChild())
            this.leftChild.minimum();
        
        else
            console.log(this.key);

    }
/*--------------------------------------XXX-------------------------------------------*/

/*--------------------------------------XXX-------------------------------------------*/
/* [2] */

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
/* [3] */

    preOrder(){
        console.log(this.saidaTerminal());

        if(this.hasLeftChild())
            this.leftChild.preOrder();
        
        
        if(this.hasRightChild())
           this.rightChild.preOrder();
        
        

    }

    posOrder(){
        if(this.hasLeftChild()){
            this.leftChild.posOrder();
            //console.log(this.saidaTerminal);
        }
        if(this.hasRightChild()){
            this.rightChild.posOrder();
        }
        console.log(this.saidaTerminal());
    }

    inOrder(){
        if(this.hasLeftChild()){
            this.leftChild.inOrder();        
        }
        if(this.hasRightChild()){
            console.log(this);
            this.rightChild.inOrder();
        }
        else{
            console.log(this);
        }
    }

    inWidth(){
        let fila = [10,7,13,12,6,15];
        fila.push();
    }

/*--------------------------------------XXX-------------------------------------------*/
    search(key){
        if(key === this.key){
            return this;

        }
        else{
            if(key < this.key){
                if(this.hasLeftChild()){
                    return this.leftChild.search(key);
                }
            }
            else{
                if(key > this.key){
                    if(this.hasRightChild()){
                        return this.rightChild.search(key);
                    }
                }
            }
        
        }

    }


    

}