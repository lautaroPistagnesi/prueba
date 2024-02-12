import * as informacion from "./Ui.js"
import * as validarNombre from "./validacion.js"

const botonBuscar = document.querySelector("#buscar")
botonBuscar.onclick = () => {
    informacion.sacarError()
    let numeroPokemones = document.querySelector("#numeroPokemon").value
    if(Number(numeroPokemones) === 0){
        informacion.agregarError("No puede ser 0 o nada")
    }else if(Number(numeroPokemones) <= 1010){
        informacion.sacarError()
        informacion.buscarImagen(numeroPokemones)
    }else if(/^[A-z]+$/.test(numeroPokemones)){
        numeroPokemones = numeroPokemones.toLowerCase()
        validarNombre.validarNombres(numeroPokemones)
    }else if(Number(numeroPokemones) >= 1011){
        informacion.agregarError("solo hay 1010 pokemones")
    }else{
        informacion.agregarError("no podes poner letras con numero o simbolos")
    }
} 

