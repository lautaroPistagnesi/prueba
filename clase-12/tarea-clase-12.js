/// <reference types="jquery" />
let nombreValido = ""
let CambiarImagenes = function(numeroPokemones){
    fetch("https://pokeapi.co/api/v2/pokemon/" + numeroPokemones)
    .then(respuesta => {if(respuesta.ok === false){
                           nombreValido = "no"
                        }}
    )
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
        $("#pokemonNormal")[0].src = respuestaJSON.sprites.front_default
        $("#pokemonShiny")[0].src = respuestaJSON.sprites.front_shiny
    })
}

const agregarError = function(mensaje){
    const lugarDestino = document.querySelector("#lugarBusqueda")
    $("#numeroPokemon")[0].className = "border border-danger"
    $("#buscar")[0].className = "border border-danger"
    let $label = document.createElement("label")
    $label.className = "text-danger fs-4"
    $label.id = "mensajeError"
    const texto = document.createTextNode(mensaje)
    $label.appendChild(texto)
    if($("#mensajeError").length === 0){
        lugarDestino.append($label)
    }else{
        $("#mensajeError").remove()
        lugarDestino.append($label)
    }
}
const sacarError = function(){
    $("#numeroPokemon")[0].className = ""
    $("#buscar")[0].className = ""
    if($("#mensajeError").length != 0){
       $("#mensajeError").remove()
    }
}

const botonBuscar = document.querySelector("#buscar")
botonBuscar.onclick = () => {
    $("#numeroPokemon")[0].className = ""
    $("#buscar")[0].className = ""
    let numeroPokemones = document.querySelector("#numeroPokemon").value
    if(Number(numeroPokemones) === 0){
        agregarError("No puede ser 0 o nada")
    }else if(Number(numeroPokemones) <= 1010){
        sacarError()
        CambiarImagenes(numeroPokemones)
    }else if(/^[A-z]+$/.test(numeroPokemones)){
        sacarError()
        CambiarImagenes(numeroPokemones)
    }else if(Number(numeroPokemones) >= 1011){
        agregarError("solo hay 1010 pokemones")
    }else{
        agregarError("no podes poner letras con numero o simbolos")
    }
}
