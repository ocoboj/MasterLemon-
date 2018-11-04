//Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

//declaración de la función
const head = ([first] = []) => first;

//definir array
const frutas = ['pera','uva', 'manzana'];
const fruta2= ['kiwi','platano'];
const numeros=[1,2,3];

//llamada
console.log(head(frutas));
console.log(head(fruta2));
console.log(head(numeros));