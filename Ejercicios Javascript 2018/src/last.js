//Implementa una función last (inmutable), tal que, dado un array 
//como entrada devuelva el úlmo elemento

//declaramos funcion. Con array.length-1 nos devolverá el ultimo elemento
const last = (array) => array[array.length - 1];

//definimos un array para probar en consola
const perros = ['Bulldog', 'Husky', 'Fox Terrier', 'Pastor', 'Chihuahua'];
const escuela = [1,2,3,4,5,6,'ESO','Bachillerato'];

//mostramos por consola
console.log(last(perros));
console.log(last(escuela));