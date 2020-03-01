(() => {

  const avenger = {
    nombre: 'Steve',
    clave: 'Capitán América',
    poder: 'Supersoldado'
  }

  // Destructuring - puedo extraer los argumentos que quiera en cualquier orden
  // con {} extraigo las propiedades de objetos, con [] desestructuro arreglos

  //const { nombre, poder } = avenger;

  // Lo puedo hacer como parámetros de una función
  const extraer = ( { nombre, poder, clave }: any ) => {

    console.log( nombre ); // no hace falta poner avenger.nombre
    console.log( clave );
    console.log( poder );
  }

  // extraer ( avenger );

  const avengers: string[] = ['Thor', 'Iron Man', 'Spiderman']; // es un array de strings

  //const [ loki, ironman, spider ] = avengers;

  // En caso de los arreglos, se respeta el orden

  const [ , , spider ] = avengers; // solo extrae la tercera posición

  //console.log( loki );
  //console.log( ironman );
  //console.log( spider );

  const extraerArr = ( [ thor, ironman, spiderman ]: string[] ) => {

    console.log( thor );
    console.log( ironman );
    console.log( spiderman );
  }

  extraerArr( avengers );

})();
