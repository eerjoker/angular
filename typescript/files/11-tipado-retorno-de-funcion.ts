(() => {

  const sumar = (a: number, b: number): number => a + b; // despues de los argumentos se aclara el tipo de lo que devuelve la función

  const nombre = ():string => 'Hola Fernando';

  const obtenerSalario = (): Promise<string> => {

    return new Promise( (resolve, reject) => {
      resolve('Esteban');
    });
  }

  obtenerSalario().then( a => console.log( a.toUpperCase() ))

})();
