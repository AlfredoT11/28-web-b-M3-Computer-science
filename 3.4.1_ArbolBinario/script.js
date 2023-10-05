//Se crea una clase para los nodos del árbol binario.
//Notar que tenemos un atributo para el hijo izquierdo y otro para el derecho.
class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}

// Se crea una clase para el Árbol binario.
// Su único atributo es la referencia a su raíz.
class ArbolBinario {
    constructor() {
        this.raiz = null;
    }

    insertar(valor) {

        // Validas que exista una raíz. Si no, la creamos.
        if (this.raiz === null) {
            let nuevoNodo = new Nodo(valor);
            this.raiz = nuevoNodo;
        } else {

            //Si ya existe la raíz, empezamos a recorrer el árbol.
            let nodoActual = this.raiz;
            while (true) {

                //Si el valor del nodo en el que estamos parados es MENOR
                // al valor que queremos ingresar, nos movemos a la IZQUIERDA.
                if (valor < nodoActual.valor) {
                    // Si el nodo en el que estamos parados no tiene un hijo
                    // izquierdo, entonces el nuevo nodo será su hijo izquierdo.
                    if (nodoActual.izquierdo === null) {
                        let nuevoNodo = new Nodo(valor);
                        nodoActual.izquierdo = nuevoNodo;
                        return;
                    } else {
                        nodoActual = nodoActual.izquierdo;
                    }

                //Si el valor del nodo en el que estamos parados es MAYOR
                // al valor que queremos ingresar, nos movemos a la DERECHA.                    
                }else{
                    if(nodoActual.derecho === null){
                        // Si el nodo en el que estamos parados no tiene un hijo
                        // derecho, entonces el nuevo nodo será su hijo derecho.    
                        let nuevoNodo = new Nodo(valor);
                        nodoActual.derecho = nuevoNodo;
                        return;
                    }else{
                        nodoActual = nodoActual.derecho;
                    }
                }
            }
        }
    }

    buscar(valor){
        let nodoActual = this.raiz;

        // Si la raíz no existe, regresamos un false ya que el árbol está
        // vacío.
        if(nodoActual === null){
            return false;
        }

        // Empezamos a movernos en el árbol hasta que lleguemos a una hoja.
        while(nodoActual !== null){

            //Si el valor del nodo en el que estamos parados es igual
            // al valor que estamos buscando, entonces regresamos true.
            if(nodoActual.valor === valor){
                return true;
            }

            // Si el valor que estamos buscando es menor al valor del nodo
            // en el que estamos parados, nos movemos a la izquierda.
            if(valor < nodoActual.valor){
                nodoActual = nodoActual.izquierdo;

            //Si no, nos movemos a la derecha.
            }else{
                nodoActual = nodoActual.derecho;
            }
        }
        return false;
    }

    preorder(){

        console.log('Preorder: ');

        if(this.raiz === null){
            return;
        }

        const pilaAuxiliar = [];
        let nodoActual = this.raiz;

        while(nodoActual !== null || pilaAuxiliar.length > 0){
            while(nodoActual != null){
                pilaAuxiliar.push(nodoActual);
                console.log(`${nodoActual.valor} `);
                nodoActual = nodoActual.izquierdo;
            }

            nodoActual = pilaAuxiliar.pop();
            nodoActual = nodoActual.derecho;

        }

    }

    inorder(){

        console.log('Inorder: ');

        if(this.raiz === null){
            return;
        }

        const pilaAuxiliar = [];
        let nodoActual = this.raiz;

        while(nodoActual !== null || pilaAuxiliar.length > 0){
            while(nodoActual != null){
                pilaAuxiliar.push(nodoActual);
                nodoActual = nodoActual.izquierdo;
            }

            nodoActual = pilaAuxiliar.pop();
            console.log(`${nodoActual.valor} `);
            nodoActual = nodoActual.derecho;

        }

    }
}

let arbolBinario = new ArbolBinario();
arbolBinario.insertar(5);
arbolBinario.insertar(3);
arbolBinario.insertar(4);
arbolBinario.insertar(7);
arbolBinario.insertar(6);
arbolBinario.insertar(7);

let valorABuscar = 4;
console.log(`El valor ${valorABuscar} existe: ${arbolBinario.buscar(valorABuscar)}`);

valorABuscar = 5;
console.log(`El valor ${valorABuscar} existe: ${arbolBinario.buscar(valorABuscar)}`);

valorABuscar = 7;
console.log(`El valor ${valorABuscar} existe: ${arbolBinario.buscar(valorABuscar)}`);

valorABuscar = 1;
console.log(`El valor ${valorABuscar} existe: ${arbolBinario.buscar(valorABuscar)}`);

valorABuscar = 11;
console.log(`El valor ${valorABuscar} existe: ${arbolBinario.buscar(valorABuscar)}`);

arbolBinario.preorder();
arbolBinario.inorder();