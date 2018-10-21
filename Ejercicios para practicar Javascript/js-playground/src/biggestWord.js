// --- EJERCICIO ------------------------------------------------------------------------

// Crea una función que reciba una frase en formato string y devuelva la palabra más larga.
// En caso de haber varias con longitud máxima que devuelva siempre la primera.

function biggestWord(frase) {
    // Implementation here
    //variable donde guardaremos la palabra más larga
    var largoLetra=""; 
    //con split dividimos una cadena en subcadena y con length medimos la cantidad de letras que tiene la palabra
    frase.split(" ").forEach((palabra)=> {
        if(palabra.length > largoLetra.length){
            largoLetra = palabra;
        }
    });
    return largoLetra;
   
  }
  
  // Ejemplo
  console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
  console.log(biggestWord("Ejercicios básicos de JavaScript")); // "JavaScript"