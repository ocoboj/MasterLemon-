//Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, 
//devuelva la concatenación de ambos. Uliza rest / spread operators.

//declaramos la función
const concat = (a, b) => [...a, ...b];

//Multiples Arrays???


//definimos 2 arrays
const meses = ['Enero', 'Febrero', 'Abril', 'Octubre', 'Noviembre' ];
const estaciones = ['Invierno', 'Primavera', 'Verano', 'Otoño'];
const perros = ['Bulldog', 'Husky', 'Fox Terrier', 'Pastor', 'Chihuahua'];
const escuela = [1,2,3,4,5,6,'ESO','Bachillerato'];


//mostramos por consola
console.log(concat(meses,estaciones));


 