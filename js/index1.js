

let resumenM1 = document.getElementById('resumenM1')
let diasTotalesM1 = parseInt(localStorage.getItem('totalDias'))   
let yearsTotalesM1 = parseInt(localStorage.getItem('totalYears'))
let totalDxY= yearsTotalesM1 * 365
let total = 0
let numerosGenerados = []
let restantesDias = document.querySelector('.restantesDias')
let textoResumen = document.querySelector('.textoResumen')

if (diasTotalesM1 ){

    resumenM1.innerHTML += `El total de ahorro es de ${diasTotalesM1} días, es hora de empezar`
}

if(yearsTotalesM1 ) {

    resumenM1.innerHTML += `Genial, vamos con el largo plazo, de ${yearsTotalesM1} años, o ${totalDxY} días, es hora de empezar`
}





let confirmPlan = document.querySelector('.confirmPlan')
let btnAhorrapp = document.querySelector('.btnAhorrapp')
let anima = document.querySelector('.titleAnimation2')

confirmPlan.addEventListener('click', ()=>{
    resumenM1.style.display = 'none'
    btnAhorrapp.style.display = 'block'
    confirmPlan.style.display = 'none'
    anima.style.display = 'block'
    let mensaje = document.querySelector('.mensajePlan').style.display = 'none'
})
let cantidadTotal = document.querySelector('.cantidadTotal')
let ahorroDelDia = document.querySelector('.ahorroDelDia')
let btnReturn = document.querySelector ('.btnReturn')
let textoFinal = document.querySelector('.textFinal')
let textoDefinitivo = document.querySelector('.textDefinitivo')
let restan =  document.querySelector('.restan')
let mercadoPago = document.querySelector('.mercado')


btnAhorrapp.addEventListener('click', ahorro)
function checkPlanTime(){
    if(restantesDias.innerHTML === '0'){
        btnAhorrapp.style.display = 'none'
        btnReturn.style.display = 'block'
        textoDefinitivo.style.display = 'block'
        textoFinal.style.display = 'block'
        textoResumen.style.display = 'none'
        restan.style.display = 'none'
        restantesDias.style.display = 'none'
        textoFinal.innerHTML = `Lo lograste!!! hoy fue tu último dia de Ahorro`
        textoDefinitivo.innerHTML = ` Lograste reunir un total de `
        return
    }
}

function generarNumero(){
    cantidadTotal.style.display = 'block'
    ahorroDelDia.style.display = 'block'
    restan.style.display = 'block'
    textoResumen.style.display = 'block'
    anima.style.display = 'none'
    mercadoPago.style.display = 'flex'
    if(diasTotalesM1){
        let numero = Math.floor((Math.random()*diasTotalesM1) + 1);
    while(numerosGenerados.includes(numero)){
        numero = Math.floor((Math.random() * diasTotalesM1) + 1)
    }
    numerosGenerados.push(numero)
    restantesDias.innerHTML = diasTotalesM1 - numerosGenerados.length
    let dinero = numero * 10
    ahorroDelDia.innerHTML =`$ ${dinero}`
    total += dinero
    cantidadTotal.innerHTML = `$ ${total}`
    }else{
        let numero = Math.floor((Math.random()*totalDxY) + 1);
        while(numerosGenerados.includes(numero)){
            numero = Math.floor((Math.random() * totalDxY) + 1)
        }
        numerosGenerados.push(numero)
        restantesDias.innerHTML = totalDxY - numerosGenerados.length
        let dinero = numero * 10
        ahorroDelDia.innerHTML =`$ ${dinero}`
        total += dinero
        cantidadTotal.innerHTML = `$ ${total}`
    }
   

}
function ahorro(){
    generarNumero()
    checkPlanTime()
}
btnReturn.addEventListener('click',regresar)
function regresar(){
    window.location.assign('./menu.html')
    mercadoPago.style.display = 'none'
}