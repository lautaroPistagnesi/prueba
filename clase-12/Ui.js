export function CambiarImagenes(numeroPokemones){
    fetch("https://pokeapi.co/api/v2/pokemon/" + numeroPokemones)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
        $("#pokemonNormal")[0].src = respuestaJSON.sprites.front_default
        $("#pokemonShiny")[0].src = respuestaJSON.sprites.front_shiny
        $("#nombreDelPokemon")[0].value = respuestaJSON.name
        estadisticas(respuestaJSON)
    })
}

export let estadisticas = (respuesta)=>{
    if(!respuesta.types[1]){
        $("#tipo")[0].textContent = respuesta.types[0].type["name"]
    }else{
        $("#tipo")[0].textContent = respuesta.types[0].type["name"] + " " + respuesta.types[1].type["name"]
    }
    $("#experienciaBase")[0].textContent = respuesta.base_experience + "xp"
    $("#altura")[0].textContent = respuesta.height / 10 + "m"
    $("#peso")[0].textContent = (respuesta.weight / 10) + "kg"
    $("#habilidad")[0].textContent = respuesta.abilities[0].ability["name"]
    descripcionHabilidad(respuesta.abilities[0].ability["url"])
    $("#hp")[0].textContent = "Hp: " + respuesta.stats[0].base_stat
    $("#ataque")[0].textContent = "Ataque: " + respuesta.stats[1].base_stat
    $("#defensa")[0].textContent = "Defensa:" + respuesta.stats[2].base_stat
    $("#ataque_especial")[0].textContent = "Ataque especial: " + respuesta.stats[3].base_stat
    $("#defensa_especial")[0].textContent = "Defensa especial: " + respuesta.stats[4].base_stat
    $("#velocidad")[0].textContent = "Velocidad: " + respuesta.stats[5].base_stat
}

export function agregarError(mensaje){
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

export function sacarError(){
    $("#numeroPokemon")[0].className = ""
    $("#buscar")[0].className = ""
    if($("#mensajeError").length != 0){
       $("#mensajeError").remove()
    }
}

export const descripcionHabilidad = (enlace)=>{
    fetch(enlace)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
        $("#descripcionHabilidad")[0].textContent = respuestaJSON.effect_entries[0].effect
    })
}