function probarValidarCantidadFamilia(){
    console.assert(
        validarCantidaFamilia("") === "los integrantes de tu familia no pueden ser 0 o nada",
        "ValidarCantidadFamilia no valido que la cantidad de integrantes de la familia no fuera 0"
    )
    console.assert(
        validarCantidaFamilia("2") === "los integrantes de tu familia no pueden ser letras",
        "validarCantidaFamilia no valido que los integrantes de la familia fueran numeros"
    )
}
function provarValidarErrorEdad(){
console.assert(
    validarCantidaFamilia("") === "la edad de tu familiar no puede ser nada o 0",
    "ValidarCantidadFamilia no valido que la cantidad de integrantes de la familia no fuera 0"
)}
probarValidarCantidadFamilia()