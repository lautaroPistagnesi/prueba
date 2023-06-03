let contadorError = 0
let claseParrafo = "parrafo"
let claseInput = "input"
let contadorDeSalarios = 0
let contadorDeBorrarSalarios = 0
let contadorCalcular = 0

/*function validarSalarios(salarios){
    if(salarios.value === ""){
        return "este campo no puede ser vacio"
    }else if(salarios.value === 0){
        return "este campo no puede ser 0"
    }else if(!/^[0-9]$/.test(salarios.value)){
        return "este campo solo puede tener numeros"
    }else{
        return ""
    }
}
*/
let botonAgregar = document.querySelector("#botonAgregar")
botonAgregar.onclick = function(){
    const formulario = document.querySelector("#lugarParametros")
    const label = document.createElement("label")
    const input = document.createElement("input")
    const texto = document.createTextNode("Agrega un salario")
    const parrafo = document.createElement("p")
    claseParrafo += "I"
    parrafo.className += claseParrafo
    input.className += claseInput
    label.appendChild(texto)
    parrafo.appendChild(label)
    parrafo.appendChild(input)
    formulario.appendChild(parrafo)
    botonQuitar.className = ""
    let parrafoError = document.querySelector(".pr")
    if(parrafoError != null){
        parrafoError.remove()
    }
    contadorDeSalarios++
    console.log(contadorDeSalarios)
    return false
}
let claseDeParrafos = "parrafo"
const botonQuitar = document.querySelector("#botonQuitar")
botonQuitar.onclick = function(){
    contadorDeBorrarSalarios++
    console.log(contadorDeBorrarSalarios)
    if(contadorDeBorrarSalarios <= contadorDeSalarios){
        claseDeParrafos += "I"
        const parrafo = document.querySelector("." + claseDeParrafos)
        if(parrafo === null){
            botonQuitar.className = "error"
            let lugarBotones = document.querySelector("#botones")
            let pr = document.createElement("p")
            pr.className = "pr"
            let mensajeError = document.createTextNode("no puedes quitar un parametro que no existe")
            pr.appendChild(mensajeError)
            let parrafoError = document.querySelector(".pr")
            if(parrafoError != null){
                parrafoError.remove()
                lugarBotones.appendChild(pr)
            }
            lugarBotones.appendChild(pr)
        }else{
            parrafo.remove()    
        }
    }else{
        contadorDeBorrarSalarios--
        const parrafo = document.querySelector("." + claseDeParrafos)
        if(parrafo === null){
            botonQuitar.className = "error"
            let lugarBotones = document.querySelector("#botones")
            let pr = document.createElement("p")
            pr.className = "pr"
            let mensajeError = document.createTextNode("no puedes quitar un parametro que no existe")
            pr.appendChild(mensajeError)
            let parrafoError = document.querySelector(".pr")
            if(parrafoError != null){
                parrafoError.remove()
                lugarBotones.appendChild(pr)
            }
            lugarBotones.appendChild(pr)
        }

    }
}

let botonCalcular = document.querySelector("#botonCalcular")
botonCalcular.onclick = function(){
    let cantidadParrafors = contadorDeSalarios - contadorDeBorrarSalarios
    contadorCalcular++
    document.querySelector("#botones").className = "oculto"
    let nombreSalario = "salario"
    let parrafoClase = "parrafo"
    let salariosAnuales = document.querySelectorAll("." + claseInput)
        if(salariosAnuales.length === 0){
            nombreSalario += "I"
            while(salariosAnuales = document.querySelector("[name=" + nombreSalario + "]") === null){
                console.log(salariosAnuales)
            }
        }
    
    salariosAnuales.forEach(function(salario){
        nombreSalario += "I"
        salario.name = nombreSalario
        let parrafoInputs = document.querySelector("." + parrafoClase)
        if(parrafoInputs === null){
            while(parrafoInputs === null){
                parrafoClase += "I"
                parrafoInputs = document.querySelector("." + parrafoClase)
            }
        }else{
            parrafoClase += "I"
            parrafoInputs = document.querySelector("." + parrafoClase)
        }

        let inputSalario = document.querySelector("[name=" + nombreSalario + "]").value
        const lugarMensaje = document.createElement("label")
        if(Number(inputSalario) === 0){
            document.querySelector("[name=" + nombreSalario + "]").className = "error"
            const ErrorMensaje = document.createTextNode("Este parametro no puede ser 0 o nada")
            lugarMensaje.appendChild(ErrorMensaje)
            parrafoInputs.appendChild(lugarMensaje)
            contadorError++
        }else if(!/^[0-9]+$/.test(inputSalario)){
            document.querySelector("[name=" + nombreSalario + "]").className = "error"
            const ErrorMensaje = document.createTextNode("Este parametro no pueden ser letras o simbolos")
            lugarMensaje.appendChild(ErrorMensaje)
            parrafoInputs.appendChild(lugarMensaje)
            contadorError++
        }else{
            document.querySelector("[name=" + nombreSalario + "]").className = ""
            lugarMensaje.remove()
        }
        
        if(contadorError === 0){
            console.log("hola")
        }
    })
    return false
}