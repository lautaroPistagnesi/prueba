"""TP Nº4"""
"""Punto 1"""

"""TP Nº1"""
#import math
#A = int(input("ingrese la altura "))
#B = int(input("ingrese la base "))
#hipotenusa = (B*A)/2
#print("la hiponenusa vale: ", hipotenusa)

#radio = int(input("ingrese el radio del circulo "))
#area = math.pi*(radio**2)
#print("el area del circulo es de: ", area)

#TP Nº2
"""numero = int(input("ingrese un numero "))
if numero > 0:
    print("el numero es positivo")
elif numero < 0:
    print("el numero es negativo")
else:
    print("el numero es 0")"""

"""numeroUno = int(input("ingrese el primer numero "))
numeroDos = int(input("ingrese el segundo numero "))
if numeroUno > numeroDos:
    print("el primer numero es mayor que el segundo numero")
elif numeroDos > numeroUno:
    print("el segundo numero es mayor que el primer numero")
else:
    print("los dos numeros son iguales")"""

#TP Nº3
#for
"""numeroUno = int(input("ingrese un numero entero positivo "))
for i in range(1,11):
    numeroFinal = numeroUno * i
    print(numeroUno, " * ", i, " = ", numeroFinal)"""

"""numeroUno = int(input("ingrese un numero entero positivo "))
numeroFinal = 0
for i in range(1,numeroUno + 1,2):
    numeroFinal += i
print(numeroFinal)"""

#while
"""numeroUno = int(input("ingrese un numero entero positivo "))
S = 0
while numeroUno > 0:
    S += numeroUno
    numeroUno = int(input("ingrese un numero entero positivo "))
print("La suma de todos los numero enteros positivos ingresados es:",S)"""

"""numeroUno = int(input("ingrese un numero entero "))
NM = 0
while numeroUno != 0:
    if numeroUno > NM:
        NM = numeroUno
    numeroUno = int(input("ingrese un numero entero "))
print("El mayor numero ingresado fue el ", NM)"""

#Punto 2
"""palabra = input("Ingrese una palabra ")
cantidadDeVocales = 0
palabra = palabra.lower()
for i in range(0,len(palabra)):
    if palabra[i] == "a":
        cantidadDeVocales += 1
    elif palabra[i] == "e":
        cantidadDeVocales += 1
    elif palabra[i] == "i":
        cantidadDeVocales += 1
    elif palabra[i] == "o":
        cantidadDeVocales += 1
    elif palabra[i] == "u":
        cantidadDeVocales += 1
print(cantidadDeVocales)"""
#Punto 3
"""frase = input("ingrese una frase ")
frase = frase.lower()
fraseSinEspacion = frase.replace(" ", "")
fraseAlRevez = fraseSinEspacion[::-1]
if fraseAlRevez == fraseSinEspacion:
    print("La frase que ingreso es un palíndromo")
else:
    print("La frase que ingreso no es un palíndromo")"""