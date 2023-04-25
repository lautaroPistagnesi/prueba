const botonEnviar = document.querySelector("#botonEnviar")
botonEnviar.onclick = function(){
    const numeroFamiliares = Number(document.querySelector("#numeroIntegrantesFamilia").value)
    let i;
    for(i = 0; i < numeroFamiliares; i += 1){
        let formulario = document.querySelector("form")
        let label = document.createElement("label")
        let input = document.createElement("input")
        let mensaje = document.createTextNode("Ingresa la edad de uno de tu familia")
        let parrafo = document.createElement("p")
        let clase = "edadFamilia"
        input.className += clase
        label.appendChild(mensaje)
        parrafo.appendChild(label)
        parrafo.appendChild(input)
        formulario.appendChild(parrafo)
    }
    
}
const botonCalcular = document.querySelector("#calcular")  
botonCalcular.onclick = function(){
    const numeroIntegrantes = document.querySelectorAll(".edadFamilia")
    let i;
    let edadSumada = 0
    let edadesDeFamilia = document.querySelectorAll(".edadFamilia")
    for(i = 0; i < numeroIntegrantes.length; i += 1){
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
    while(arrayEdades[i]){

    }
}