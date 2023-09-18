function sumaNormal(a, b) {
    return a + b;
}

// Declaración de función flecha. (arrow function)
let sumaFlecha = (a, b) => {
    return a + b;
}

// Valores por defecto para función.
let sumaFlechaSimplificada = (a = 0, b = 0) => a + b;

function mensajeCronometro() {
    console.log('Cronometro terminado');
}

setTimeout(mensajeCronometro, 2000);
setTimeout(() => { console.log('Cronometro terminado') }, 2000);

let a = 10;
let b = 5;

// Uso de template literals
console.log(`La suma de ${a} + ${b} es ${sumaNormal(a, b)}`);
console.log(`La suma de ${a} + ${b} es ${sumaFlecha(a, b)} con función flecha`);
console.log(`La suma de ${a} + ${b} es ${sumaFlechaSimplificada(a, b)} con función flecha simplificada`);

console.log('La suma de ' + a + ' + ' + b + ' es ' + sumaFlecha(a, b));

// Destructuración
let colores = ['Rojo', 'Verde', 'Azul'];
let rojo = colores[0];
let verde = colores[1];
let azul = colores[2];
console.log(`${rojo} ${verde} ${azul}`);

let [ro, ve, az] = colores;
console.log(`${ro} ${ve} ${az}`);


let persona = {
    edad: 24,
    estatura: 180,
    nombre: 'Juan'
};

let edadPersona = persona.edad;
let estaturaPersona = persona.estatura;
let nombrePersona = persona.nombre;

let { estatura, edad, nombre } = persona;
console.log(`${edad} ${estatura} ${nombre}`);


// Spread operator
let frutas = ['Pera', 'Manzana', 'Plátano'];
console.log(frutas);
let comida = [...frutas, 'Hamburguesa', 'Zanahoria'];
console.log(comida);
let palabras = [...comida, 'Lógica', 'Programación'];
console.log(palabras);

// Si agregamos un elemento al arreglo original, los arreglos
// creados a partir de él con spread no se modifican.
frutas.push('Aguacate');
console.log(frutas);
console.log(comida);

let frutasRepetidas = [...frutas, ...frutas];
console.log(frutasRepetidas);

const alumno = {
    promedio: 10,
    turno: 'Vespertino',
    ...persona
}

console.log(alumno);
