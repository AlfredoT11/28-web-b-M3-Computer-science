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

const myStack = new Stack();

myStack.push('Manzana');
myStack.push('Pera');
myStack.push('Durazno');
myStack.push('Fresa');
myStack.push('Melón');
myStack.push('Sandía');

myStack.push(2);
myStack.push(1);

console.log(`El tope de mi pila es: ${myStack.peek()}`); //Debería verse el 1.
myStack.pop();
console.log(`El tope de mi pila es: ${myStack.peek()}`); //Debería verse el 2.
myStack.pop();
console.log(`El tope de mi pila es: ${myStack.peek()}`); //Debería verse el 3.
//En este punto la pila está vacía, por lo tanto, se regresa un nulo.
myStack.pop();
console.log(`El tope de mi pila es: ${myStack.peek()}`); 


/*
const pila  = new Pila();

pila.push("Manzana");
pila.push("Cebolla");
pila.push("Apio");
pila.push("Naranja");
pila.push("Papaya");
pila.push("Sandía");
pila.push("Melón");

pila.toString();


function itemsStack(pila, num){
    const newArray = [];
    
    for (let i = 0; i < num; i++) {
        newArray.push(pila.pop());
    }

    return newArray;
}


let newArreglo = itemsStack(pila, 4);
console.log(newArreglo);
*/


console.log('Intento Erick');

const pila  = new Stack();

pila.push("Manzana");
pila.push("Cebolla");
pila.push("Apio");
pila.push("Naranja");
pila.push("Papaya");
pila.push("Sandía");
pila.push("Melón");


function itemsStack(pila, num){
    const newArray = [];
    
    for (let i = 0; i < num; i++) {
        newArray.push(pila.pop());
    }

    return newArray;
}


let newArreglo = itemsStack(pila, 4);
console.log(newArreglo);


class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(value){
        this.queue.push(value);
    }

    dequeue(){
        if(this.queue.length > 0){
            return this.queue.shift();
        }else{
            return null;
        }
    }

    peek(){
        if(this.queue.length > 0){
            return this.queue[0];
        }else{
            return null;
        }
    }

    back(){
        if(this.queue.length > 0){
            return this.queue[this.queue.length - 1];
        }else{
            return null;
        }
    }

    getSize(){
        return this.queue.length;
    }
}

console.log('Prueba de colas');

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);

console.log(myQueue.peek());
myQueue.dequeue();

console.log(myQueue.peek());
myQueue.dequeue();

console.log(myQueue.peek());
myQueue.dequeue();

console.log(myQueue.peek());
myQueue.dequeue();
