import './firebase.js'
import {saveObj} from './firebase.js'
let resumenM2 = document.getElementById('resumenM2')
let pesosM2 = parseInt(localStorage.getItem('totalPesosM2'))
let diasM2 = parseInt(localStorage.getItem('totalDiasM2'))
let restantesDias2 = document.querySelector('.restantesDias2')
resumenM2.innerHTML += `Perfecto tenemos que ahorrar $ ${pesosM2} en ${diasM2} días, hay que comenzar!!!`
saveObj(pesosM2,diasM2)

let btnConfirmObj = document.querySelector('.confirmObj')
let btnAhorrapp2 = document.querySelector('.btnAhorrapp2')
let btnReturn2 = document.querySelector('.btnReturn2')
let textoFinal2 = document.querySelector('.textFinal2')
let textoDefinitivo2 = document.querySelector('.textDefinitivo2')
let animation = document.querySelector('.titleAnimation3')
let mercadoPago2 = document.querySelector('.mercado2')

btnConfirmObj.addEventListener('click', ()=>{
    btnConfirmObj.style.display = 'none'
    btnAhorrapp2.style.display = 'block'
    animation.style.display = 'block'
    document.querySelector('.mensajeObj').style.display = 'none'
})

let valorDiarioPromedio = (pesosM2 / diasM2)
let valoresAleatorios = []
let suma = 0;
for (let i = 0 ; i < diasM2; i++){
    let rango = valorDiarioPromedio * 0.1;
    let min = valorDiarioPromedio - rango;
    let max = valorDiarioPromedio + rango
    let valorAleatorio = Math.round(Math.random() * (max - min) + min);
    suma += valorAleatorio;
    valoresAleatorios.push(valorAleatorio);
    if( i === diasM2 - 1){
        valoresAleatorios[i] += (pesosM2 - suma)
    }
}   

let ahorroDelDia2 = document.querySelector('.ahorroDelDia2')
let restan2 = document.querySelector('.restan2')
let textoResumen2 = document.querySelector('.textoResumen2')
let cantidadTotal2 = document.querySelector('.cantidadTotal2')
let valoresAleatoriosNoRepeat = valoresAleatorios.slice()
let acumulado = 0

btnAhorrapp2.addEventListener('click',objetivo)
function checkPlanObj(){
    if(restantesDias2.innerHTML ==='0'){
        btnAhorrapp2.style.display = 'none'
        btnReturn2.style.display = 'block'
        restan2.style.display = 'none'
        textoDefinitivo2.style.display = 'block'
        textoFinal2.style.display = 'block'
        textoResumen2.style.display = 'none'
        textoFinal2.innerHTML = `¡¡Lo lograste!! Hoy fue tu último dia de Ahorro`
        textoDefinitivo2.innerHTML = `Objetivo cumplido reunido el total de `
        return
    }
}

    function generarAhorro(){
    resumenM2.style.display = 'none'
    ahorroDelDia2.style.display = 'block'
    restan2.style.display = 'block'
    cantidadTotal2.style.display = 'block'
    textoResumen2.style.display = 'block'
    animation.style.display = 'none'
    mercadoPago2.style.display = 'flex'
    let indiceAleatorio = Math.floor(Math.random() * valoresAleatoriosNoRepeat.length);
    let valorRandom = valoresAleatoriosNoRepeat[indiceAleatorio]
    valoresAleatoriosNoRepeat.splice(indiceAleatorio, 1)
    acumulado += valorRandom
    ahorroDelDia2.innerHTML = `$ ${valorRandom}`
    restantesDias2.innerHTML = `${valoresAleatoriosNoRepeat.length}`
    cantidadTotal2.innerHTML = `$ ${acumulado}`
}

function objetivo(){
    generarAhorro()
    checkPlanObj()
}

btnReturn2.addEventListener('click', regresar2)
function regresar2(){
    window.location.assign('./menu.html')
    mercadoPago2.style.display = 'none'
}