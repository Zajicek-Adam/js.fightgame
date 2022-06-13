const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    }
}
const jumpForce = -20

window.addEventListener('keydown', e => {
    switch (e.key) {
        //player 1
        case 'a':
            keys.a.pressed = true
            player.lastPressedKey = e.key
            break;
        case 'd':
            keys.d.pressed = true
            player.lastPressedKey = e.key
            break;
        case 'w':
            if(player.velocity.y != 0)
                break;
            player.velocity.y = jumpForce
            break;
        //player 2
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            player2.lastPressedKey = e.key
            break;
        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            player2.lastPressedKey = e.key
            break;
        case 'ArrowUp':
            if(player2.velocity.y != 0)
                break;
            player2.velocity.y = jumpForce
            break;
    }
})
window.addEventListener('keyup', e => {
    switch (e.key) {
        //player 1
        case 'a':
            keys.a.pressed = false
            break;
        case 'd':
            keys.d.pressed = false

            break;
        //player 2
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break;
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break;
    }
})