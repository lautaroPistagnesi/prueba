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