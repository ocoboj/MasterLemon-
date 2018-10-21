
// Solución
function values(obj) {
  //creamos un array para guardar los datos
    var resultado = [];
    //iteramos por cada obejto y lo alamcenamos en el array
    for(var elem in obj) {
      resultado.push(obj[elem]);
    }
    //devolvemos el resultado
    return resultado;
  } 
   // Ejemplo:
   console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]
   
   // Challenge: Evita añadir las propiedades heredadas en caso de ser instancia de una clase:
   // Ejemplo:
   function Person(name) {
    this.name = name
   }
   
   Person.prototype.walk = function() {
    console.log("I'm walking");
   };
   
   var john = new Person("John");
   console.log(values(john)); 
   //Funcion que evita añadir propiedades heredadas en una clase por esp usamos el "hasOwnProperty"
   function cambio(obj) {
    var resultado = [];
    for (var elem in obj) {
      if(obj.hasOwnProperty(elem)) {
        resultado.push(obj[elem]);
      }
    }
    return resultado;
  }
  
  var john = new Person("John");
  console.log(cambio(john)); // ["John"]