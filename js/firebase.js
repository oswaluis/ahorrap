        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
        import { getFirestore, collection, addDoc, getDocs , onSnapshot} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        import {getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"


        // Your web app's Firebase configuration

        
        const firebaseConfig = {
            apiKey: "AIzaSyC03ubOTXMq3hZmEI6lI2Hmdml7inHE4B0",
            authDomain: "ahorrap-app.firebaseapp.com",
            projectId: "ahorrap-app",
            storageBucket: "ahorrap-app.appspot.com",
            messagingSenderId: "676423084799",
            appId: "1:676423084799:web:6fd53b8738ede6a7af3aca"
        };

        // Initialize Firebase
        export const app = initializeApp(firebaseConfig);
        export const auth = getAuth(app)

        const db = getFirestore()
        export const saveTimeDia = (diasFormulario) =>{
            addDoc(collection(db, 'dias'),{diasFormulario})
        }
        export const saveTimeYear = (yearsFormulario) =>{
            addDoc(collection(db,'años'),{yearsFormulario})
        }
        export const saveObj = (pesosM2,diasM2) =>{
            addDoc(collection(db,'total de pesos'),{pesosM2})
            addDoc(collection(db, 'total de dias'), {diasM2})
        }

        export let getDias = ()=> getDocs(collection(db,'dias'))

        export let getYears = ()=> getDocs(collection(db,'años'))

        export let onGetDias = ()=> onSnapshot()