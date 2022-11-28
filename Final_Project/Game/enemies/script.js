// adds suggestions for html canvas elements 
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');
// these values must be the same as they are in style css
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;

// store our positions and size of a single enemy
enemy1 = {
    x: 10,
    y: 50,
    width: 200,
    height: 200,
}

function animate() {
    // enemy1.x++;
    ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);

    requestAnimationFrame(animate)
}

animate();