(() => {

  // Interfaces indican las reglas que tiene que cumplir un objeto para utilizarlo como un tipo. No tiene constructores

  interface Xmen {
    nombre: string;
    edad: number;
    poder?: string; // es opcional
  }

  const enviarMision = ( xmen: Xmen ) => {
    console.log(`Enviando a ${xmen.nombre} a la misión`);
  }

  const regresarAlCuartel = ( xmen: Xmen ) => {
    console.log(`Regresando a ${xmen.nombre} al cuartel`);
  }

  // Puedo definir la interfaz que pertenece el objeto
  const wolverine: Xmen = {
    nombre: 'Logan',
    edad: 60
  }

  enviarMision( wolverine );
  regresarAlCuartel( wolverine );


})();
