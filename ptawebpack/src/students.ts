/*import {getAvg} from "./averageService";

$('body').css('backgroundcolor', 'lightSkyBlue');

const scores: number[] = [90, 75, 60, 99, 94, 30];
const averageScore: number = getAvg(scores);
const messageToDisplay: string = `average score ${averageScore}`;

document.write(messageToDisplay);*/

const  logoImg = require('./content/dibujo.jpg');

const  logoImga = require('./content/dibu.jpg');


const img = document.createElement('img');
const imga = document.createElement('img');



img.src = logoImg;
imga.src = logoImga;



document.getElementById('imgContainer').appendChild(img);
document.getElementById('imgDibu').appendChild(imga);


