/* El objevo de este ejercicio es crear una máquina tragaperras ulizando clases donde cada vez 
que juguemos insertemos una moneda. Cada máquina tragaperras (instancia)
tendrá un contador de monedas que automácamente se irá incrementando conforme vayamos jugando.*/
/*Cuando se llame al método play el número de monedas se debe incrementar de forma automáca y 
debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. 
El usuario habrá ganado en caso de que los tres booleanos sean true  */

//creamos la clase slotMachine con un contructor donde las monedas al principio estaran a 0
class slotMachine{
    constructor(){
        this.coin = 0;
    }


//crearemos un método random para incrementar de foprma automática las monedas.
//como Math.random, devuelve entre 0 y 1 le asignaremos 0.5.
createRandom(){
    return Math.random() >= 0.5;
}

//creamos el método play para saber las monedas que saldran con el método random que creamos anteriormente

    play(){
        //la moneda se tendrá que incrementar cada vez
        this.coin++;
        //creamos tres booleanos aleatorios utilizando la funcion createRandom
        const slot1 = this.createRandom();
        const slot2 = this.createRandom();
        const slot3 = this.createRandom();

        //con un bucle mostraremos el mensaje de si ha ganado o no y mostramos la cantiodad de monedas
            if(slot1 && slot2 && slot3){
                console.log (`Has ganado ${this.coin} monedas.`);
                this.coin = 0;
            }
            else{
                console.log('Lo siento, esta vez no has tenido suerte');
            }
    }
}

//reiniciamos el juego
const machine = new slotMachine();
machine.play()