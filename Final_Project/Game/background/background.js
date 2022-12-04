const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// set our canvas with and height here - this should eventally be a bigger value to take up more space on the scren
// I can even do an if statement to measure screen width and display a canvas value based off of that that
// will show a mobile version of the game
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

// layer class to take an image and a speed modifer
class BackgroundLayer {
    constructor(src, speedModifier, height, y) {
        // each background layer will have an associated image
        this.image = new Image();
        // src of image in imgs directory
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
        this.backgroundSpeed = 2; // might need to take this out of the class and set as gloval variable
        // we are saying the speed of this object is equal to the background speed multiplied by the speed modifier
        this.speed = this.backgroundSpeed * this.speedModifier;
    }

    // here we update the position of our image
    update() {
        // this will make sure there is no gap and our image will "repeat" itself
        /* 
            We are taking the position of x and checking to see if it is less than or equal to the opposite of the width 
            (this means we have scrolled one full image's width to the left)
        */
        if (this.x <= -this.width) {
            // our x position is our width PLUS position of x2 (the -this.speed is a part of the image updating itself and will move the pixel amount based off of the speed value)
            this.x = this.width + this.x2 - this.speed;
        }
        // second image x2 that follows x image
        // if the position of x2 is less than or equal to the oppositie or (-) of the width of this backgroundlayer - so if this.width = 535, x2 will have to be greater than -535xposition
        if (this.x2 <= -this.width) {
            // we set x2 to the width plus the original x position minus speed to update its position (based off of the speed value)
            this.x2 = this.width + this.x - this.speed;
        }

        // set this.x and this.x2
        // we move the positionn based off of the value of this.speed -> this is why a higher value will move the image quicker because the image is moving at that amount of pixels
        this.x = Math.floor(this.x - this.speed);
        // we round to ensure it moves by full numbers
        this.x2 = Math.floor(this.x2 - this.speed);

    }
    // layer class draw method = draws both images - original and clone
    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}


// to caculate the y position we take the total height of canvas of 700 and
// subtract the height of the object and that is what we plug in for the y parameter
// set NEW backround layers with their associated parameters to what the images will be
const sky = new BackgroundLayer('./imgs/day_bg.png', 0.01, 675, (700 - 675));
const tallBuildings = new BackgroundLayer('./imgs/tall_buildings.png', 1, 648, (700 - 648));
const mediumBuildings = new BackgroundLayer('./imgs/medium_buildings.png', 1.8, 617, (700 - 617));
const shortBuildings = new BackgroundLayer('./imgs/short_buildings.png', 2.3, 319, (700 - 319));
const road = new BackgroundLayer('./imgs/road.png', 1, 60, (700 - 60));
// put our new backgroundlayers into an array 
const gameBackgroundLayers = [sky, tallBuildings, mediumBuildings, shortBuildings, road];

// our function that pulls our background classes into one and calls there params
function animateBackground() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    gameBackgroundLayers.forEach(object => {
        object.update();
        object.draw();
    });
    requestAnimationFrame(animateBackground);
};

animateBackground()


// set our game frame rate
let heroFrameRate = 0;
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
        // determines the width of our sprite-container and ultimately the size of the sprite
        this.width = this.spriteWidth * 0.25;
        this.height = this.spriteHeight * 0.25;
        // puts our character road level -- 700 is the height of our canvas so we use CANVAS_HEIGHT
        this.y = (CANVAS_HEIGHT - this.height);
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
        // for loop that will go through and store the locations of each sprite on the sprite sheet
        // this.frames is set when the HeroAction is created -> it is set inside of the parameters
        for (let i = 0; i < this.frames; i++) {
            // we want the positionX to be the width of the frame with i representing the frame of each sprite on the sprite sheet
            let positionX = i * this.spriteWidth;
            let positionY = 0 * this.spriteHeight;
            // we then push all of this into our allframe object 
            allFrames.loc.push({ x: positionX, y: positionY })
        }
        // we return this.spriteAnimations which each animation name being the name set in the parameter when the HeroAction is created
        return this.spriteAnimations[this.name] = allFrames;

    }

    // here we are updating our sprite (or the frame of the sprite)
    update() {
        // let position equal our heroFrameRate divided by the stagger frames divided by the location length and return the remainder that is then rounded to be set as the position variable
        let position = Math.floor(heroFrameRate / staggerFrames) % this.storeLocations().loc.length;

        this.frameX = this.spriteWidth * position;
        // ctx.fillRect(50, 50, 100, 100);

    }

    draw() {

        ctx.drawImage(this.image, this.frameX, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        if (heroFrameRate % staggerFrames == 0) {
            // the 9 here is saying that if the frame is less than 9 we will increase it by 1 else set it to 0
            // this is because we have 10 frames, if we had 12 frames it would be 11
            if (this.frameX < 9) this.frameX++;
            else this.frameX = 0;
        }

    }
}



// this is where we change our animation state which will impact the switch statement in our animate() function
// this should be set using an addeventlistener
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



function animateHero() {

    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    switch (heroState) {
        case ("idle"): {

            const idle = new HeroAction('idle', './imgs/idle.png', 250, 600, 10);
            idle.storeLocations();
            idle.update();
            idle.draw();

            heroFrameRate++;
            requestAnimationFrame(animateHero);
            break;
        }
        case ("running"): {
            const running = new HeroAction('running', './imgs/running.png', 350, 600, 10);
            running.storeLocations();
            running.update();
            running.draw();
            heroFrameRate++;
            requestAnimationFrame(animateHero);
            break;
        }

        case ("jump-attack"): {

            const jumpAttack = new HeroAction('jump-attack', './imgs/jump-attack.png', 503, 600, 10);
            jumpAttack.storeLocations();
            jumpAttack.update();
            jumpAttack.draw();

            heroFrameRate++;
            requestAnimationFrame(animateHero);
            break;

        }
    }
}

animateHero();


// number of enemeies
const numberOfEnemeies = 1;
// store our enemies
const enemiesArray = [];

// animation frame rate
let enemyFrameRate = 0;



// store our positions and size of a single enemy

// there are no parameters, everything is set in the constructor of this clas
class Enemy {
    constructor() {
        // sprite image
        this.image = new Image();
        this.image.src = './imgs/attack.png';
        // randomize the x and y start positions
        // enemy size
        this.spriteWidth = 288;
        this.spriteHeight = 288;
        // setting Enemy instance to size divided by 3
        this.width = this.spriteWidth / 3;
        this.height = this.spriteHeight / 3;
        // enemy x and y position to be random within canvas.width and this objects width/height
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
        if (enemyFrameRate % this.attackSpeed === 0) {
            // ternary operator to cycle through frames - 18 is the number of enemy frames on the sprite sheet
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
    // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    })

    enemyFrameRate++;

    // creates animation loop
    requestAnimationFrame(animateEnemy)
}

animateEnemy();