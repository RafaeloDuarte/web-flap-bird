document.addEventListener('DOMContentLoaded', () => {
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')
    const bird = document.querySelector('.bird')
    const obstacleUp = document.querySelector('.obstacleUp')
    const obstacleDown = document.querySelector('.obstacleDown')

    let birdLeft = 220
    let birdBottom = 300
    let obstacleLeft = 450
    let gravity = 2

    function startGame(){
        if(birdBottom > 0) birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft+'px'
        obstacleMovement()
    }
    let timerId = setInterval(startGame, 20)

    function control (e){
        if(e.keyCode === 32){
            jump()
        }
    }

    function obstacleMovement(){
        if(obstacleLeft > -60) obstacleLeft -= gravity
        else obstacleLeft = 450
        obstacleUp.style.left = obstacleLeft+'px'
        obstacleDown.style.left = obstacleLeft+'px'
    }
    
    function jump(){
        if(birdBottom < 480) birdBottom +=50
        bird.style.bottom = birdBottom + 'px'
    }
    document.addEventListener('keyup', control)
})