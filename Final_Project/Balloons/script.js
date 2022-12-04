const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// set our canvas with and height here - this should eventally be a bigger value to take up more space on the scren
// I can even do an if statement to measure screen width and display a canvas value based off of that that
// will show a mobile version of the game
const CANVAS_WIDTH = canvas.width = 1000;
const CANVAS_HEIGHT = canvas.height = 1000;

// layer class to take an image and a speed modifer
class BackgroundLayer {
    constructor(src, height, y) {
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
    }

    // here we update the position of our image
    update() {

    }
    // layer class draw method = draws both images - original and clone
    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}


// to caculate the y position we take the total height of canvas of 700 and
// subtract the height of the object and that is what we plug in for the y parameter
// set NEW backround layers with their associated parameters to what the images will be
// const sky = new BackgroundLayer('./imgs/day_bg.png', 0.01, 675, (700 - 675));
// const tallBuildings = new BackgroundLayer('./imgs/tall_buildings.png', 1, 648, (700 - 648));
// const mediumBuildings = new BackgroundLayer('./imgs/medium_buildings.png', 1.8, 617, (700 - 617));
// const shortBuildings = new BackgroundLayer('./imgs/short_buildings.png', 2.3, 319, (700 - 319));
// const road = new BackgroundLayer('./imgs/road.png', 1, 60, (700 - 60));
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

class Balloon {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 15 + 1;
    }


    update() {
        if(this.y > CANVAS_HEIGHT) {
            this.y = 0;
            this.x = Math.random() * CANVAS_WIDTH * 1.5;
        }

        if (this.x > CANVAS_WIDTH) {
            this.x = 0;
            this.x = Math.random() * CANVAS_HEIGHT * 1.5;
        }
    }
    draw() {
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        
    }
}

// global variable to set the total number of balloons - can be based off of level
const numberOfBalloons = 100;

function createBalloons() {
    balloonsArray = [];
    for(let i = 0; i < numberOfBalloons; i++) {
        const x = Math.random() * CANVAS_WIDTH;
        const y = Math.random() * CANVAS_HEIGHT;
        balloonsArray.push(new Balloon(x, y))
    }
    console.log(balloonsArray)
}
createBalloons();
function animate() {
    // ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
    ctx.draw(50, 50, 50, 50)
    
    // ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    for(let i = 0; i < balloonsArray.length; i++) {
        balloonsArray[i].update();
        balloonsArray[i].draw();

    }


    requestAnimationFrame(animate);
}

animate();