// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.
/*
function numero1(){
for(let numero = 3; numero <= 22; numero += 3){;
    console.log (numero);
};
}
numero1()

const linea = "--------------"
console.log (linea)
// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

let numero2 = 10
while(numero2 > 0){
    console.log(numero2)
    numero2 -= 1
}

console.log (linea)


// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10 % 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16 % 4 = 0 - en 16 tenemos 4 * 4
// 19 % 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

let numero3;
for(numero3 = 1; numero3 < 51; numero3 += 1){;
    if(numero3 % 3 === 0 && numero3 % 5 === 0){;
        console.log ("FizzBuzz");
    }else if(numero3 % 3 === 0){;
        console.log ("Fizz");
    }else if(numero3 % 5 ===0){;
        console.log("Buzz");
    }else{;
        console.log (numero3);
    };
};

console.log(linea);
// Calcular el promedio de todos los números en un array de números. 
//(y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

function calcularPromedio (numero1, numero2){
    return (numero1 / numero2)
}

const notas = [7, 6, 9, 4];
let totalNotas = 0
for (let contador = 0; contador <= notas.length; contador += 1){
    totalNotas = totalNotas + notas[contador]
   
}
console.log(totalNotas)
console.log(calcularPromedio(totalNotas, notas.length))
*/