//declaración de la función
const tail = ([, ...rest] = []) => rest;

//definimos un array para probar en consola
const paises=['Suiza', 'Italia','Francia','Reino Unido'];
const flores=['Maragritas','Rosas','Crisantemos'];

//mostramos por pantalla
console.log(tail(paises));
console.log(tail(flores));