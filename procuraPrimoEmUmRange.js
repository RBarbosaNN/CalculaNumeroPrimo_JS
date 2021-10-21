/*
    Identifica números primos entre nInicial e nFinal e apresenta os números primos em uma lista só de primos!
*/

let valorDaRaiz = 0;
let listaDeRangeRaiz = [];
let listaDeCandidatoAPrimo = [];
let listaDeMedalhistasPrimo = [];
let numeroDaVez = 0;
let primeiroN = 2;
let ultimoN = 30;
let contaSeRestoZero = 0;
let rastreador = 0;
let ctrlDoWhile = 0;

function geraListaRaiz() {
    for (let i = 1; i <= valorDaRaiz; i++) {
        listaDeRangeRaiz.push(i);
    }
    return listaDeRangeRaiz;
}

function geraListaDeCandidatos(start, end) {
    for (let numeroPar = start; numeroPar <= end; numeroPar++) {
        if ((numeroPar % 2 === 0) && (numeroPar !== 2)) {
            continue;
        } else {
            listaDeCandidatoAPrimo.push(numeroPar);
        }
    }
    return listaDeCandidatoAPrimo;
}

function percorreListaDeCandidatos() {
    for (let numeroCandidato of listaDeCandidatoAPrimo) {
        verificaSePrimo(numeroCandidato);
    }
}

function verificaSePrimo(nDv) {
    let testaN = nDv;
    let resto = 0;
    listaDeRangeRaiz = [];
    contaSeRestoZero = 0;
    valorDaRaiz = Math.sqrt(testaN);
    listaDeRangeRaiz = geraListaRaiz();
    for (let numero of listaDeRangeRaiz) {
        resto = testaN % numero;
        if (resto === 0) {
            contaSeRestoZero += 1;
        }
        if (contaSeRestoZero >= 2) {
            break;
        }
        if ((numero >= listaDeRangeRaiz.length) && (contaSeRestoZero <= 2)) {
            listaDeMedalhistasPrimo.push(testaN);
        }
    }
}

function inicioDaJornada(alfa, omega) {
    if (alfa > omega) {
        console.log('O número final precisa ser maior que o número inicial!'); 
    } else if (alfa === omega) {
        alfa = omega;
        listaDeCandidatoAPrimo = geraListaDeCandidatos(alfa, omega);
        percorreListaDeCandidatos();
        console.log(`Dentro do range entre ${primeiroN} e ${ultimoN} temos ${listaDeMedalhistasPrimo.length} números primos. Que são eles: ${listaDeMedalhistasPrimo}`);
    } else {
        listaDeCandidatoAPrimo = geraListaDeCandidatos(alfa, omega);
        percorreListaDeCandidatos();
        console.log(`Dentro do range entre ${primeiroN} e ${ultimoN} temos ${listaDeMedalhistasPrimo.length} números primos. Que são eles: ${listaDeMedalhistasPrimo}`);
    }
}

inicioDaJornada(primeiroN, ultimoN);