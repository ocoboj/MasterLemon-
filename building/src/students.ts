import {getAvg} from './averageService';
var logoImg = require('./content/logo_1.png');



//jquery
$('body').css('background-color', 'lightSkyBlue');



// Let's use some ES6 features
const scores= [90, 75, 60, 99, 94, 30];
const averageScore : number = getAvg(scores);
const messageToDisplay = `average score ${averageScore}`;

document.write(messageToDisplay);

 const img=document.createElement('img');
 img.src = logoImg;

 document.getElementById('imgContainer').appendChild(img);