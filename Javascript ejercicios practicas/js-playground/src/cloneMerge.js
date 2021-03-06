// --- EJERCICIO ------------------------------------------------------------------------

// A. Implementa una función clone que devuelva un objeto clonado a partir de otro:
function clone(source) {
    //variable para guardar el resultado
    var resultado = {};
    //iteramos
    for (var guardar in source) {
        //clonamos
      resultado[guardar] = source[guardar];
    }
    //devolvemos el resultado
    return resultado;
  } 
  
  // B. Dados dos objetos cualesquiera, implementa una función "merge" que mezcle uno sobre otro.
  // El objeto resultante debe ser la mezcla de las propiedades del objeto "source" sobre las
  // del objeto "target". TIP: Usa la función "clone" del apartado A.

   //creamos la función merge para mezclar los dos  objetos
  function merge(source, target) {
      //creamos variable para guardar el resultado
    var resultado = clone(target);
    //iteramos y mezclamos los datos
    for (var key in source) {
      resultado[key] = source[key];
    }
    //devolvemos el resultado
    return resultado;
  }
   
  // Por ejemplo, dados estos 2 objetos:
  var a = {name: "Maria", surname: "Ibañez", country: "SPA"};
  var b = {name: "Luisa", age: 31, married: true};
  // El resultado de mezclar a sobre b sería:
  merge(a, b) // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}