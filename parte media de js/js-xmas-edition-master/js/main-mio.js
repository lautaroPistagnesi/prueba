const nombre = document.querySelector("#nombre").value
const ciudad = document.querySelector("[name=ciudad]").value
const comportamientoUsuario = document.querySelector("#carta-a-santa").comportamiento.value
const regaloUsuario = document.querySelector("[name=descripcion-regalo]").value

console.log(nombre)
console.log(ciudad)
console.log(comportamientoUsuario)
console.log(regaloUsuario)

function validarNombre(nombre){
    if(nombre.length === 0){
        return "Este campo debe tener al menos 1 caracter"
    }

    if(nombre.length >= 50){
        return 'Este campo debe tener menos de 50 caracteres'
    }

    if(!/^[a-z]+$/i.test(nombre)){
        return "este campo solo admite letras"
    }
    
    return ""
}


function validarCiudad(ciudad){
    if(ciudad.length === 0){
        return "La ciudad no puede ser un espacio vacio"
    }
    return ""
}


function validarRegalo(regaloUsuario){
    if(regaloUsuario.length >= 100){
        return "el regalo no puede tener mas de 100 caracteres"
    }
    
    if(regaloUsuario.length === 0){
        return "el regalo no puede ser vacio"
    }
    if(!/^[a-z0-9 ]+$/i.test(regaloUsuario)){
        return "el regalo solo puede contener letras y numeros"
    }

    return "" 
}

validarNombre(nombre)
validarCiudad(ciudad)
validarRegalo(regaloUsuario)

function validarFormulario(event){
const $form = document.querySelector("#carta-a-santa")

const nombre = $form.nombre.value
const ciudad = $form.ciudad.value
const regaloUsuario = $form["descripcion-regalo"].value

const nombreError = validarNombre(nombre)
const ciudadError = validarCiudad(ciudad)
const regaloUsuarioError = validarRegalo(regaloUsuario)

const errores = {
    nombre: nombreError,
    ciudad: ciudadError,
    "descripcion-regalo": regaloUsuarioError
}

const esExito = manejarErrores(errores) === 0
    if(esExito){
        $form.className = "oculto"
        document.querySelector("#exito").className = ""
        setTimeout(() => {
            window.location.href = "wishlist.html"
        }, 5000)
    }

event.preventDefault()

}
let botonApretado = 0
function manejarErrores(errores){
    botonApretado++ 
    const llaves = Object.keys(errores)
    const $errores = document.querySelector("#errores")
    let cantidadErrores = 0;
    llaves.forEach(function(llave){
    const error = errores[llave]
    if(error){
        $form[llave].className = "error"
        cantidadErrores++;
        const $error = document.createElement("li")
        $error.className = llave
        $error.innerText = error
        if(botonApretado === 1){
            $errores.appendChild($error)
        }else{
            let claseErrores = document.querySelector("." + llave)
            if(claseErrores === null){
                $errores.appendChild($error)
            }else{
                claseErrores.remove()
                $errores.appendChild($error)
            }
        }
    }else{
        $form[llave].className = ""
        let claseDeErrores = document.querySelector("." + llave)
        if(claseDeErrores != null){
            claseDeErrores.remove()
        }
    }
    })
    return cantidadErrores
}


const $form = document.querySelector("#carta-a-santa")
$form.onsubmit = validarFormulario