const numerosArray = document.querySelectorAll("li")
const funcionPasarNumero = function pasarANumeros(){
    let i;
    for(i = 0; i < numerosArray.length; i += 1){
        if(i < 5){
        console.log(numerosArray[i].textContent)
        }else{
            
        }
    } 
}
console.log(funcionPasarNumero())

let numero0 = Number(numerosArray[0].textContent)
let numero1 = Number(numerosArray[1].textContent)
let numero2 = Number(numerosArray[2].textContent)
let numero3 = Number(numerosArray[3].textContent)
let numero4 = Number(numerosArray[4].textContent)

function sumar(numero0, numero1, numero2, numero3, numero4){
   return numero0 + numero1 + numero2 + numero3 + numero4
}

console.log(sumar(numero0, numero1, numero2, numero3, numero4))
let mensaje = document.querySelector("#mensaje")
mensaje.textContent = "El promedio es de: " + sumar(numero0, numero1, numero2, numero3, numero4)