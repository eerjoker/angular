(() => {

  console.log('Inicio');

  const prom1 = new Promise( ( resolve, reject ) => {

    setTimeout( () => {
      reject( 'Se terminó el timeout ');
    }, 1000);

  }); // para que typescript traduzca una promesa al ES5 se necesitan librerías de terceros

  prom1
      .then( mensaje => console.log( mensaje ))
      .catch( err => console.warn( err ));
  console.log('Fin');

})();
