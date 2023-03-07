import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"


let signInForm = document.querySelector('#iniciarForm')
// let loginEmail = document.querySelector('#loginEmail')
// let loginPassword = document.querySelector('#loginPassword')
if(signInForm){
    signInForm.addEventListener('submit', async (e)=>{
    e.preventDefault()

    let email = signInForm['loginEmail'].value
    let password = signInForm['loginPassword'].value

    try {
        let credential = await signInWithEmailAndPassword(auth, email , password)
        
        console.log(credential)
        window.location.assign('./menu.html')
        showMessage ("Bienvenido " + credential.user.email , "success")
    } catch (error) {
        if(error.code === 'auth/wrong-password'){
            showMessage("contraseña invalida", "error")
        }else if (error.code === 'auth/user-not-found'){
            showMessage('correo no encontrado', 'error')
        }else if (error.code){
            showMessage('Error con el registro', 'error')
        }
        console.log(error)
    }
    

})
}
