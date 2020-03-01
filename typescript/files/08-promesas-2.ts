(() => {

  // luego de los argumentos, se aclara el tipo de dato que devolverá la promesa si se resuelve
  const retirarDinero = ( montoRetirar: number ): Promise<number> => {

    let dineroActual = 1000;

    return new Promise( ( resolve, reject ) => {

      if ( montoRetirar > dineroActual ) {
        reject( 'No hay suficientes fondos' );
      } else {
        dineroActual -= montoRetirar; // es como decir dineroActual = dineroActual - montoRetirar
        resolve( dineroActual );
      }

    } );
  }

  retirarDinero( 500 )
      .then( montoActual => console.log( `Me queda ${ montoActual }` ) )
      .catch( console.warn ); // en este caso es lo mismo que poner dentro del catch: err => console.warn( err )

})();
