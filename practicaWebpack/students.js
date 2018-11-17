
import * as averageService from "./averageService";

const scores = [90, 75,60, 99, 94, 30];
//const averageScore = getAvg(scores);
//const totalScore = getTotalScore(scores);

 const averageScore = averageService.getAvg(scores);
 const totalScore = averageService.getTotalScore(scores);

const messageToDisplay = `average score ${averageScore}`;
const messageToDisplayTotal = `total score ${totalScore}`;

document.write(messageToDisplay);
document.write(messageToDisplayTotal);