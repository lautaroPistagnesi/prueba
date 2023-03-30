let horas = document.querySelector("#horas-video").value
let minutos = document.querySelector("#minutos-video").value
let segundos = document.querySelector("#segundos-video").value
const botonSumar = document.querySelector("#boton-sumar")
let sumaReal = document.querySelector("#sumaReal")

botonSumar.onclick = function(){
    let tiempoDeVideos = ("van: " + horas + " horas, " + minutos + " minutos y " + segundos + " segundos")
    sumaReal.textContent = tiempoDeVideos
    return false;
}
