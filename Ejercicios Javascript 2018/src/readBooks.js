//Crea una función isBookRead que reciba una lista de libros y un tulo y devuelva si se ha leído o no dicho libro. 
//Un libro es un objeto con title como string y isRead como booleano. 
//En caso de no exisr el libro devolver false 

//creamos una funcion donde le pasamos los dos parametros  (libro y titulo a buscar)

function isBookRead (libros, busquedaLibro){
    //variable donde almacenamos el libro encontrado
    var tituloLibro = libros.find(function(libro){
        //Devolver el titulo del libro si es igual al libro buscado
        return libro.titulo === busquedaLibro;
    });
     //Devolver si el titulo del libro encontrado esta leido
     return Boolean(tituloLibro) && tituloLibro.isRead;
}

//creamos arrays para poder comprobar la función
const libros = [   
    {titulo: "Harry Potter y la piedra filosofal", isRead: false},   
    {titulo: "Canción de hielo y fuego", isRead: true},   
    {titulo: "Devastación", isRead: true}, 
]; 
 
console.log(isBookRead(libros, "Devastación"));
console.log(isBookRead(libros, "Canción de hielo y fuego")); 
console.log(isBookRead(libros, "Los Pilares de la Tierra")); 

console.log(libros);