let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }
var startingX , startingY , movingX , movingY;
const MovementSound = new Audio('../SoundEffect/move.mp3')

window.addEventListener('keydown', e => {
    MovementSound.play()
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
            case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break
    }
})
    
window.addEventListener('keydown', e => {
    MovementSound.play()
    switch (e.key) {
        case 'w':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            snakeElement
            break
        case 's':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
            case 'a':
                if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break
        case 'd':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break
    }
})


window.addEventListener('touchstart', e => {
    startingX = e.touches[0].clientX
    startingY = e.touches[0].clientY
})
window.addEventListener('touchmove', e => {
    movingX = e.touches[0].clientX
    movingY = e.touches[0].clientY
})
window.addEventListener('touchend', e => {
    MovementSound.play()
    let swipeUp = startingY - 12 > movingY;
    let swipeDown = startingY + 12 < movingY;
    let swipeLeft = startingX - 12 > movingX;
    let swipeRight = startingX + 12 < movingX;

    if (swipeRight && lastInputDirection.x == 0) {
        inputDirection = { x: 1, y: 0 }
    }
    if (swipeLeft && lastInputDirection.x == 0) {
        inputDirection = { x: -1, y: 0 }
    }
    if (swipeDown && lastInputDirection.y == 0) {
        inputDirection = { x: 0, y: 1 }
    }
    if (swipeUp && lastInputDirection.y == 0) {
        inputDirection = { x: 0, y: -1 }
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}

