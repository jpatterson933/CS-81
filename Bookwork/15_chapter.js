/**
 * Write a page that display an image. When you press the up arrow, it should inflate (grow) 10 percent and when you press the down arrow it should deflate (shrink).
 * Arrow key names: ArrowUp and ArrowDown
 * Then write a feature where the item dissapears once getting too large or is replaced by something else
 */

let square = document.getElementById("square");
// let size = square.style.width;
// console.log(square.style.width)
// console.log(square.style)
// console.log(square)

window.addEventListener("keydown", (event) => {

    // let size = square.style.width;

    // console.log(size + 10)


    event.preventDefault();

    // console.log("the up arrow as been pressed");

    if(event.key == "ArrowUp") {
       
        console.log("up arrow");
        let newWidth = 
        square.style.width = total + "px";
    } else if (event.key == "ArrowDown") {
        console.log("down arrow")
    }
})