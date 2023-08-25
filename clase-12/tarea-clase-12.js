/// <reference types="jquery" />

const botonBuscar = $(".bucar")
console.log(botonBuscar)


fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
       
    })

