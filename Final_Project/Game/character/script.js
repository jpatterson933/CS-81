const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// set our game frame rate
let gameFrame = 0;
// the higher this number, the slower the animation will render
let staggerFrames = 7;


// class that captures and creates our hero actions
class HeroAction {
    constructor(name, src, spriteWidth, spriteHeight, frames, x, y) {
        this.name = name;
        this.image = new Image();
        this.image.src = src;
        // where do we want our sprite to be at in the canvas area?
        this.x = 0;
        this.y = 0;
        // sprite width and height parameters dependent upon the action
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        // determines the width of our container and ultimately the size of the sprite
        this.width = this.spriteWidth * 0.25;
        this.height = this.spriteHeight * 0.25;
        // frame rate control
        this.frame = 0;
        this.frames = frames;
        this.frameX = 0;
        this.frameY = 0;
        // this is where we will store sprite animations
        this.spriteAnimations = [];
    }

    storeLocations() {
        // here we capture each point of each frame - this will be useful later for colliision detection
        let allFrames = {
            loc: []
        }
        for (let i = 0; i < this.frames; i++) {
            let positionX = i * this.spriteWidth;
            let positionY = 0 * this.spriteHeight;
            allFrames.loc.push({ x: positionX, y: positionY })
        }

        return this.spriteAnimations[this.name] = allFrames;

    }

    update() {
        let position = Math.floor(gameFrame / staggerFrames) % this.storeLocations().loc.length;
        this.frameX = this.spriteWidth * position;
        // ctx.fillRect(50, 50, 100, 100);

    }

    draw() {

        ctx.drawImage(this.image, this.frameX, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        if (gameFrame % staggerFrames == 0) {
            if (this.frameX < 9) this.frameX++;
            else this.frameX = 0;
        }

    }
}



// this is where we change our animation state which will impact the switch statement in our animate() function
let heroState = "idle";


// // these keys toggle between animations (wrote this on my own :))
// window.addEventListener("keydown", event => {
//     if (event.code == "Space") {
//         heroState = "jump-attack"
//     }
// })

// // window.addEventListener("keyup", event => {
// //     if (event.key == "v") {
// //         heroState = "idle"
// //     }
// // })
// window.addEventListener("keydown", event => {
//     if (event.key == "d") {
//         heroState = "running"
//     }
// })
// window.addEventListener("keyup", event => {
//     heroState = "idle";

// })



function animate() {

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    switch (heroState) {
        case ("idle"): {

            const idle = new HeroAction('idle', './imgs/idle.png', 250, 600, 10);
            idle.storeLocations();
            idle.update();
            idle.draw();

            gameFrame++;
            requestAnimationFrame(animate);
            break;
        }
        case ("running"): {
            const running = new HeroAction('running', './imgs/running.png', 350, 600, 10);
            running.storeLocations();
            running.update();
            running.draw();

    
            gameFrame++;
            requestAnimationFrame(animate);
            break;
        }

        case ("jump-attack"): {

            const running = new HeroAction('jump-attack', './imgs/jump-attack.png', 503, 600, 10);
            running.storeLocations();
            running.update();
            running.draw();

            gameFrame++;
            requestAnimationFrame(animate);
            break;

        }
    }
}

animate();