// --- EJERCICIO ------------------------------------------------------------------------

// Crea una función tal que, dado un número entero de inicio (from) y otro de fin (to),
// encuentre los números primos entre ellos y los muestre por pantalla.

/* Puedes crearte una función auxiliar para saber si un número es primo o no, y 
// utilizarla en tu función principal. Es buena práctica crear funciones auxiliares
que hagan una sola cosa (principio de única responsabilidad).*/
function esPrimo(num){
    if(num<=1) return false;

    for (var i =2, primo=true; i<num && primo; i++){
        primo = num % i !==0;
    }
    return primo;
}


function mostrarPrimos(from, to) {
    // Implementation here.
    for(var i=from; i<=to;i++){
        console.log(i.toString() + (esPrimo(i)? " es un numero primo" : " no es un numero primo"))
    }
  }

  mostrarPrimos(1,200);

  // --- MEJORA ------------------------------------------------------------------------
  
  // Se puede mejorar mucho el rendimiento del ejercicio anterior.
  // Al buscar si un numero es primo, podemos dejar de comprobar
  // si es divisible por cada entero mayor que uno una vez alcancemos
  // la raiz cuadrada de dicho número.

  function sonPrimos(num){
      if(num === 0 || num === 1) return false;

      for(var i=2, primo = true, root = Math.sqrt(num); i<=root && primo; i++){
         primo = num % i!==0; 
      }
      return primo;
      
  }