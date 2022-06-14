const canvas = document.querySelector('canvas')

const playerhp = document.getElementById('player')
const player2hp = document.getElementById('player2')
const playerw = document.getElementById('player-wins')
const player2w = document.getElementById('player1-wins')

const gameover = document.getElementById('game-over')
const winnerText = document.getElementById('winner-text')

const context = canvas.getContext('2d')
const movementSpeed = 5
const gravity = 0.7
const damage = 15
let isOver = false

let playerimg = new Image()
let player2img = new Image()

playerimg.src = '/img/idle.png'
player2img.src = '/img/idle2.png'

const player = new Sprite({
    position: {
        x: 0,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    },
    img: 1
});
const player2 = new Sprite({
    position: {
        x: 980,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: -50,
        y: 0
    },
    img: 2
});

function Collision({ rectangle, rectangle1 }) {
    if (player.position.x <= 0 && player.velocity.x < 0)
        player.velocity.x = 0;
    else if (player.position.x + player.width >= canvas.width && player.velocity.x > 0)
        player.velocity.x = 0;
    if (player2.position.x <= 0 && player2.velocity.x < 0)
        player2.velocity.x = 0;
    else if (player2.position.x + player2.width >= canvas.width && player2.velocity.x > 0)
        player2.velocity.x = 0;
    return (rectangle.attacking && rectangle.attackHitBox.position.x + rectangle.attackHitBox.width >= rectangle1.position.x && rectangle.attackHitBox.position.x <= rectangle1.position.x + rectangle1.width)
}
function CheckEnd() {
    if (player.hp <= 0) {
        isOver = true
        winnerText.innerHTML = "Player 2 wins <br> Press R to restart"
        gameover.style.visibility = "visible"
        let wins = Number(player2w.innerHTML)
        player2w.innerText = (wins + 1).toString()
        return
    }
    else if (player2.hp <= 0) {
        isOver = true
        winnerText.innerHTML = "Player 1 wins <br> Press R to restart"
        gameover.style.visibility = "visible";
        let wins = Number(playerw.innerHTML)
        playerw.innerText = (wins + 1).toString()
    }
}

function Animate() {
    if (isOver) {
        UpdateSlider()
        return
    }
    window.requestAnimationFrame(Animate)
    context.fillStyle = "white"
    context.fillRect(0, 0, canvas.width, canvas.height)
    let image = new Image()
    image.src = '/background/whole-background-decorated.png'
    context.drawImage(image, 0, 0, 1024, 576)

    player.update()
    player2.update()

    player.velocity.x = 0
    player2.velocity.x = 0

    //MOVEMENT
    //player
    if (keys.a.pressed && player.lastPressedKey === 'a') {
        player.velocity.x = -movementSpeed
    }
    else if (keys.d.pressed && player.lastPressedKey === 'd') {
        player.velocity.x = movementSpeed
    }

    //player2
    if (keys.ArrowLeft.pressed && player2.lastPressedKey === 'ArrowLeft') {
        player2.velocity.x = -movementSpeed
    }
    else if (keys.ArrowRight.pressed && player2.lastPressedKey === 'ArrowRight') {
        player2.velocity.x = movementSpeed
    }

    //COLLISION
    if (Collision({
        rectangle: player,
        rectangle1: player2
    }) && player.attacking) {
        player.attacking = false
        player2.hp -= damage
        CheckEnd()
        UpdateSlider()
    }
    if (Collision({
        rectangle: player2,
        rectangle1: player
    }) && player2.attacking) {
        player2.attacking = false
        player.hp -= damage
        CheckEnd()
        UpdateSlider()
    }
    player.attacking = false
    player2.attacking = false

}
function UpdateSlider() {
    playerhp.style.transform = `scaleX(${player.hp / 100})`
    player2hp.style.transform = `scaleX(${player2.hp / 100})`
}

function Initialize() {
    canvas.width = 1024
    canvas.height = 576


    player.hp = 100;
    player2.hp = 100;

    player.position = {
        x: 0,
        y: 100
    }
    player2.position = {
        x: 980,
        y: 100
    }
    isOver = false;
    gameover.style.visibility = "collapse";
    UpdateSlider();
    Animate()
}
Initialize()