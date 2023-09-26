function mostrarMensajeC(){
    console.log('Mensaje C');
}

function mostrarMensajeB(){
    mostrarMensajeC();
    console.log('Mensaje B');
}

function mostrarMensajeA(){
    mostrarMensajeB();
    console.log('Mensaje A');
}

mostrarMensajeA();
