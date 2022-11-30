// adds suggestions for html canvas elements 
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');
// these values must be the same as they are in style css
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
// number of enemeies
const numberOfEnemeies = 10;
// store our enemies
const enemiesArray = [];

// animation frame rate
let gameFrame = 0;



// store our positions and size of a single enemy


class Enemy {
    constructor() {
        // sprite image
        this.image = new Image();
        this.image.src = './imgs/attack.png';
        // randomize the x and y start positions
        // sprite property
        this.spriteWidth = 288;
        this.spriteHeight = 288;
        this.width = this.spriteWidth / 3;
        this.height = this.spriteHeight / 3;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);

        this.frame = 0;
        // randomize frame activity speed
        this.attackSpeed = Math.floor(Math.random() * 12 + 1);
    }
    // shared class method for movement updates
    update() {
        // update method that updates the movement of our sprite on the x and y axis
        // the first number is double the second number to keep sprite in relative position
        this.x += Math.random() * 1 - .5;
        this.y += Math.random() * 1 - .5;
        // animates sprites saying if the game frame divided by the attackspeed animation is 0 then run our ternary operator
        if (gameFrame % this.attackSpeed === 0) {
            // ternary operator to cycle through frames
            this.frame > 18 ? this.frame = 0 : this.frame++;

        }
    }
    // allows us to animate hundreds of enemeys
    draw() {
        // arguments 1, 2, 3, determine sprite image, where on the sprite image we want to crop out
        // specifically, aregumetn 2 determines which sprite we are showing on the sprite sheet
        // arguments 4, 5, determine the width and height of each sprite on our sprite sheet
        // the last four arugments determine where on the canvas we want our sprite to appear
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}



// const enemy1 = new Enemy();
for (let i = 0; i < numberOfEnemeies; i++) {
    enemiesArray.push(new Enemy());
}

function animateEnemy() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    })

    gameFrame++;

    // creates animation loop
    requestAnimationFrame(animateEnemy)
}

animateEnemy();