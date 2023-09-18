// Protitpos

//Persona
// características
//  -nombre
//  -genero
//  -edad
//  -nacionalidad
// acciones
//  -caminar
//  -dormir
//  -sufrir
//  -saludar

console.log('Ejecución de prototipos.js');

function PersonaProtipo(nombre, genero, edad, nacionalidad){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
    this.edad = edad;
    this.nacionalidad = nacionalidad;

    //Métodos
    // Forma 1 de crear métodos para un prototipo.
    this.caminar = () => {
        console.log(`Yo ${this.nombre} estoy caminando`);
    }
}

// Forma 2 de crear métodos para un prototipo
// para agregar métodos de esta forma no se puede hacer con funciones flecha.
PersonaProtipo.prototype.saludar = function(){
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
}

// Creando objetos
const personaAlfredoPrototipo = new PersonaProtipo('Alfredo', 'Masculino', 24, 'Mexicana');
const personaOscarPrototipo = new PersonaProtipo('Oscar', 'Masculino', 33, 'Mexicana');
const personaRafaelPrototipo = new PersonaProtipo('Rafael', 'Masculino', 22, 'Mexicana');

personaAlfredoPrototipo.caminar();
personaRafaelPrototipo.caminar();

personaAlfredoPrototipo.saludar();
