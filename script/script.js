
window.addEventListener("load", ()=>{
    /* Script Map*/
var map = L.map('map').setView([4.72608, -74.112289], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([4.72608, -74.112289]).addTo(map)
    .bindPopup('CLOWeb Ciudadela Colsubsidio - Bogota')
    .openPopup();

})





// Variable Globales
var nomb = document.querySelector("#nombre")
var apell = document.querySelector("#Apellido")
var email = document.querySelector("#Email")
var error = document.querySelector("#error")
var titleError = document.querySelector("#error__mensaje")
var oneDay = document.querySelector("#un__dia")
var everyDays = document.querySelector("#todos__dias")
var twoDays = document.querySelector("#dos__dias")
var days = document.querySelectorAll(".count")
var form = document.querySelector("#formu")
var resum = document.querySelector("#resumen")
var regalo = document.querySelector("#regalo")
var camis = document.querySelector("#camisa")
var etiqu = document.querySelector("#etiqueta")
let boxPagar = document.querySelector("#total")
let btnCalc = document.querySelector("#calcular")

console.log(form)

// Funciones
function mesajeError(){
    if(this.value == ""){
        this.style.border = "1px solid red"
    }else{
        this.style.border = "1px solid gray"
        
    }
}

function showDays(){
    let unDia = oneDay.value
    let TDias = everyDays.value
    let DDias = twoDays.value

    let daysSelection = [];

    if(unDia >= 1){
        daysSelection.push("viernes")  
    }
    if(TDias >= 1){
        daysSelection.push("viernes", "sabado", "domingo")
        
    }
    if(DDias >= 1){
        daysSelection.push("viernes", "sabado")
        
    }

    for(let i in daysSelection){
        //console.log(daysSelection)
        let boxConference = document.getElementById(daysSelection[i])
        boxConference.style.display = "block"
    }
}

function calcularResumen(e){

    e.preventDefault()



    let nomVal = nomb.value
    let apellVal = apell.value
    let emailVal = email.value
    let regaloVAl = regalo.value
    let state = true
    let mError = ""
    let unDia = parseInt(oneDay.value,10)
    let TDias = parseInt(everyDays.value,10)
    let DDias = parseInt(twoDays.value,10)
    let camiset = parseInt(camis.value,10)
    let tag = parseInt(etiqu.value,10)
    let stateCant = true
    let arrayCar = []
    let total = []
    


    /* Validacion Campos de formilaio*/
    if(regaloVAl == ""){
        console.log("no hay regalo")
        mError += "* Escoge un regalo <br>"
        regalo.style.border = "1px solid red"
        state = false
        
    }else{
        
        console.log("Regalo, Escogido")
        regalo.style.border = "1px solid gray"

    }

    if(nomVal == "" || typeof(nomVal) != "string" ){
        console.log("Nombre,bre Invalido")
        mError += "* Nombre errado <br>"
        nomb.style.border = "1px solid red"
        state = false

    }else{
        
        console.log("Nombre, Correcto")
       
    }
    if(apellVal == "" || typeof(apellVal) != "string" ){
        console.log("Apellido,bre Invalido")
        mError += "* Apellido errado <br>"
        apell.style.border = "1px solid red"
        state = false

    }else{
       
        console.log("Apellido, correcto")
      
    }
    if(emailVal == "" || typeof(emailVal) != "string"  || emailVal.indexOf("@") == -1){
        console.log("Email,bre Invalido")
        mError += "* Email errado <br>"
        email.style.border = "1px solid red"
        state = false

    }else{
       
        console.log("Email , Correcto")
      
    }
    /* Fin Validacion Campos de formilaio*/

    /* Validacion Campos de cantidades */
    if(unDia >= 1){
        let resul = unDia * 30
        total.push(resul)
        arrayCar.push(unDia + " Pases por dia = " + "$ " + resul)
        stateCant = true

    }else{
        stateCant == false
       
    }
    if(TDias >= 1){
        let resul = TDias * 50
        total.push(resul)
        arrayCar.push(TDias + " Pases por todos los dias = " + "$ " + resul)
        stateCant = true
    }else{
        stateCant == false
    }
    if(DDias >= 1){
        let resul = DDias * 45
        total.push(resul)
        arrayCar.push(DDias + " Pases por dos dias = " + "$ " + resul)
        stateCant = true
    }else{
        stateCant == false
    }
    if(camiset >= 1){
        let resul = camiset * 10
        total.push(resul)
        arrayCar.push(camiset + " Camisetas = " + "$ " + resul)
        stateCant = true
    }else{
        stateCant == false
    }
    if(tag >= 1){
        let resul = tag * 2
        total.push(resul)
        arrayCar.push(tag + " Calcomanias = " + "$ " + resul)
        stateCant = true
    }else{
        stateCant == false
    }
    /*  Fin Validacion Campos de cantidades */


    /* Validacion e Impresion del Resumen */
    console.log(state)

    
    
    if(state == true){
        let sumaTotal = 0

     console.log("Enviados")
        resum.innerHTML += "Tu Nombre : " + nomVal + " " + apellVal + "<br>" +
                          "Tu Regalo : " + regaloVAl + "<br>" 
        nomb.disabled  = "true"  
        apell.disabled  = "true"  
        email.disabled  = "true"  
        oneDay.disabled  = "true"  
        twoDays.disabled  = "true"  
        everyDays.disabled  = "true"  
        camis.disabled  = "true"  
        etiqu.disabled  = "true"  
        regalo.disabled = "true"
        btnCalc.disabled = "true"
        error.style.display = "block"

        /* Mostrar Resumen y Total*/
        arrayCar.forEach((elem, i, Arr)=>{        
            resum.innerHTML += elem + "<br>"
        })
    
        total.forEach((elem)=>{
            sumaTotal += elem       
        })

        boxPagar.innerHTML = "$ " + sumaTotal
        if(sumaTotal == 0){
            resum.innerHTML += "No incluiste ninguno de los pases <a href='reservaciones.html'>Hazlo de Nuevo</a>"
        }

        /* Ocultar Mensaje */
        error.style.display = "none"
        titleError.style.display = "none"

    }else{
        error.style.display = "block"
        titleError.style.display = "block"
        error.innerHTML = mError
    }

    
}

// Eventos
nomb.addEventListener("blur", mesajeError)
apell.addEventListener("blur", mesajeError)
email.addEventListener("blur", mesajeError)
oneDay.addEventListener("blur", showDays)
everyDays.addEventListener("blur", showDays)
twoDays.addEventListener("blur", showDays)
form.addEventListener("submit", calcularResumen)





