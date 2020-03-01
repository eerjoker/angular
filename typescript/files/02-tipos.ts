(function(){
/*
  const mensaje = 'Hola'; // const no permite cambiar el valor en su scope. Ocupa menor espacio en memoria
  const URL_SERVICIOS = 'url'; // se suelen escribir en mayúsculas

  if(true){
    let mensaje = 'Mundo'; // let solo define para el scope donde está
  }

  console.log(mensaje)
*/

  let mensaje: string = 'Hola'; // es redundante indicar el tipo de variable a la vez que la defino
  let numero: number = 123;
  let booleano: boolean = true; // false
  let hoy: Date = new Date(); // Date() es una funcion constructora

  let cualquiercosa; // es tipo any
  cualquiercosa = mensaje;
  cualquiercosa = numero;
  cualquiercosa = booleano;
  cualquiercosa = hoy;

  let spiderman = {
    nombre: 'Peter',
    edad: 30
  }

  spiderman = {
    nombre: 'Juan',
    edad: 40
    //poder: 'Trepar paredes' // no permite asignar nuevas propiedades
  }

})();
