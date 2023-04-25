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
        clase = clase + i
        input.className += clase
        label.appendChild(mensaje)
        parrafo.appendChild(label)
        parrafo.appendChild(input)
        formulario.appendChild(parrafo)
        let prueba = "edadFamilia1"
        console.log(document.querySelector("#" + prueba))
    }
}
let c = 0
for(i = 0; i < arrayEdades.length; i++){
    if(arrayEdades[c] <= arrayEdades[i]){
         
    }
}