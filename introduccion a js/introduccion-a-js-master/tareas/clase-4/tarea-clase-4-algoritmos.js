//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/

/*
Desafío de programación #1: Imprimí los números del 1 al 10

 Resultado: 10 9 8 7 6 5 4 3 2 1

let numero;
for(numero = 1; numero <= 10; numero += 1){
    console.log (numero)
}

 Desafìo de programación  #2: Imprimí los números impares del 1 al 100

 1 3 5 ... 99

let numero; 
for(numero = 1; numero <= 100; numero += 2){
  console.log(numero)
}

Desafío de programación #3: Imprimí la tabla de multiplicación del 7

 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63

function multiplicar(numero1, numero2){
  return (numero1 * numero2)
}

const tabla = 7;
let numero;
for(numero = 0; numero <= 10; numero += 1){;
  console.log((tabla + " x " + numero) + " = " + (multiplicar(tabla, numero)));
};

 /*
Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81

function multiplicar(numero1, numero2){
    return (numero1 * numero2)
}

let tabla = 1;
let numero; 
for(numero = 0; numero <= 10; numero += 1){
    if(numero < 10){
      console.log(tabla + "x" + numero + "=" + (multiplicar(numero, tabla)))
    }else if (numero === 10 && tabla <= 9){
      console.log(tabla + "x" + numero + "=" + (multiplicar(numero, tabla)))
      numero -= 10
      tabla += 1
    }else{
      console.log(tabla + "x" + numero + "=" + (multiplicar(numero, tabla)))
    }
    
}

Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10]

 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle

function sacarPromedioDeNotas(numero1, numero2){
    return (numero1 / numero2)
}


const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let totalNotas = 0;
for (let contador = 0; contador < notas.length; contador += 1){
    totalNotas = totalNotas + notas[contador]
}
console.log(totalNotas)
console.log(sacarPromedioDeNotas(totalNotas, notas.length))


 
Desafío de programación #6: Calcula 10! (10 factorial)

 10 * 9 * 8 * ... * 1
 

let numero = 1
for(let contador = 10; contador >= 1; contador -= 1){
    numero *= contador 
} 
console.log(numero)

Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30

let numero = 11
for(contador = 13; contador <= 30; contador += 2){
    numero += contador 
}
console.log(numero)

Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit

function deCelciusAFahrenheit(numero1){
    return ((numero1 * (9/5)) + 32)
}

console.log(deCelciusAFahrenheit(100))



Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius

function DeFahrenheitACelsius(numero1){
    return ((numero1 - 32) * (5/9))
}
console.log(DeFahrenheitACelsius(100))



Desafío de programación #10: Calcula la suma de todos los números en un array de números
Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)

function promedioDeNumeros(numero1, numero2){
  return (numero1 / numero2)
}


const notas = [8,2,6,4];
let total = 0;
for (let contador = 0; contador < notas.length; contador += 1){;
  total = total + notas[contador];
};
console.log(total);
console.log(promedioDeNumeros(total, notas.length))


Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos


function arrayPositivo(){
    let array = [2, -1, 4, -7]
    let numero = 0
    for(let contador = 0; contador <= array.length; contador += 1){
      if(numero + array[contador]  > 0){
  
      }else if(numero + array[contador] < 0){
        array[contador] *= -1
      }
  
  }
    console.log(array)
}

arrayPositivo()


*/
/*
Desafío de programación #13: Find the maximum number in an array of numbers

let array = [2, 6, 14, 4, 8];
let contador;
for(contador = 0; contador < array.length; contador += 1){;
      if(contador < array.length){
        console.log(array[4])
      }
    };


Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
*/

function sumarFibonacci (numero1, numero2){
    return numero1 + numero2
}

let n1 = 0
let n2 = 0
let i;
for(i = 0; i < 10; i += 1){
  console.log(sumarFibonacci(n1, n2))
  if(n1 == 0){
    n1 += 1
    console.log(n1)
  }else if(n2 == 0){
    n2 += 1
  }else if(n1 < n2){
    n1 += n2
  }else if(n2 < n1){
    n2 += n1
  }else{
    n1 += n2
  }
}


/*
Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión
*/
console.log(i)

/*
Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.

Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
   123 = 1 + 2 + 3 = 6
   2 = 2
   1234 = 1 + 2 + 3 + 4 = 10

Desafío de programación #18: Imprimir los primeros 100 números primos

Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
Ejemplo:
  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]

Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]

Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]

Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]

Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"

Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]


Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos

Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]

Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]

Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]


==== FALTAN TRADUCIR
Desafío de programación #28: Calculate the sum of first 100 prime numbers
Desafío de programación #29: Print the distance between the first 100 prime numbers
Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
Desafío de programación #31-a. Create a function that will return the number of words in a text
Desafío de programación #31-b. Create a function that will return the number of words in a text
Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
Desafío de programación #34. Create a function that will return an array with words inside a text
Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
Desafío de programación #36. Create a function that converts a string to an array of characters
Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
Desafío de programación #39. Implement the Caesar cypher
Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
Desafío de programación #48. Create a function to return the longest word(s) in a string
Desafío de programación #49. Shuffle an array of strings
Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
Desafío de programación #53. Calculate 70! with high precision (all decimals)
 */
