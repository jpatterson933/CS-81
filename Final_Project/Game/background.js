const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 2;

// for some reason road appears on the top. will needa  y coordinates in draw animation of 640
// 1200 width, 675 height
const backgroundLayer1 = new Image();
backgroundLayer1.src = './imgs/day_bg.png';
// 1200 width, 648 height
const backgroundLayer2 = new Image();
backgroundLayer2.src = './imgs/tall_buildings.png';
// 1200 width, 617 height
const backgroundLayer3 = new Image();
backgroundLayer3.src = './imgs/medium_buildings.png';
// 1200 width, 319 height
const backgroundLayer4 = new Image();
backgroundLayer4.src = './imgs/short_buildings.png';
// 1200 width, 60 height
const backgroundLayer5 = new Image();
backgroundLayer5.src = './imgs/road.png';

// layer class to take an image and a speed modifer
class Layer {
    constructor(image, speedModifier, height, y) {
        this.x = 0;
        this.y = y;
        this.width = 1200;
        this.height = height;
        this.x2 = this.width;
        this.image = image;
        // how fast the image layer will move
        this.speedModifier = speedModifier;
        // calculate the actual speed that is tied to the global game speed
        this.speed = gameSpeed * this.speedModifier;
    }

    // layer class update method

    update() {
        this.speed = gameSpeed * this.speedModifier;
        // this will make sure there is no gap and our image will "repeat" itself
        if(this.x <= -this.width) {
            this.x = this.width + this.x2 - this.speed;
        }

        if(this.x2 <= -this.width) {
            this.x2 = this.width + this.x - this.speed;
        }

        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);



    }
    // layer class draw method
    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}

// 1200 width, 60 height
// 1200 width, 648 height
// 1200 width, 617 height
// 1200 width, 319 height
// 1200 width, 675 height
// to caluclate the y position we take the total height of canvas of 700 and
// subtract the height of the object and that is what we plug in for the y parameter
// our isntance of the Layer class
const layer1 = new Layer(backgroundLayer1, 0.01, 675, (700-675));
const layer2 = new Layer(backgroundLayer2, 0.25, 648, (700-648));
const layer3 = new Layer(backgroundLayer3, 0.5, 617, (700-617));
const layer4 = new Layer(backgroundLayer4, .8, 319, (700-319));
const layer5 = new Layer(backgroundLayer5, 1, 60, (700-60));

const gameObjects = [layer1, layer2, layer3, layer4, layer5];

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // background - we are stacking images here
    // layer5.update();
    // layer5.draw();
    gameObjects.forEach(object => {
        object.update();
        object.draw();
    });
    requestAnimationFrame(animate);
};

animate()