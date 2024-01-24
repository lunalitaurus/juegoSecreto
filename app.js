let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;  
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto)
    if(numeroDeUsuario === numeroSecreto){
asignarTextoElemento("p", `¡Acertaste el número! :) En ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");
} else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor")
        } else {
            asignarTextoElemento("p", "El número secreto es mayor")
        }
    }
    intentos++; 
    limpiarCaja();
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = ""; 
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Mostarr número generado
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    // Preguntar si ya sorteamos todos los númros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento ("p", "Ya se sortearon todos los números posibles");
    } else {
        //si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

//Poner condiciones iniciales en una función
function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

//Botón de nuevo juego
function reiniciarJuego(){
    // Limpiar caja
    limpiarCaja();
    //Indicar intervalo de número
    //Generar número aleatorio
    //Iniciar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true")

}

condicionesIniciales();

