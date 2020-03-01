(function(){

  function activar( quien: string,
                    momento?: string,
                    objeto: string = 'batiseñal' ){
    // objeto ya está por defecto, momento es un argumento opcional
    if( momento ){
      console.log(`${ quien } activó la ${ objeto } en la ${ momento }.`);
    } else {
      console.log(`${ quien } activó la ${ objeto }`);
    }
  } // los argumentos se ordenan: obligatorios, opcionales y por defecto

  activar('Gordon', 'tarde');

})();
