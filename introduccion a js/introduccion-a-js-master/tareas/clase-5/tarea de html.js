const botonPresionado = document.querySelector("#guntar")
botonPresionado.onclick = function(){
    const nombreUsuario = document.querySelector("#nombre-usuario").value
    const edadUsuario = document.querySelector("#edad-usuario").value
    let titulo = document.querySelector("h1")
    titulo.textContent = "bienvenido, " + nombreUsuario
    return false 
}

