const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

// layer class to take an image and a speed modifer
class BackgroundLayer {
    constructor(src, speedModifier, height, y) {
        // each background layer will hav an associated image
        this.image = new Image();
        this.image.src = src;
        // position x of each background layer will always be 0
        this.x = 0;
        // position y will depend upon the height of the background layer
        this.y = y;
        // the width of this background layer
        this.width = 1200;
        // how tall it is will be equal to the size of the background layer (ei. big buildings versus small buildings)
        this.height = height;
        // the x position of our second image will equal the width of this image (we are cloning the image to create a seamless playthrough across the screen)
        this.x2 = this.width;
        // this is the setting for our image speed specific to any BackgroundLayer instance
        this.speedModifier = speedModifier;
        // the speed at which our background will run, changing this value will change the speed of all layers combined
        // when we integrate the character, we will use this to match up the player speed with the background speed
        this.backgroundSpeed = 2;
        // we are saying the speed of this object is equal to the background speed multiplied by the speed modifier
        this.speed = this.backgroundSpeed * this.speedModifier;
    }

    // here we update the position of our image
    update() {
        // this will make sure there is no gap and our image will "repeat" itself
        if (this.x <= -this.width) {
            // our x position is our width PLUS position of x2 (the -this.speed is a part of the image updating itself and will move the pixel amount based off of the speed value)
            this.x = this.width + this.x2 - this.speed;
        }
        // second image x2 that follows x image
        // if the position of x2 is less than or equal to the oppositie or (-) of the width of this backgroundlayer - so if this.width = 535, x2 will have to be greater than -535xposition
        if (this.x2 <= -this.width) {
            // x position of x2 
            this.x2 = this.width + this.x - this.speed;
        }

        // set this.x and this.x2
        // we move the positionn based off of the value of this.speed -> this is why a higher value will move the image quicker because the image is moving at that amount of pixels
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);

    }
    // layer class draw method
    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}


// to caculate the y position we take the total height of canvas of 700 and
// subtract the height of the object and that is what we plug in for the y parameter
// our isntance of the Layer class
const sky = new BackgroundLayer('./imgs/day_bg.png', 0.01, 675, (700 - 675));
const tallBuildings = new BackgroundLayer('./imgs/tall_buildings.png', 1, 648, (700 - 648));
const mediumBuildings = new BackgroundLayer('./imgs/medium_buildings.png', 1.8, 617, (700 - 617));
const shortBuildings = new BackgroundLayer('./imgs/short_buildings.png', 2.3, 319, (700 - 319));
const road = new BackgroundLayer('./imgs/road.png', 1, 60, (700 - 60));
const gameObjects = [sky, tallBuildings, mediumBuildings, shortBuildings, road];

// our function that pulls our background classes into one and calls there params
function animateBackground() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    gameObjects.forEach(object => {
        object.update();
        object.draw();
    });
    requestAnimationFrame(animateBackground);
};

animateBackground()


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
        // sprite width and height parameters dependent upon the action
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        // determines the width of our container and ultimately the size of the sprite
        this.width = this.spriteWidth * 0.25;
        this.height = this.spriteHeight * 0.25;
        // puts our character road level
        this.y = (700-this.height);
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


// these keys toggle between animations (wrote this on my own :))
window.addEventListener("keydown", event => {
    if (event.code == "Space") {
        heroState = "jump-attack"
    }
})

// window.addEventListener("keyup", event => {
//     if (event.key == "v") {
//         heroState = "idle"
//     }
// })
window.addEventListener("keydown", event => {
    if (event.key == "d") {
        heroState = "running"
    }
})
window.addEventListener("keyup", event => {
    heroState = "idle";

})



function animate() {

    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

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

            const jumpAttack = new HeroAction('jump-attack', './imgs/jump-attack.png', 503, 600, 10);
            jumpAttack.storeLocations();
            jumpAttack.update();
            jumpAttack.draw();

            gameFrame++;
            requestAnimationFrame(animate);
            break;

        }
    }
}

animate();