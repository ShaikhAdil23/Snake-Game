import { snakeBody } from "./snake.js"

const scoreBoard = document.getElementById('score-board')
const highScoreBoard = document.getElementById('high-score-board')

// export function CurrentScore() {
//     let scoreValue = snakeBody.length - 1;
//     scoreBoard.innerHTML = 'Score: ' + scoreValue;
//     if(scoreValue > highScoreValue ){}
// }

export function HighScore() {
    let highScore = localStorage.getItem('highScore')
    if(highScore === null) {
        localStorage.setItem('highScore', JSON.stringify(0))
    }
    else{
        highScore = JSON.parse(highScore)
        highScoreBoard.innerHTML = 'High-Score: ' + highScore
    }
    
    let scoreValue = snakeBody.length - 1;
    scoreBoard.innerHTML = 'Score: ' + scoreValue;
    if(scoreValue > highScore){
        highScore = scoreValue
        localStorage.setItem('highScore', JSON.stringify(highScore))
        highScoreBoard.innerHTML = 'High-Score: ' + highScore
    }
}

// export function Score() {
//     let scoreValue = snakeBody.length - 1 
//     scoreBoard.innerHTML = 'Score: ' + scoreValue
//     if(scoreValue>highScoreValue){
//         highScoreValue = scoreValue
//         localStorage.setItem('highScore', JSON.stringify(highScoreValue))
//         highScoreBoard.innerHTML = "High-Score: " + highScore

//     }
// }
// export function HighScore() {
//     let highScore = localStorage.getItem("highScore")
//     if(highScore === null){
//         highScoreValue = 0
//         localStorage.setItem('highScore', JSON.stringify(highScoreValue))
//     }
//     else{
//         highScoreValue = JSON.parse(highScore)
//         highScoreBoard.innerHTML = "High-Score: " + highScore
//     }
// }