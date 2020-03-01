(() => {

  // es convención que la clase se defina en CamelCase
  /*
  class Avenger {

    nombre: string;
    equipo: string;
    nombreReal?: string;

    puedePelear?: boolean;
    peleasGanadas?: number;

    // el constructor se ejecuta al crear una nueva instancia de la clase
    constructor( nombre: string, equipo: string ){
      // inicializa las propiedades de la clase
      this.nombre = nombre;
      this.equipo = equipo;
    }
  }
  */

  class Avenger {

    // con public o private indico el nivel de acceso. Ponerlo en el constructor crea la propiedad y la inicializa
    constructor( public nombre: string,
                 public equipo: string,
                 public nombreReal: string,
                 public puedePelear: boolean = true,
                 public peleasGanadas: number = 0 ){}

  }

  const antman = new Avenger( 'Antman', 'Captain', 'Scott' );

  console.log( antman );

})();
