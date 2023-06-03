const numeroFamiliares = Number(document.querySelector("#numeroIntegrantesFamilia").value)
    botonApretado++
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
        let clase = "edadFamilia"
        parrafo.className += clase
        if(botonApretado === 1){
            formulario.appendChild(parrafo)
        }else{
            let claseFamiliares = document.querySelector("." + clase)
            claseFamiliares.remove()
            console.log(claseFamiliares)
            formulario.appendChild(parrafo)
        }
    }

//clase 6 punto 2--------------------------------------------------------------------------------------------------------

const botonQuitar = document.querySelector("#botonQuitar")
botonQuitar.onclick = function(){
    const formulario = document.querySelector(".formulario") 
    const parrafo = document.querySelector(".parrafo")
    formulario.removeChild(parrafo)
}
const botonCalcular = document.querySelector("#botonCalcular")
botonCalcular.onclick = function(){
    let i;
    let inputsSalarios = document.querySelectorAll(".inputs")
    let sumaDeInputsSalarios = 0
    for(i = 0; i < inputsSalarios.length; i += 1){
        if(Number(inputsSalarios[i].value) > 0){
        sumaDeInputsSalarios += Number(inputsSalarios[i].value)
    }
    }
    document.querySelector("#promedioAnual").value = (sumaDeInputsSalarios * 12)
    document.querySelector("#promedioMensual").value = sumaDeInputsSalarios
    let arraySalarios = []
    for(i = 0; i < inputsSalarios.length; i++){
        if(Number(inputsSalarios[i].value) > 0){
        arraySalarios.push(Number(inputsSalarios[i].value))
    }
    }
    const numeroMaximoSalario = Math.max(...arraySalarios)
    document.querySelector("#mayorSalario").value = numeroMaximoSalario
    const numeroMinimoSalario = Math.min(...arraySalarios)
    document.querySelector("#menorSalario").value = numeroMinimoSalario


}














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
    console.log(numeroFamiliares)
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
            console.log(numeroFamiliares)    
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