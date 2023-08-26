/// <reference types="jquery" />

const botonBuscar = document.querySelector("#buscar")
botonBuscar.onclick = () => {
    let numeroPokemones = document.querySelector("#numeroPokemon")
    if(Number(numeroPokemones.value) === Number()){
        console.log("numero")
    }else if(!/^[A-z]+$/.test(numeroPokemones)){
        console.log($(numeroPokemones)[0].value)
    }
}


fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
       console.log(respuestaJSON.sprites.front_default)
    })

