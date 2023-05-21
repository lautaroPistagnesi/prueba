const numeroFamiliares = Number(document.querySelector("#numeroIntegrantesFamilia").value)

function CantidadFamiliares(numeroFamilia){
    if(numeroFamilia.length === 0){
        return "la cantidad de familiares no puede ser cero"
    }
    return ""   
}

CantidadFamiliares(numeroFamiliares)
let botonApretado = 0
const botonEnviar = document.querySelector("#botonEnviar")
botonEnviar.onclick = function(){
    const numeroFamiliares = Number(document.querySelector("#numeroIntegrantesFamilia").value)
    botonApretado++
    let clase = "edadFamili"
    let i;
    for(i = 0; i < numeroFamiliares; i += 1){
        let formulario = document.querySelector("form")
        let label = document.createElement("label")
        let input = document.createElement("input")
        let mensaje = document.createTextNode("Ingresa la edad de uno de tu familia")
        let parrafo = document.createElement("p")
        label.appendChild(mensaje)
        parrafo.appendChild(label)
        parrafo.appendChild(input)
        clase += "a"
        parrafo.className += clase
        if(botonApretado === 1){
            formulario.appendChild(parrafo)    
        }else{
            document.querySelector("#visible").className = "oculto"
        }
    }
}

const botonCalcular = document.querySelector("#calcular")  
botonCalcular.onclick = function(){
    const numeroIntegrantes = document.querySelectorAll(".edadFamilia")
    let clase = "edadFamili"
    let i;
    let edadSumada = 0
    
    for(i = 0; i < numeroIntegrantes.length; i += 1){
        clase += "a" 
        let edadesDeFamilia = document.querySelectorAll("." + clase)
        edadSumada += Number(edadesDeFamilia[i].value)
    }
    document.querySelector("#promedioEdad").value = (edadSumada / numeroIntegrantes.length)
    for(i = 0; i < numeroIntegrantes.length; i += 1){
        edadFamiliares = Number(edadesDeFamilia[i].value)
        
    }
    let arrayEdades = []
    for(i = 0; i < numeroIntegrantes.length; i += 1){
        arrayEdades.push(Number(edadesDeFamilia[i].value))
    }

    let numeroMaximo = Math.max(...arrayEdades)
    document.querySelector("#mayorEdad").value = numeroMaximo
    let numeroMinimo = Math.min(...arrayEdades)
    document.querySelector("#menorEdad").value = numeroMinimo
}