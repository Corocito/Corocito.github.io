//Archivo JavaScript para el funcionamiento de la página

//Se crea una constante con la cual se van a capturar los valores de los elementos
const nombre = document.getElementById("nombre")
const direccion = document.getElementById("direccion")
const telefono = document.getElementById("telefono")
const email = document.getElementById("email")
const ciudad= document.getElementById("ciudad")
const edad = document.getElementById("edad")

const form = document.getElementById("formulario")

form.addEventListener("submit", e=>{
    e.preventDefault();
    checkInputs();
})

function checkInputs(){
    const nombreValue= nombre.value.trim();
    const direccionValue= direccion.value.trim();
    const telefonoValue= telefono.value.trim();
    const emailValue= email.value.trim();
    const ciudadValue= ciudad.value.trim();
    const edadValue= edad.value.trim();

    if(nombreValue==""){
        setErrorFor(nombre, "No se puede dejar el espacio en blanco")
    }
}

function setErrorFor(input, message){
    const fomrControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = " form-control success";
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


/*
//Se crea el metodo para poder validar la informacion del formulario
formulario.addEventListener("submit", e=>{
    e.preventDefault()
    let adver = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    adver.innerHTML=""
    if(!regexEmail.test(email.value)){
        adver += "el email no es valido <br>"
         entrar = true
    }
    
    if(entrar){
        alert("El email no es valido")
    }
    else{
        alert("Enviado")
    }
})
*/


