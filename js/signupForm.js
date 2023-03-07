import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from "./showMessage.js"

// let iniciarForm = document.querySelector('#iniciarForm')

// iniciarForm.addEventListener('submit', async (e)=>{
//     e.preventDefault()
    
//     let email = iniciarForm['loginEmail'].value
//     let password = iniciarForm['loginPassword'].value
//     console.log(email, password)

//     try {
//         let userCredentials = await UserWithEmailAndPassword(auth, email, password)
//         console.log ( userCredentials)
//     } catch (error) {
//         console.log(error)
//     }
    
// })

let registerForm = document.querySelector('#registerForm')
if (registerForm){
    registerForm.addEventListener ('submit', async (ev)=>{
    ev.preventDefault()

    let regEmail = registerForm['registerEmail'].value
    let regPassword = registerForm['registerPassword'].value

    try {
        let userRegisterCredentials = await createUserWithEmailAndPassword (auth, regEmail, regPassword)
        console.log ( userRegisterCredentials)
        window.location.assign('./menu.html')

        showMessage ("Bienvenido " + userRegisterCredentials.user.email , "success")
        
    } catch (error) {
        console.log(error.message)
        console.log(error.code)

        if(error.code === 'auth/invalid-email'){
            showMessage("Email incorrecto", "error")
        }else if (error.code === 'auth/weak-password'){
            showMessage('Password muy débil', 'error')
        }else if(error.code === 'auth/email-already-in-use'){
            showMessage('Correo registrado anteriormente' , 'error')
        }else if (error.code){
            showMessage('Error con el registro', 'error')
        }
        
    }
})
}
