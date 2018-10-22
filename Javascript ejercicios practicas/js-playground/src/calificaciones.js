// --- EJERCICIO ------------------------------------------------------------------------

// [!] NOTA: Realiza primero el ejercicio "values".

// Dada la calificación de alumnos de una clase en forma de objeto como el siguiente:

const eso2o = {
    David: 10,
    Maria: 9.5,
    Jose:9.7,
    Juan: 10,
    Blanca: 6,
    Carmen: 10,
  };
  
  // Implementa una función que muestre la media de la clase de forma textual, es decir, siguiendo
  // el sistema de calificación español:
  // Matrícula de Honor = 10
  // Sobresaliente = entre 9 y 10
  // Notable = entre 7 y 9
  // Bien = entre 6 y 7
  // Suficiente = entre 5 y 6
  // Insuficiente = entre 4 y 5
  // Muy deficiente = por debajo de 4

//Implementamos una función donde sacaremos la media de la suma de todas las notas
const calcularMedia = function(classResults){
  //variable donde guardaremos la suma de las notas
  var resultado = Object.values(classResults);
  //sacamos la media total
  return resultado.reduce(function(suma, media){
    return suma + media;
  }, 0) / resultado.length;
}

//implementamos un switch para clasificar la nota media sacada anteriormente
const getClasificacion = function (media){
  switch (Math.floor(media)){
    case 0:
    case 1:
    case 2:
    case 3:
    return "Muy deficiente";
    case 4:
    return "Insuficiente";
    case 5:
    return "suficiente";
    case 6:
    return "Bien";
    case 7:
    case 8:
    return "Notable";
    case 9:
    return "Sobresaliente";
    default:
    return "Matrícula de Honor";
  } 
}


  //Función para mostrar la nota en forma textuals
   const mostrarMedia= function (classResults) {

   console.log(getClasificacion(calcularMedia(classResults)));

  } 
 
  mostrarMedia(eso2o);





  // TIP: Rompe en tantas funciones auxiliares como necesites.
  // TIP: Utiliza el ejercicio "values" para extraer los valores de un objeto.
  // En Array.prototype también cuentas con otro método que podría serte de utilidad
  // para transformar un array a un único valor.