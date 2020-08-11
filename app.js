document.addEventListener('DOMContentLoaded', () => {
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')
    const bird = document.querySelector('.bird')

    let birdLeft = 220
    let birdBottom = 300
    let gravity = 2

    function startGame(){
        birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft+'px'
    }
    let timerId = setInterval(startGame, 20)

    function control (e){
        if(e.keyCode === 32){
            jump()
        }
    }
    
    function jump(){
        if(birdBottom < 480) birdBottom +=50
        bird.style.bottom = birdBottom + 'px'
    }
    document.addEventListener('keyup', control)
})