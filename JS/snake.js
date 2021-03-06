import { getInputDirection } from "./input.js"

const foodSound = new Audio('../SoundEffect/food.mp3')

export const snakeBody = [{ x: 11, y: 11 }]
let newSegments = 0

export function SNAKE_SPEED() {
    return snakeBody.length + 5
}

export function update() {
    addSegments()

    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[ i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {
    snakeBody.forEach((segment, index) => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        if (index === 0) {
            snakeElement.classList.add('snakeHead')
        } else {
            snakeElement.classList.add('snake')
        }
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount) {
    newSegments += amount
    foodSound.play()
}

export function onSnake(position , { iqnoreHead = false} = {}) {
    return snakeBody.some((segment, index) => {
        if (iqnoreHead && index === 0) return false
        return equalPosition(segment, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { iqnoreHead: true })
}


function equalPosition(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    newSegments = 0
}
