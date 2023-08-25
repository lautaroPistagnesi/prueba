/// <reference types="jquery" />

const botonBuscar = document.querySelector("#buscar")
botonBuscar.onclick = () => {
    let numeroPokemones = document.querySelector("#numeroPokemon").value
    console.log(numeroPokemones)
}


fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
       
    })

