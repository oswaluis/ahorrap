// import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
// import { auth } from './firebase.js'
import './firebase.js'
import './signupForm.js'
import './logout.js'
import './singinForm.js'
import './googleLogin.js'
import { saveTimeDia, saveTimeYear } from './firebase.js'


// funcionalidad para entrar al ahorro por tiempo
let containerMain = document.querySelector('.containerMain')
let metodoTiempo = document.querySelector('.metodoTiempo')
let btnGoBack = document.querySelector('.btnGoBack')
let formTime = document.querySelector('.time')
let formMeta = document.querySelector('.meta')
let animacionPrincipal = document.querySelector ('.animacionPrincipal')
if(metodoTiempo){
    metodoTiempo.addEventListener ('click', ingresarM1)
}

function ingresarM1(){
    containerMain.style.display = 'none'
    formTime.style.display = 'flex';
    btnGoBack.style.display = 'block'
    animacionPrincipal.style.display = 'none'
}

function goBack(){
    window.location.assign('./menu.html')
}
if(btnGoBack){
    btnGoBack.addEventListener('click', goBack)
}


let dias = document.querySelector('.btnD')
let year = document.querySelector('.btnY')
let qtyYear = document.querySelector('.inputY')
let qtydias = document.querySelector('.inputD')
if (dias){
    dias.addEventListener('click', ()=>{
    year.classList.toggle('btnDisable')
    qtydias.classList.toggle('inputsActive')
    dias.classList.toggle('btnActive')
})
}
if(year){
    
    year.addEventListener('click', ()=>{
    dias.classList.toggle('btnDisable')
    qtyYear.classList.toggle('inputsActive')
    year.classList.toggle('btnActive')
})
}


// funcionalidad para entrar al ahorro por objetivo

let metodoObjetivo = document.querySelector('.metodoObjetivo')
if(metodoObjetivo){
    metodoObjetivo.addEventListener('click', ingresarM2)
}


function ingresarM2(){
    containerMain.style.display = 'none'
    formMeta.style.display = 'flex'
    btnGoBack.style.display = 'block'
    animacionPrincipal.style.display = 'none'

}

// funcionalidad para entrar a la ejecucion de los planes

//plan ahorro

    // let buttonTimeConfirm = document.querySelector('.btnTimeConfirm')
    // if(buttonTimeConfirm){
    //     buttonTimeConfirm.addEventListener('click', (e)=>{
    //     e.preventDefault();
    //     recibirDatosM1()
    //     window.location.assign('./planAhorro.html');
    // })
    // }
    
        
       
    // function recibirDatosM1() {
    //     let totalDiasM1 = document.querySelector('.inputD').value
    //     let totalYearM1 = document.querySelector('.inputY').value
    //     localStorage.setItem('totalDias', totalDiasM1)
    //     localStorage.setItem('totalYears', totalYearM1)
        
    //     return totalDiasM1, totalYearM1
        

    // }


    let timeForm = document.querySelector('#timeForm')
    if(timeForm){
        timeForm.addEventListener('submit', (e)=>{
            e.preventDefault()
            let diasFormulario = document.querySelector('.inputD').value
            let yearsFormulario = document.querySelector('#yearsForm').value
            //  window.location.assign('./planAhorro.html')
            if(diasFormulario){
                saveTimeDia(diasFormulario)
            }else if(yearsFormulario){
                saveTimeYear(yearsFormulario)
            }
            
            
            // console.log(diasFormulario, yearsFormulario)
            window.location.assign('./planAhorro.html')
            timeForm.reset()
    })
    }


//-------------------------------- Parte Objetivo

    let buttonObjConfirm = document.querySelector('.btnObjConfirm')
    if(buttonObjConfirm){
        buttonObjConfirm.addEventListener('click', (e1)=>{
            e1.preventDefault();
            recibirDatosM2();
            window.location.assign('./planObjetivo.html')
        })
    }
    function recibirDatosM2(){
        let totalDiasM2 = document.getElementById('objDias').value
        let totalPesosM2 = document.getElementById('objPesos').value
        localStorage.setItem('totalDiasM2', totalDiasM2)
        localStorage.setItem('totalPesosM2', totalPesosM2)

        return totalDiasM2, totalPesosM2
    }

    
    // onAuthStateChanged(auth, async (user)=>{
    //     if(user){

    //     }else{

    //     }
    //     console.log(user)
    // })


//     let btnCerrar = document.querySelector('#logout')
// if(btnCerrar){
//     btnCerrar.addEventListener('click', ()=>{
//     console.log('logout')
// })
// }
