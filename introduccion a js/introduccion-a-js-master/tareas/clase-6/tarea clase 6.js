let integrantesFamilia = Number(document.querySelector("#numeroIntegrantesFamilia").value)
let contadorBoton = 0
let botonApretado = 0
function validarCantidaFamilia(IntegrantesFamilia){

    if(IntegrantesFamilia.length === 0){
        return "los integrantes de tu familia no pueden ser 0 o nada"
    }
    if(/^[0-9]+$/.test(IntegrantesFamilia)){
        return "los integrantes de tu familia no pueden ser letras"
    }
    return ""
}

function validarErrorEdad(edadFamiliar){
    if(edadFamiliar === ""){
        return "la edad de tu familiar no puede ser nada o 0"
    }
    return ""
}


validarCantidaFamilia(integrantesFamilia)
const botonEnviar = document.querySelector("#botonEnviar")
botonEnviar.onclick = function(){
    let integrantesFamilia = Number(document.querySelector("#numeroIntegrantesFamilia").value)
    let i;
    contadorBoton++

    if(integrantesFamilia === 0){
        document.querySelector("#numeroIntegrantesFamilia").className = "error"
        let lugarErrores = document.querySelector("ul")
        let $error = document.createElement("ul")
        let error = document.createTextNode("los integrantes de tu familia no pueden ser nada o 0")
        $error.appendChild(error)
        $error.className = "errores"

            if(contadorBoton === 1){
                lugarErrores.appendChild($error)
            }else{
                let errorImpreso = document.querySelector(".errores")

                if(errorImpreso === null){
                    lugarErrores.appendChild($error)
                }else{
                    errorImpreso.remove()
                    lugarErrores.appendChild($error)
                }
            }
    }else if(!/^[0-9]+$/.test(integrantesFamilia)){
        document.querySelector("#numeroIntegrantesFamilia").className = "error"
        let lugarErrores = document.querySelector("ul")
        let $error = document.createElement("ul")
        let error = document.createTextNode("los integrantes de tu familia no pueden ser letras")
        $error.appendChild(error)
        $error.className = "errores"

        if(contadorBoton === 1){
            lugarErrores.appendChild($error)
        }else{
            let errorImpreso = document.querySelector(".errores")

            if(errorImpreso === null){
                lugarErrores.appendChild($error)
            }else{
                errorImpreso.remove()
                lugarErrores.appendChild($error)
            }
        }

    }else{
        let errorImpreso = document.querySelector(".errores")

        if(errorImpreso === null){
            
        }else{
            errorImpreso.remove()
        }
        document.querySelector("div").className = "oculto"
        document.querySelector("#calcular").className = ""
        let inputError = "errorInput"
        let claseParrafo = "parrafo"

        for(i = 0; i < integrantesFamilia; i++){
            document.querySelector("#numeroIntegrantesFamilia").className = ""
            let $form = document.querySelector("form")
            let label = document.createElement("label")
            let input = document.createElement("input")
            let mensaje = document.createTextNode("Ingresa la edad de uno de tu familia")
            let parrafo = document.createElement("p")
            inputError += "I"
            claseParrafo += "I"
            input.name = inputError
            parrafo.className = claseParrafo
            label.appendChild(mensaje)
            parrafo.appendChild(label)
            parrafo.appendChild(input)
            $form.appendChild(parrafo)
        }
    }
    return false
}

function promedio(numero){
    const integrantesFamilia = Number(document.querySelector("#numeroIntegrantesFamilia").value)
    let promedioEdad = numero / integrantesFamilia
    return promedioEdad
}

function numeroMaximo(arrayNumeros){
    const integrantesFamilia = Number(document.querySelector("#numeroIntegrantesFamilia").value)
    let segundoArrayNumeros = []
    let i;

    for(i = 0; i < integrantesFamilia; i++){
        segundoArrayNumeros.push(Number(arrayNumeros[i]))
    }
    return Math.max(...segundoArrayNumeros)
}

function numeroMinimo(arrayNumeros){
    const integrantesFamilia = Number(document.querySelector("#numeroIntegrantesFamilia").value)
    let segundoArrayNumeros = []
    let i;

    for(i = 0; i < integrantesFamilia; i++){
        segundoArrayNumeros.push(Number(arrayNumeros[i]))
    }
    return Math.min(...segundoArrayNumeros)
}

const botonCalcular = document.querySelector("#calcular")
botonCalcular.onclick = function(){

    botonApretado++
    let errores = 0
    let arrayFamiliares = []
    let inputError = "errorInput"
    let errorInput = "errorInput"
    let parrafoClase = "parrafo"
    let claseLabel = "label"
    const integrantesFamilia = Number(document.querySelector("#numeroIntegrantesFamilia").value)
    const $form = document.querySelector("form")
    let i;
    let sumaEdades = 0

    for(i = 0; i < integrantesFamilia; i++){
        inputError += "I"
        let input = $form[inputError].value
        arrayFamiliares.push(input)
    }

    arrayFamiliares.forEach(function(edadFamiliares){
        errorInput += "I"
        parrafoClase += "I"
        claseLabel += "I"

        if(edadFamiliares === ""){
            errores++
            let mensajeError = "la edad de tu familiar no puede ser nada o 0"
            $form[errorInput].className = "error"
            validarErrorEdad(edadFamiliares)
            const label = document.createElement("label")
            label.className = claseLabel
            label.innerText = mensajeError
            let parrafoError = document.querySelector("." + parrafoClase)

            if(botonApretado === 1){
                parrafoError.appendChild(label)
            }else{
                let labelClase = document.querySelector("." + claseLabel)

                if(labelClase === null){
                    parrafoError.appendChild(label)
                }else{
                    labelClase.remove()
                    parrafoError.appendChild(label)
                }
            }
        }else if(!/^[0-9]+$/.test(edadFamiliares)){
            errores++
            let mensajeError = "la edad de tu familiar no puede ser letras o espacios"
            $form[errorInput].className = "error"
            validarErrorEdad(edadFamiliares)
            const label = document.createElement("label")
            label.className = claseLabel
            label.innerText = mensajeError
            let parrafoError = document.querySelector("." + parrafoClase)

            if(botonApretado === 1){
                parrafoError.appendChild(label)
            }else{
                let labelClase = document.querySelector("." + claseLabel)

                if(labelClase === null){
                    parrafoError.appendChild(label)
                }else{
                    labelClase.remove()
                    parrafoError.appendChild(label)
                }
            }

        }else{
            $form[errorInput].className = ""
            sumaEdades += Number(edadFamiliares)
            let labelClaseII = document.querySelector("." + claseLabel)
            if(labelClaseII != null){
                labelClaseII.remove()
            }
        }
    })

    if(errores === 0){
        document.querySelector("form").className = "oculto"
        document.querySelector("#calcular").className = "oculto"
        document.querySelector("#resultado").className = ""
        document.querySelector("#promedioEdad").value = promedio(sumaEdades)
        document.querySelector("#mayorEdad").value = numeroMaximo(arrayFamiliares)
        document.querySelector("#menorEdad").value = numeroMinimo(arrayFamiliares)
    }
}

let botonReset = document.querySelector("#botonReset")
botonReset.onclick = function(){
}