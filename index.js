const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
const movementSpeed = 5
const gravity = 0.7

const player = new Sprite({
    position: {
        x: 0,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    },
    color: 'red'
});
const player2 = new Sprite({
    position: {
        x: 400,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    },
    color: 'green'
});

function Animate() {
    window.requestAnimationFrame(Animate)
    context.fillStyle = "black"
    context.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    player2.update()

    player.velocity.x = 0
    player2.velocity.x = 0

    //MOVEMENT
    //player
    if(keys.a.pressed && player.lastPressedKey === 'a'){
        player.velocity.x = -movementSpeed
    }
    else if(keys.d.pressed && player.lastPressedKey === 'd'){
        player.velocity.x = movementSpeed
    }

    //player2
    if(keys.ArrowLeft.pressed && player2.lastPressedKey === 'ArrowLeft'){
        player2.velocity.x = -movementSpeed
    }
    else if(keys.ArrowRight.pressed && player2.lastPressedKey === 'ArrowRight'){
        player2.velocity.x = movementSpeed
    }

    //COLLISION
    if(player.attackHitBox.position.x + player.attackHitBox.width >= player2.position.x){

    }
}

function Initialize() {
    canvas.width = 1024
    canvas.height = 576
    context.fillRect(0, 0, canvas.width, canvas.height)
    Animate()
}
Initialize()