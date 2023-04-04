const funcionPasarNumero = function pasarANumeros(){
    let i;
    for(i=0; i < numerosArray.length; i += 1){
        console.log(numerosArray[i].textContent)
       }  
}
function sumar(uno, dos){
    return uno/dos
}
console.log(sumar(10, 5))
const numerosArray = document.querySelectorAll("li")
console.log(funcionPasarNumero())
let mensaje = document.querySelector("mensaje")
