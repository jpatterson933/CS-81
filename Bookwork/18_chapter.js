/*
    A Javascript Workbench 
    Build an interface that allows people to type and run pieces of Javascript code. 
    Put a button next to a <textarea> filed that, when pressed, uses the Function constructor that we say
    on page 170 to warpe the text in a function and call it. 

    Convert the return value of the function, or any error it raises to a string and display it below the text field

*/

// funciton on 170
let form = document.querySelector("form");
let textArea = document.querySelector("textarea");
let button = document.querySelector("button");

form.addEventListener("submit", event => {
    event.preventDefault();


    return eval(textArea.value);

})

// let plusOne = Function("n", "return n + 1;");
// console.log(plusOne(4))



/*
    Conway's Game of Life

    Conway's Game of Life is a simple simulation that creates aritifical "life" on a grid, each cell of which is either alive or not. Each generation (turn),
    the following rules are applied.
    * Any live cell with fewer than two or more than three live neighbors dies
    * Any live cell with two or three live neighbors lives on to the next generation
    * Any dead cell with exactly three live neighbors becomes a live cell
    A neighbor is defined as any adjacent cell, including diagonally adjacent ones
    The counting of neighbors happnes right when the function runs. Changes happening to a neighbors cells should
    ONLY change those cells
    *Other notes: use Math.random to populate the grid with a random initial pattern. Display it as a grid
    of checkbox fields -> Each field representing a boolean (true = alive; false = dead)
    There should be a button that advances from current state to new state based off of overall rules set above
*/

function createGrid(size) {
    let grid = document.getElementById("grid");
    grid.style.marginTop = "3em";

    let x, y, checkbox;

    for (x = 0; x < size; x++) {
        for (y = 0; y < size; y++) {
            checkbox = document.createElement('input', {
                type: 'checkbox',
                'data-x': x,
                'data-y': y
            })

            checkbox.setAttribute("type", "checkbox")
            // track where our boxes are at
            checkbox.setAttribute("data-x", x)
            checkbox.setAttribute("data-y", y)
            checkbox.style.height = "25px";
            checkbox.style.width = "25px";
            checkbox.style.padding = "1px";
            checkbox.style.margin = "1px";
            grid.append(checkbox)
        }
    }

    // grid.width(checkbox.outerWidth() * 10);
}

createGrid(10);

function checkStart() {
    let must_check = 25;
    let checkboxes = $("input[type='checkbox']").length;

    while ($("input[type='checkbox']:checked").length < must_check) {
        let ran_check = Math.floor(Math.random() * checkboxes) + 1;
        $("input:nth-child(" + ran_check + " )[type='checkbox']").prop("checked", true);
    }
}

checkStart();


function findLife() {

    // * Any live cell with fewer than two or more than three live neighbors dies
    // * Any live cell with two or three live neighbors lives on to the next generation
    // * Any dead cell with exactly three live neighbors becomes a live cell
    let boxes = $("input[type='checkbox']")
    let checkedBoxes = $("input[type='checkbox']:checked");



    // console.log(checkedBoxes)
    const surroundingBoxes = [];
    for (let i = 0; i < boxes.length; i++) {
        let x_value = Number(boxes[i].dataset.x);
        let y_value = Number(boxes[i].dataset.y);


        let boxCoord = {
            top: ((x_value === (x_value - 1) && y_value === (y_value))),
            right: ((x_value === (x_value) && y_value === (y_value + 1))),
            bottom: ((x_value === (x_value + 1) && y_value === (y_value))),
            left: (x_value === (x_value) && y_value === (y_value - 1)),
            topRight: ((x_value === (x_value - 1) && y_value === (y_value + 1))),
            bottomRight: ((x_value === (x_value + 1) && y_value === (y_value + 1))),
            bottomLeft: ((x_value === (x_value + 1) && y_value === (y_value - 1))),
            topLeft: ((x_value === (x_value - 1) && y_value === (y_value - 1)))
        }
        console.log(boxes[i])
        if(boxCoord.top) {
            console.log(boxes[i])
        }

        // i want to grab top right bottom diagnol, see if they are checked FOR EACH BOX and the return a value


        // console.log(boxes[i])


        // console.log(xValue, yValue)

        // for (let j = 0; j < boxes.length; j++) {
        //     let xValue = Number(boxes[j].dataset.x)
        //     let yValue = Number(boxes[j].dataset.y)




        //     // console.log(cardinalValues.n)


        //     if (boxCoord.top
        //         || boxCoord.right
        //         || boxCoord.bottom
        //         || boxCoord.left
        //         || boxCoord.topRight
        //         || boxCoord.bottomRight
        //         || boxCoord.bottomLeft
        //         || boxCoord.topLeft
        //     ) {





        //         if (boxes[j].checked === true) {
        //             let checkForLife = [];

        //             checkForLife.push({
        //                 center: boxes[j],
        //                 surroundingLife: [checkedBoxes[i]]
        //             })
        //             console.log(boxes[j], checkedBoxes[i])

        //             console.log(checkForLife)
        //             surroundingBoxes.push(boxes[j])
        //         }

        //     }



        // }




    }

    // return surroundingBoxes;

}


findLife()

function createLife() {
    let checkedBoxes = $("input[type='checkbox']:checked");

}

