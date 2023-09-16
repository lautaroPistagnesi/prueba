import * as informacion from "./Ui.js"
export let validarNombres = (numeroPokemones) => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + numeroPokemones)
    .then(respuesta => {if(respuesta.ok === false){
        informacion.agregarError("no se encontro ese pokemon")
     }else{
        informacion.sacarError()
        informacion.CambiarImagenes(numeroPokemones)
     }}
)
}