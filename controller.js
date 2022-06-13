const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    }
}

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
        case ' ':
            player.attacking = true
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
        case 'Enter':
            player2.attacking = true;
            break;
        case 'r':
            if (isOver) {
                Initialize();
            }
            break
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