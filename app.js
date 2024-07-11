let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1 ? 'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        }
        else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length ==10) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //Generar el numero aleatorio
    //inicializar el número de intentos
    condicionesIniciales();

    //deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();

/*
function calcularIMC(peso, estatura){
    imc = 68 / Math.pow(1.65, 2);
    console.log(`EL IMC es ${imc}`);
}


function cambioDivisa(peso, dolar){
    dolar = 4048;
    console.log(tasa = dolar * peso);
}

cambioDivisa(65);
*/

let listaGenerica = [];

listaGenerica = ("JavaScript","C","C++","Kotlin","Python");
listaGenerica.push("Java", "Ruby", "GoLang");

/*
function mostrarListaLenguajes(){
    console.log(listaGenerica.reverse());
}
*/

function calcularPromedio(){
    calcularPromedio.push(2,5,5);
    let promedio = calcularPromedio()/3;

    console.log(calcularPromedio);
}