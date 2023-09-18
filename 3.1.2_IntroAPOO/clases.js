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
//  -platicar

console.log('Ejecución de clases.js');

class Ojos{
    constructor(tamanio, color){
        this.tamanio = tamanio;
        this.color = color;
    }
}

class Persona{

    // Constructor
    constructor(nombre, genero, edad, nacionalidad, tamanio, color='Café obscuro'){
        this.nombre = nombre;
        this.genero = genero;
        this.edad = edad;
        this.nacionalidad = nacionalidad;
        this.ojos = new Ojos(tamanio, color); // Esto se conoce como "Composición".
    }

    caminar(){
        console.log(`Yo ${this.nombre} estoy caminando`);
    }

    platicar(persona){
        console.log(`Yo ${this.nombre} estoy platicando con ${persona.nombre}`);
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre} y mis ojos son color ${this.ojos.color}`);
    }

    moverse(){
        console.log(`Soy ${this.nombre} y me estoy moviendo como persona`);
    }

    moverseComoPersona(){
        console.log(`Soy ${this.nombre} y me estoy moviendo como persona`);
    }

    observarPersona(personaObservada){
        personaObservada.moverse();
    }

}

// atributos específicos de un Artita
//  -- anios de experiencia
//  -- número de obras
class Artista extends Persona{
    constructor(nombre, genero, edad, nacionalidad, tamanio, color, aniosExperiencia, numeroObras){
        super(nombre, genero, edad, nacionalidad, tamanio, color);
        this.aniosExperiencia = aniosExperiencia;
        this.numeroObras = numeroObras;
    }

    crearObra(){
        console.log(`Yo ${this.nombre} estoy mi obra número ${this.numeroObras}`);
        this.numeroObras++;
        console.log(`Ahora tengoo ${this.numeroObras} obras`);
    }
    
    moverseComoArtista(){
        console.log(`Soy ${this.nombre} y me estoy moviendo como artista`);
    }

    moverse(){
        console.log(`Soy ${this.nombre} y me estoy moviendo como artista`);
    }
}

class Doctor extends Persona{
    constructor(nombre, genero, edad, nacionalidad, tamanio, color){
        super(nombre, genero, edad, nacionalidad, tamanio, color);
    }

    moverseComoDoctor(){
        console.log(`Soy ${this.nombre} y me estoy moviendo como doctor`);
    }

    moverse(){
        console.log(`Soy ${this.nombre} y me estoy moviendo como doctor`);
    }
}

const personaAlfredo = new Persona('Alfredo', 'Masculino', 24, 'Mexicana', 'Medianos');
const personaOscar = new Persona('Oscar', 'Masculino', 33, 'Mexicana', 'Grandes', 'Negro');
const personaRafael = new Persona('Rafael', 'Masculino', 22, 'Mexicana', 'Chiquitos');

personaOscar.caminar();
personaOscar.platicar(personaRafael);
personaOscar.saludar();

personaRafael.saludar();

const artistaKatia = new Artista('Katia', 'Femenino', 25, 'Mexicana', 'Grandes', 'Café', 10, 15);
artistaKatia.crearObra();

artistaKatia.saludar();

const doctorHouse = new Doctor('Gregory', 'Masculino', 40, 'Americano', 'Grandes', 'Café');

personaAlfredo.observarPersona(personaOscar);
