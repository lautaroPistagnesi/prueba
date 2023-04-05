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
let mensaje = document.querySelector("#mensaje")
mensaje.textContent = "El promedio es de: " + sumar(numero0, numero1, numero2, numero3, numero4)
let mensaje2 = document.querySelector("#mensaje2")
mensaje2.textContent = "El numero mas chico es: " + numero2
let mensaje3 = document.querySelector("#mensaje3")
mensaje3.textContent = "El numero mas grande es:" + numero3
let mensaje4 = document.querySelector("#mensaje4")
mensaje4.textContent = "El numero que mas se repite es el : " + 3

/*function numeroMasChico(numero0, numero1, numero2, numero3, numero4){
    let numeroChico = 0
    if(numero0 < numero1){
        if(numero0 < numero2){
            if(numero0 < numero3){
                if (numero0 < numero3){
                    numeroChico = numero0
                }
            }
        }else{
            numeroChico = numero2
        }
    }else if(numero1 < numero2){
            if(numero1 < numero3){
                if(numero1 < numero4){
                    numeroChico = numero1
                }
        }
    }else if(numero2 < 43){

    }
    console.log(numeroChico)
}*/