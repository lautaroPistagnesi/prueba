let botonAgregar = document.querySelector("#botonAgregar")
botonAgregar.onclick = function(){
    const formulario = document.querySelector("form")
    const label = document.createElement("label")
    const input = document.createElement("input")
    const texto = document.createTextNode("Agrega un salario")
    const parrafo = document.createElement("p")
    parrafo.className += "parrafo"
    input.className += "inputs"
    label.appendChild(texto)
    parrafo.appendChild(label)
    parrafo.appendChild(input)
    formulario.appendChild(parrafo)
}
const botonQuitar = document.querySelector("#botonQuitar")
botonQuitar.onclick = function(){
    const formulario = document.querySelector(".formulario") 
    const parrafo = document.querySelector(".parrafo")
    formulario.removeChild(parrafo)
}
const botonCalcular = document.querySelector("#botonCalcular")
botonCalcular.onclick = function(){
    let i;
    let inputsSalarios = document.querySelectorAll(".inputs")
    let sumaDeInputsSalarios = 0
    for(i = 0; i < inputsSalarios.length; i += 1){
        if(Number(inputsSalarios[i].value) > 0){
        sumaDeInputsSalarios += Number(inputsSalarios[i].value)
    }
    }
    document.querySelector("#promedioAnual").value = (sumaDeInputsSalarios * 12)
    document.querySelector("#promedioMensual").value = sumaDeInputsSalarios
    let arraySalarios = []
    for(i = 0; i < inputsSalarios.length; i++){
        if(Number(inputsSalarios[i].value) > 0){
        arraySalarios.push(Number(inputsSalarios[i].value))
    }
    }
    const numeroMaximoSalario = Math.max(...arraySalarios)
    document.querySelector("#mayorSalario").value = numeroMaximoSalario
    const numeroMinimoSalario = Math.min(...arraySalarios)
    document.querySelector("#menorSalario").value = numeroMinimoSalario


}