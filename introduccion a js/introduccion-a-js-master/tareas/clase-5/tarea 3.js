let sumar = function(uno, dos, tres, cuatro, cinco){
    return uno + dos + tres + cuatro + cinco
}
const botonSumar = document.querySelector("#boton-sumar")
botonSumar.onclick = function(){
    let horas1 = Number(document.querySelector("#horas-video1").value)
    let minutos1 = Number(document.querySelector("#minutos-video1").value)
    let segundos1 = Number(document.querySelector("#segundos-video1").value)
    let horas2 = Number(document.querySelector("#horas-video2").value)
    let minutos2 = Number(document.querySelector("#minutos-video2").value)
    let segundos2 = Number(document.querySelector("#segundos-video2").value)
    let horas3 = Number(document. querySelector("#horas-video3").value)
    let minutos3 = Number(document.querySelector("#minutos-video3").value)
    let segundos3 = Number(document.querySelector("#segundos-video3").value)
    let horas4 = Number(document.querySelector("#horas-video4").value)
    let minutos4 = Number(document.querySelector("#minutos-video4").value)
    let segundos4 = Number(document.querySelector("#segundos-video4").value)
    let horas5 = Number(document.querySelector("#horas-video5").value)
    let minutos5 = Number(document.querySelector("#minutos-video5").value)
    let segundos5 = Number(document.querySelector("#segundos-video5").value)
    let horas = sumar(horas1, horas2, horas3, horas4, horas5)
    let minutos = sumar(minutos1, minutos2, minutos3, minutos4, minutos5)
    let segundos = sumar(segundos1, segundos2, segundos3, segundos4, segundos5)
    let suma = "el resultado es de: "+ horas + " horas, " + minutos + " minutos y " + segundos + " segundos"
    let mensajeFinal = document.querySelector("#mensaje-final")
    mensajeFinal.textContent = suma
    return false;
}