const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;


// THIS IS OUR IDLE SPRITE   - remember frameX needs to equal the amount of frames we have in the sprite animation frame
const heroIdle = new Image();
heroIdle.src = './imgs/idle.png';
const spriteIdleWidth = 250;
const spriteIdleHeight = 600;

const heroRunning = new Image();
heroRunning.src = './imgs/running.png';
const spriteRunningWidth = 350;
const spriteRunningHeight = 600;

const heroJumpAttack = new Image();
heroJumpAttack.src = './imgs/jump-attack.png';
const spriteJumpAttackWidth = 503;
const spriteJumpAttackHeight = 600;


// change sprite variables
let frameX = 0;
// we could set this at in the animate() funciton since we only have one sprite animation per image
let frameY = 0;
let gameFrame = 0;
// the higher this number, the slower the animation will render
let staggerFrames = 7;


const spriteAnimations = [];

const animationStates = [
    {
        name: 'idle',
        src: heroIdle,
        frames: 10,
        width: spriteIdleWidth,
        height: spriteIdleHeight
    },
    {
        name: 'running',
        src: heroRunning,
        frames: 10,
        width: spriteRunningWidth,
        height: spriteRunningHeight
    }, 
    {
        name:'jump-attack',
        src:heroJumpAttack,
        frames: 10,
        width: spriteJumpAttackWidth,
        height: spriteJumpAttackHeight
    }
]

console.log(animationStates[0].src)

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
    if(event.key == "d") {
        heroState = "running"
    }
})
window.addEventListener("keyup", event => {
        heroState = "idle";

})

//state represents each object in the array, index will store the array index number
animationStates.forEach((state, index) => {

    let frames = {
        loc: [],
    }

    for (let j = 0; j < state.frames; j++) {

        let positionX = j * state.width;
        // we don't have an index so we will just leave it as spriteHeight which should equal 0
        let positionY = index * state.height;
        // push the locations of x and y position of the sprite animation frames to frames
        frames.loc.push({ x: positionX, y: positionY })
    }
    // for ach state name it will equal the frames that were created above
    spriteAnimations[state.name] = frames;
})

console.log(spriteAnimations, "created sprite animations")

function animate() {

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    switch (heroState) {
        case ("idle"): {
            // here we are calculating the position of the sprite 9 -- the variable cycles from 0 to 9
            let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations["idle"].loc.length;
            frameX = animationStates[0].width * position;
            // ctx.fillRect(50, 50, 100, 100);
            ctx.drawImage(animationStates[0].src, frameX, frameY * animationStates[0].height, animationStates[0].width, animationStates[0].height, 0, 0, animationStates[0].width, animationStates[0].height);
            if (gameFrame % staggerFrames == 0) {
                if (frameX < 9) frameX++;
                else frameX = 0;
            }
            gameFrame++;
            requestAnimationFrame(animate);
            break;
        }
        case ("running"): {

            // here we are calculating the position of the sprite 9 -- the variable cycles from 0 to 9
            let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations["idle"].loc.length;
            frameX = animationStates[1].width * position;
            // ctx.fillRect(50, 50, 100, 100);
            ctx.drawImage(animationStates[1].src, frameX, frameY * animationStates[1].height, animationStates[1].width, animationStates[1].height, 0, 0, animationStates[1].width, animationStates[1].height);
            if (gameFrame % staggerFrames == 0) {
                if (frameX < 9) frameX++;
                else frameX = 0;
            }
            gameFrame++;
            requestAnimationFrame(animate);
            break;
        }

        case ("jump-attack"): {

            // here we are calculating the position of the sprite 9 -- the variable cycles from 0 to 9
            let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations["idle"].loc.length;
            frameX = animationStates[2].width * position;
            // ctx.fillRect(50, 50, 100, 100);
            ctx.drawImage(animationStates[2].src, frameX, frameY * animationStates[2].height, animationStates[2].width, animationStates[2].height, 0, 0, animationStates[2].width, animationStates[2].height);
            if (gameFrame % staggerFrames == 0) {
                if (frameX < 9) frameX++;
                else frameX = 0;
            }
            gameFrame++;
            requestAnimationFrame(animate);
            break;

        }
    }
}

animate();