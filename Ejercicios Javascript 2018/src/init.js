//Implementa una función init (inmutable), tal que, dado un array
//como entrada devuelva todos los elementos menos el úlmo. 
//Uliza los métodos que ofrece Array.prototype.

//declaramos la funcion
//slice(-1) lo que hará es quitarnos el último elemento del array

//const init = (array) => array.slice(-1); => con esto solo conseguimos mostrar los últimos elementos del array

//slice(0, -1)=> Definimos (inicio del array, final del array)
const init = (array) => array.slice(0, -1);

const init = (array) => array.slice(0, array.length-1);
//creamos array para mostrar en consola 
const coches = ['BMW', 'Ferrari', 'Porsche','Seat', 'Ford', 'Volkswagen'];
const numeros = [100, 34, 56, 89, 90, 14, 1];

//Mostramos por consola el resultado
console.log(init(coches));
console.log(init(numeros));