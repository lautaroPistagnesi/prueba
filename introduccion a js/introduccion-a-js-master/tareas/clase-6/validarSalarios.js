function validarSalarios(salarios) {
    if (salarios.value === "") {
        return "este campo no puede ser vacio";
    } else if (salarios.value === 0) {
        return "este campo no puede ser 0";
    } else if (!/^[0-9]$/.test(salarios.value)) {
        return "este campo solo puede tener numeros";
    } else {
        return "";
    }
}
