const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;


// THIS IS OUR IDLE SPRITE   - remember frameX needs to equal the amount of frames we have in the sprite animation frame
const heroIdle = new Image();
heroIdle.src = './imgs/idle.png';
const spriteIdleWidth = 231;
const spriteIdleHeight = 600;

const heroRunning = new Image();
heroRunning.src = './imgs/running.png';
const spriteRunningWidth = 430;
const spriteRunningHeight = 600;

// change sprite variables
let frameX = 0;
// we could set this at in the animate() funciton since we only have one sprite animation per image
let frameY = 0;
let gameFrame = 0;
// the higher this number, the slower the animation will render
let staggerFrames = 10;


const spriteAnimations = [];

const animationStates = [
    {
        name:'idle',
        src: heroIdle,
        frames: 10,
        width: spriteIdleWidth,
        height: spriteIdleHeight
    },
    {
        name:'running',
        src: heroRunning,
        frames: 10,
        width: spriteRunningWidth,
        height: spriteRunningHeight
    }
]
console.log(typeof heroRunning)
console.log(typeof './img/indle.png')
console.log(typeof animationStates[0].src)
//state represents each object in the array, index will store the array index number
animationStates.forEach((state, index) => {

    let frames = {
        loc: [],
    }

    for(let j = 0; j < state.frames; j++){
        
        let positionX = j * state.width;
        // we don't have an index so we will just leave it as spriteHeight which should equal 0
        let positionY = index * state.height;

        frames.loc.push({x: positionX, y: positionY})
    }

    spriteAnimations[state.name] = frames;
})

console.log(spriteAnimations)

function animateIdle() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // here we are calculating the position of the sprite 9 -- the variable cycles from 0 to 9
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations["idle"].loc.length;
    frameX = spriteIdleWidth * position;

    // ctx.fillRect(50, 50, 100, 100);

    ctx.drawImage(animationStates[0].src, frameX, frameY * spriteIdleHeight, spriteIdleWidth, spriteIdleHeight, 0, 0, spriteIdleWidth, spriteIdleHeight);
    if(gameFrame % staggerFrames == 0){
        if (frameX < 9) frameX++;
        else frameX = 0;

    }
    gameFrame++;
    requestAnimationFrame(animateIdle);
}

function animateRunning() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // here we are calculating the position of the sprite 9 -- the variable cycles from 0 to 9
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations["running"].loc.length;
    frameX = spriteRunningWidth * position;

    // ctx.fillRect(50, 50, 100, 100);

    ctx.drawImage(animationStates[1].src, frameX, frameY * spriteRunningHeight, spriteRunningWidth, spriteRunningHeight, 0, 0, spriteRunningWidth, spriteRunningHeight);
    if(gameFrame % staggerFrames == 0){
        if (frameX < 9) frameX++;
        else frameX = 0;

    }
    gameFrame++;
    requestAnimationFrame(animateRunning);
}

animateIdle()
animateRunning();
