(function(){

  function getEdad(){
    return 100 + 100 + 300
  }

  const nombre   = 'Esteban';
  const apellido = 'Rivera';
  const edad     = 25;

  //const salida = nombre + " " + apellido + " (Edad: " + edad + ")"
  const salida = `${ nombre } \n${ apellido }
  (Edad: ${ /*edad + 100*/ getEdad() })`; // se permite el procesamiento de información con código javascript dentro de ${}
  // con el enter toma en cuenta el espacio al principio de la línea, para evitar eso se puede usar \n para salto de línea
  console.log(salida);
})();
