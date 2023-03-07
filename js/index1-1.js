import './firebase.js'
import { getDias, getYears } from './firebase.js'


let diasActuales = await getDias()
diasActuales.forEach(doc=>{
    let diasT = doc.data(diasActuales.diasFormulario)
    console.log(diasT)
})

let yearsActuales = await getYears()
yearsActuales.forEach(doc=>{
    let diasT = doc.data(yearsActuales.yearsFormulario)
    console.log(diasT)
})