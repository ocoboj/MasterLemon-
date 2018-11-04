//Implementa una función merge que, dados dos objetos de entrada 
//source y target , devuelva un nuevo objeto con todas las propiedades de 
//target y de source , y en caso de propiedades con el mismo nombre, source 
//sobreescribe a target .



//declaramos la función
function merge(source, target) {
    var result = clone(target);
    for (var key in source) {
      result[key] = source[key];
    }
    return result;
  }

//Por ejemplo, dados estos 2 objetos:
const a = {name: "Maria", surname: "Ibañez", country: "SPA"}; 
const b = {name: "Luisa", age: 31, married: true}; 

const result ={...a,...b};
console.log(result);



  
