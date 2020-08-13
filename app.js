document.addEventListener('DOMContentLoaded', () => {
    const gameDisplay = document.querySelector('.game-container')
    const bird = document.querySelector('.bird')
    const obstacleUp = document.querySelector('.obstacleUp')
    const obstacleDown = document.querySelector('.obstacleDown')
	const displayText = document.getElementById('score')

    let birdLeft = 220
    let birdBottom = 300
    let obstacleLeft = 400
	let obstacleRigth = obstacleLeft+50
	let groundBase = 500
    let gravity = 2
	let score = 0
	let timer = 0
	let condition = true

    function startGame(){
        if(birdBottom > 0) birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft+'px'
		birdBorder = birdLeft+50
		obstacleRigth = obstacleLeft+50
		
		if((birdBorder === obstacleLeft && (birdBottom<200 || birdBottom>330))
			|| (birdBorder === obstacleLeft+50 && birdBottom<200)
			|| birdBottom === 50) {
			reload()
		}
		
		if(birdLeft > obstacleLeft && condition && obstacleRigth > 0){
			score++
			condition = false
		} else if(obstacleRigth < 0 && !condition) {
			condition = true
			obstacleRigth = 0
		}
		displayText.innerHTML = score
        obstacleMovement()
    }
    let timerId = setInterval(startGame, 20)
	
	function reload(){
		alert('Perdeu')
		window.location.reload()
	}

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