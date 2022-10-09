/*
    Jeffery W. Patterson
    CS 81
    2022

Problem
Part 1: Recursive Copy Function
Given a string str and number n, write a program that recursively appends a copy of string str n times and returns the resulting string.
*/

let RecursiveCopy = (str, n) => {
    // increase number + 1 and sets to newN
    let newN = n + 1;
    // this sets our target length for each character so we know exactly how long it needs to be
    let target = (str.length * newN);
    // set current to parameter string so we have something to add to - helps us avoid the exponnetial string growth problem
    let current = str;
    // lets us know our target length as well as our current string
    // console.log(target, current)

    // inner recursive function that will run until our string meets its length
    function grow(current) {
        // if statement that says, either our string length meets our target
        if (current.length > target) {
            console.log(`We have hit our target of ${newN} or n + 1 using the word '${str}'`)
            // this is the string we grab with CountChars
            return `The resulting string ${current} has ${current.length} characters`;
        // Once it gets here, we will run the grow() function again
        } else {
            // this shows us our word building
            console.log(current)
            return grow(current + str, `${str}`)
        }
    }
    // this is where the recurrsion exists, we run our grow statement, setting our current string as current, and the inital string
    return grow(current, str)
};

RecursiveCopy("b", 3);
RecursiveCopy("a", 2)
RecursiveCopy("Jeff", 0)

/*
Part 2: Call RecursiveCopy (Bonus 5 pts)

Write another function that calls RecursiveCopy() and returns the following string output: "The resulting string [x] has [y] characters". [x] should be replaced by the result from RecursiveCopy() and [y] should be replaced by the number of characters in the resulting string. You may pick the arguments to RecursiveCopy in CountChars or have the user provide input. I will leave this up to you.
_______________________________________________
*You must use recursion.
*You should end up with n+1 copies of the str total in the output because you are appending additional str copies.
*Use string literal formatting for the output.
*/

// BONUS
// paramaters are the string and the number 
let CountChars = (str, n) => {
    /*  RecursiveCopy will return the the result of grow()
        grow() is where our recursion will happen and is where our template literal string lives
    */
    return RecursiveCopy(str, n);
}
// console.log() to grab our string that lives inside of the grow() funciton
console.log(CountChars("beans", 4), "This works!");
console.log(CountChars("I", 22));