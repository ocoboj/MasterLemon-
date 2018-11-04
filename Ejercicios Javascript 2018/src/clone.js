//Implementa una función clone que, a parr de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source 


function clone(source) {
    var result = {};
    for (var key in source) {
            result[key] = source[key];
    }
    return result;
  } 

  const src = {name: "Maria", surname: "Ibañez", country: "SPA"};
  const result = clone(src);
  console.log(result); 

  