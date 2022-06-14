class Sprite {
    constructor({ position, velocity, img, offset }) {
        this.position = position
        this.velocity = velocity
        this.width = 100
        this.height = 150
        this.lastPressedKey
        this.attackHitBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset,
            width: 200,
            height: 50,
        }
        this.attacking = false
        this.hp = 100
        this.img = img
    }
    render() {
        context.fillStyle = 'transparent'
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
        console.log(player.attacking)
        if (this.img == 1) {
            context.drawImage(playerimg, this.position.x, this.position.y, this.width, this.height)
        }
        else {
            context.drawImage(player2img, this.position.x, this.position.y, this.width, this.height)
        }

        //attack hitbox
        if (this.attacking) {
            context.fillStyle = 'transparent'
            context.fillRect(this.attackHitBox.position.x, this.attackHitBox.position.y, this.attackHitBox.width, this.attackHitBox.height)
            if (player.attacking) {
                playerimg.src = '/img/attack.png'
                player.width = 200
                context.drawImage(playerimg, this.position.x, this.position.y, this.width, this.height)
                setTimeout(() => {
                    playerimg.src = '/img/idle.png'
                    player.width = 100
                }, 300)
            }
            if (player2.attacking) {
                player2img.src = '/img/attack2.png'
                player2.width = 200
                player2.position.x -= 100
                context.drawImage(player2img, this.position.x, this.position.y, this.width, this.height)
                setTimeout(() => {
                    player2img.src = '/img/idle2.png'
                    player2.width = 100
                    player2.position.x += 100
                }, 300)
            }
        }
    }
    update() {
        this.render()
        this.attackHitBox.position.x = this.position.x + this.attackHitBox.offset.x;
        this.attackHitBox.position.y = this.position.y;

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        }
        else {
            this.velocity.y += gravity
        }
    }
    attack() {
        this.attacking = true
    }
}