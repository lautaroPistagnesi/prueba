function probarCantidadFamiliares(){
    console.assert(
        CantidadFamiliares("") === "la cantidad de familiares no puede ser cero",
        "validarCantidadFamiliares no valido que la familia tenga almenos 1 integrante" 
    )
}
probarCantidadFamiliares()