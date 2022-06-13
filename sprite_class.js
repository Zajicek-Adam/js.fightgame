class Sprite {
    constructor({position, velocity, color}){
        this.position = position
        this.velocity = velocity
        this.height = 150
        this.lastPressedKey
        this.attackHitBox = {
            position: this.position,
            width: 100,
            height: 50,
        }
        this.color = color
    }
    render(){
        context.fillStyle = this.color
        context.fillRect(this.position.x, this.position.y, 50, this.height)

        //attack hitbox
        context.fillStyle = 'blue'
        context.fillRect(this.attackHitBox.position.x, this.attackHitBox.position.y, this.attackHitBox.width, this.attackHitBox.height)
    }
    update(){
        this.render()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if(this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0
        }
        else{
            this.velocity.y += gravity
        }
    }
}