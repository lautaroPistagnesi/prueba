function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );
 console.assert(
      validarNombre(
      '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres'
  );
}
probarValidarNombre()

function validarCiudadUsuario(){
  console.assert(
      validarCiudad("") === "La ciudad no puede ser un espacio vacio", 
      "validarCiudad no valido que el usuario seleccionara una ciudad"
  );
}
validarCiudadUsuario()

function pruebaValidarRegalo(){
  console.assert(
    validarRegalo("") === "el regalo no puede ser vacio",
    "validarRegalo no valido que el regalo fuera vacio"
  )
  
  console.assert(
    validarRegalo("123456789a123456789a123456789a123456789a123456789a123456789a123456789a123456789a123456789a123456789a") === 
    "el regalo no puede tener mas de 100 caracteres",
    "validarRegalo no valido que el regalo no tuviera mas de 100 caracteres"
  )
}
pruebaValidarRegalo()
