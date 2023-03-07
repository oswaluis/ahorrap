import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"

let googleLogin = document.querySelector('#googleLogin')

if(googleLogin){
    googleLogin.addEventListener('click', async()=>{
        let provider = new GoogleAuthProvider()
        try {
            const credential = await signInWithPopup(auth, provider)
            console.log(credential)
            window.location.assign('./menu.html')
            showMessage ("Bienvenido " + credential.user.displayName , "success")
        } catch (error) {
            console.log(error)
        }
        
    })
}