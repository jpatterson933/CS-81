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