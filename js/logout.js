import { signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { auth } from "./firebase.js"

let btnCerrar = document.querySelector('#logout')
if(btnCerrar){
    btnCerrar.addEventListener('click', async()=>{
    await signOut(auth)
    console.log('logout')
    window.location.assign('./index.html')
})
}