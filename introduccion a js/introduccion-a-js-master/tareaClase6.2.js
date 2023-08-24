let claseParrafo = "parrafo"
let claseInput = "input"
let contadorDeSalarios = 0
let contadorDeBorrarSalarios = 0
let contadorCalcular = 0

function validarSalarios(salarios){
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
let botonAgregar = document.querySelector("#botonAgregar")
botonAgregar.onclick = function(){
    const formulario = document.querySelector("#lugarParametros")
    const label = document.createElement("label")
    const input = document.createElement("input")
    const texto = document.createTextNode("Agrega un salario")
    const parrafo = document.createElement("p")
    claseParrafo += "I"
    parrafo.className += claseParrafo
    input.name += claseInput
    label.appendChild(texto)
    parrafo.appendChild(label)
    parrafo.appendChild(input)
    formulario.appendChild(parrafo)
    botonQuitar.className = ""
    botonCalcular.className = ""
    let parrafoError = document.querySelector(".pr")
    if(parrafoError != null){
        parrafoError.remove()
    }
    let mensajeDeCalculo = document.querySelector(".mensajeCalculo")
    if(mensajeDeCalculo != null){

        mensajeDeCalculo.remove()        
    }
    contadorDeSalarios++
    return false
}

let claseDeParrafos = "parrafo"
const botonQuitar = document.querySelector("#botonQuitar")
botonQuitar.onclick = function(){
    contadorDeBorrarSalarios++
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
    let contadorError = 0
    let claseLugar = "lugar"
    contadorCalcular++
    let nombreSalario = "input"
    let claseSalarios = "salario"
    let parrafoClase = "parrafo"
    let lugarParametros = document.querySelector("form")
    let parametros = lugarParametros[nombreSalario]
    if(parametros === undefined){
        contadorError++
        document.querySelector("#botonCalcular").className = "error"
        let parrafoCalculo = document.querySelector("#botonDeCalculo")
        let labelCalculo = document.createElement("label")
        labelCalculo.className = "mensajeCalculo"
        let mensajeErrorCalculo = document.createTextNode("no puedes poner 0 salarios")
        labelCalculo.appendChild(mensajeErrorCalculo)
        let mensajeDeCalculo = document.querySelector(".mensajeCalculo")
        if(mensajeDeCalculo != null){
            mensajeDeCalculo.remove()
            parrafoCalculo.appendChild(labelCalculo)
        }else{
            parrafoCalculo.appendChild(labelCalculo)
        }
    }else{
        document.querySelector("#botones").className = "oculto"
        document.querySelector("#botonCalcular").className = ""
    parametros.forEach(function(salarios){
        validarSalarios(salarios)
        claseLugar += "I"
        claseSalarios += "I"
        let parrafo = document.querySelector("." + parrafoClase)
        if(parrafo === null){
            while(parrafo === null){
                parrafoClase += "I"
                parrafo = document.querySelector("." + parrafoClase)
            }
        }else{
            parrafoClase += "I"
            parrafo = document.querySelector("." + parrafoClase)
        }
        salarios.className = claseSalarios
        const label = document.createElement("label")
        label.className = claseLugar
        if(Number(salarios.value) === 0){
            contadorError++
            salarios.className = "error"
            const texto = document.createTextNode("el salario no puede ser 0 o nada")
            label.appendChild(texto)
            let lugar = document.querySelector("." + claseLugar)
            if(lugar === null){
                parrafo.appendChild(label)
            }else{
                lugar.remove()
                parrafo.appendChild(label)
            }
        }else if(!/^[0-9]+$/.test(salarios.value)){
            contadorError++
            salarios.className = "error"
            const texto2 = document.createTextNode("el salario no puede contener letras, simbolos o espacios")
            label.appendChild(texto2)
            parrafo.appendChild(label)
            let lugar = document.querySelector("." + claseLugar)
            if(lugar === null){
                parrafo.appendChild(label)
            }else{
                lugar.remove()
                parrafo.appendChild(label)
            }
        }else{
            salarios.className = ""
            let lugar = document.querySelector("." + claseLugar)
            if(lugar != null){
                lugar.remove()
            }
        } 
    })
    }
    if(contadorError === 0){
        document.querySelector("#lugarParametros").className = "oculto"
        document.querySelector("#botonCalcular").className = "oculto"
        document.querySelector("#resultados").className = ""
        let parametrosSalarios = document.querySelector("#lugarParametros")
        let arraySalarios = parametrosSalarios.querySelectorAll("input")
        let arrayDeSalarios = []
        let salarioSuma = 0
        arraySalarios.forEach(function(salario){
            arrayDeSalarios.push(Number(salario.value))
            salarioSuma += Number(salario.value)
        })
        document.querySelector("#mayorSalario").value = Math.max(...arrayDeSalarios)
        document.querySelector("#menorSalario").value = Math.min(...arrayDeSalarios)
        document.querySelector("#promedioAnual").value = (salarioSuma / arrayDeSalarios.length)
        document.querySelector("#promedioMensual").value = ((salarioSuma / arrayDeSalarios.length) / 12) 
    }
    return false
}