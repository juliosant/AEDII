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
    
    isLeftChild(){
      return this.parent !== null && this.key < this.parent.key;
    }

    isRightChild(){
     return this.parent !== null && this.key > this.parent.key;
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

    inOrder(operation){
        if(this.hasLeftChild()){
            this.leftChild.inOrder(operation);        
        }
        operation.call(this);

        if(this.hasRightChild()){
            this.rightChild.inOrder(operation);
        }
        
    }
    
    breadthFirst(){
        let vetor = [];
        vetor .push(this);

        while(vetor.length > 0){
            let current = vetor.shift();
            console.log(current.key);

            if(current.hasLeftChild()){
                vetor.push(current.leftChild);
            }
            if(current.hasRightChild()){
                vetor.push(current.rightChild);
            }
        }
    }

    printKey(){
        console.log(this.key);
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
    
    remove(){
        let founded = this.isLeaf();
        if(founded === true){
            if(this.isLeftChild()){
            	this.parent.leftChild  = null;
            	this.parent = null;
            }
            else{
                  if(this.isRighttChild()){
            	      this.parent.rightChild  = null;
            	      this.parent = null;
                  }
            }
        }
        else{
            if(this.hasBothChild()){
                if(this.isRightChild()){
                    this.leftChild.parent = this.parent;
                    this.rightChild.parent = this.leftChild;
                    this.leftChild.rightChild = this.rightChild;
                    this.parent.rightChild = this.leftChild;
                }
                else{
                    if(this.isLeftChild()){
                        this.rightChild.parent = this.parent;
                        this.leftChild.parent = this.rightChild;
                        this.rightChild.leftChild = this.leftChild;
                        this.parent.leftChild = this.rightChild;
                    }
                }
                this.leftChild = null;
                this.rightChild = null;
            }
            
            else{
	            if(this.hasLeftChild()){
	            if(this.isLeftChild()){
	                this.leftChild.parent = this.parent;
	                this.parent.leftChild = this.leftChild;
	                this.leftChild = null;
	        }
	        else{
	            if(this.hasRightChild()){
	                this.leftRight.parent = this.parent;
	                this.parent.rightChild = this.rightChild; 
	                this.rightChild = null;     
	            }
	        }
	            this.parent = null;
                }
            }
        }
    }

    sum(){ //<-----------Q5 VP1 2
        let total = 0;
        if(this.hasLeftChild()){
            total += this.leftChild.sum();
        }
        if(this.hasRightChild()){
            total += this.rightChild.sum();
        }
        return total += this.key;

    }
}

function printKey(){
    console.log(this.key);
}

let root = null;
let number = [10,7,13,15,12,6];

number.forEach(function (number) {
    if (root === null) {
        root = new Node(number);

    } else {
        root.add(new Node(number));
    }
});

//console.log(root);
//console.log(root.inOrder(printKey));

//console.log(root);
//console.log(root.sum())

console.log(root.breadthFirst());

