let IntegrantesFamilia = Number(document.querySelector("#numeroIntegrantesFamilia").value)

function validarCantidaFamilia(IntegrantesFamilia){
    if(IntegrantesFamilia.length === 0){
        return "los integrantes de tu familia no pueden ser 0"
    }
    if(/^[0-9]+$/.test(IntegrantesFamilia)){
        return "los integrantes de tu familia no pueden ser letras"
    }
    return ""
}
validarCantidaFamilia(IntegrantesFamilia)
let contadorBoton = 0
const botonEnviar = document.querySelector("#botonEnviar")
botonEnviar.onclick = function(){
    let IntegrantesFamilia = Number(document.querySelector("#numeroIntegrantesFamilia").value)
    let i;
    contadorBoton++
    if(IntegrantesFamilia === 0){
        document.querySelector("#numeroIntegrantesFamilia").className = "error"
        let lugarErrores = document.querySelector("ul")
        let $error = document.createElement("ul")
        let error = document.createTextNode("los integrantes de tu familia no pueden ser nada")
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
        let parrafoError = "errorParrafo"
        for(i = 0; i < IntegrantesFamilia; i++){
            document.querySelector("#numeroIntegrantesFamilia").className = ""
            let $form = document.querySelector("form")
            let label = document.createElement("label")
            let input = document.createElement("input")
            let mensaje = document.createTextNode("Ingresa la edad de uno de tu familia")
            let parrafo = document.createElement("p")
            inputError += "I"
            input.className = inputError
            parrafoError += "I"
            parrafo.className = parrafoError
            label.appendChild(mensaje)
            parrafo.appendChild(label)
            parrafo.appendChild(input)
            $form.appendChild(parrafo)
        }
    }
    return false
}
const botonCalcular = document.querySelector("#calcular")
botonCalcular.onclick = function(){
    let inputError = "errorInput"
    let parrafoError = "errorParrafo"
    const integrantesFamilia = Number(document.querySelector("#numeroIntegrantesFamilia").value)
    let i;
    let sumaEdades = 0
    for(i = 0; i < integrantesFamilia; i++){
        inputError += "I"
        let input = Number(document.querySelector("." + inputError).value)
        sumaEdades += input
        console.log(input)
    }
    console.log(sumaEdades)

}