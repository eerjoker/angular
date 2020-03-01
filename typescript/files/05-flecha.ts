(function(){

  const miFuncion = function( a: string ) {
    return a.toUpperCase();
  }

  const miFuncionF = ( a: string ) => a.toUpperCase();
    /*
    {
      return a;
    }
    */

    /*
    console.log( miFuncion( 'Normal' ) );
    console.log( miFuncionF( 'Flecha' ) );
    */

    const sumarN = function( a: number, b: number) {
      return a + b;
    }

    const sumarF = ( a: number, b: number ) => a + b;

    /*
    console.log( sumarN(4, 5) );
    console.log( sumarF(1, 2) );
    */

    const hulk = {
      nombre: 'Hulk',
      smash() {

        setTimeout( () => {
          // usar function() modificaría a lo que apunta this y caería undefined, las funciones flecha no lo modifican
          console.log( `${this.nombre} smash!!!` );

        }, 1000 );
      }
    }

    hulk.smash();

})();
