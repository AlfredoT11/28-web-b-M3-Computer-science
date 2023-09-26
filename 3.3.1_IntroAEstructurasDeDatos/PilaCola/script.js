class Stack{
    constructor(){
        this.stack = [];
    }

    push(value){
        this.stack.push(value);
    }

    pop(){
        if(this.stack.length > 0){
            return this.stack.pop();
        }else{
            return null;
        }
    }

    peek(){
        if(this.stack.length > 0){
            return this.stack[this.stack.length - 1]; 
        }else{
            return null;
        }
       
    }

    getSize(){
        return this.stack.length;
    }
}