class Sprite {
    constructor({position, velocity, img, offset}){
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
            width: 100,
            height: 50,
        }
        this.attacking = false
        this.hp = 100
    }
    render(){
        context.fillStyle = 'transparent'
        context.fillRect(this.position.x, this.position.y, this.width, this.height)
        context.drawImage(playerimg, this.position.x, this.position.y, this.width, this.height)

        //attack hitbox
        if(this.attacking){
            context.fillStyle = 'blue'
            context.fillRect(this.attackHitBox.position.x, this.attackHitBox.position.y, this.attackHitBox.width, this.attackHitBox.height)    
        }
    }
    update(){
        this.render()
        this.attackHitBox.position.x = this.position.x + this.attackHitBox.offset.x;
        this.attackHitBox.position.y = this.position.y;

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if(this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0
        }
        else{
            this.velocity.y += gravity
        }
    }
    attack(){
        this.attacking = true
    }
}