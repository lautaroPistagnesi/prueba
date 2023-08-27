/// <reference types="jquery" />

const botonBuscar = document.querySelector("#buscar")
botonBuscar.onclick = () => {
    let numeroPokemones = document.querySelector("#numeroPokemon").value
    if(Number(numeroPokemones) === 0){
        console.log("No puede ser 0 o nada")
    }else if(Number(numeroPokemones) <= 1010){
            fetch("https://pokeapi.co/api/v2/pokemon/" + numeroPokemones)
                .then(respuesta => respuesta.json())
                .then(respuestaJSON => {
                    console.log(respuestaJSON.sprites)
                    $("#pokemonNormal")[0].src = respuestaJSON.sprites.front_default
                    $("#pokemonShiny")[0].src = respuestaJSON.sprites.front_shiny
                })
    }else if(/^[A-z]+$/.test(numeroPokemones)){
        fetch("https://pokeapi.co/api/v2/pokemon/" + numeroPokemones)
            .then(respuesta => respuesta.json())
            .then(respuestaJSON => {
                $("#pokemonNormal")[0].src = respuestaJSON.sprites.front_default
                $("#pokemonShiny")[0].src = respuestaJSON.sprites.front_shiny
            })
    }else if(Number(numeroPokemones) >= 1011){
        console.log("solo exiten 1010 pokemones")
    }else{
        console.log("no podes poner letras con numero o simbolos")
    }
}





