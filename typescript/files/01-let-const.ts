(function(){

  const mensaje = 'Hola'; // const no permite cambiar el valor en su scope. Ocupa menor espacio en memoria
  const URL_SERVICIOS = 'url'; // se suelen escribir en mayúsculas

  if(true){
    let mensaje = 'Mundo'; // let solo define para el scope donde está
  }

  console.log(mensaje)

})(); // función anónima autoinvocada, para evitar errores de repetición de variables
