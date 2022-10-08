/*
    Jeffery W. Patterson
    Chapter 3 FUNCTIONS
*/

// Write a function min that takes two arguments and returns their minimum 

function min (value1, value2) {
    console.log(Math.min(value1, value2))
}

min(23, 45)
min(28828, 89)

/*
1. Zero is even
2. One is odd
3. For any other number N, its evenness is the same as N - 2

Define a recurseive function isEven corresponding to the description above. The function should accept a single
parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

ANSWER: It completely ignores -1 since the value will never be greater than 1 in my function the function doesn't even run. 
A way to fix this would be to change all values to positive and then run the recursive function.
*/

function isEven(value) {

    function find (value) {
        if (value == 0) {
            console.log(true)
            return true;
        } else if (value == 1) {
            console.log(false)
            return false;
        } else if (value > 1) {
            value - 2;
            // isEven(value - 2)
            // console.log("recurse!")
        }

    }
    find(value)
}

isEven(59)
isEven(75)
isEven(-1)

/*
    Write a funciton countBs that takes a string as its only argument and returns the number that indicates how many uppercase "B" characters
    there are in the string.

    Next, write a function called countChar that behaves like countBs except it takes a second argument that indicates the character that is 
    to be counted (rather than counting only uppercase "B" characters. Rewrite countBs to make use of this new function)
*/

let countBs = (word) => {
    // set count to 0
    let count = 0;
    for(let i = 0; i < word.length; i++) {
        // console.log(word[i])
        // if one of the letters matches a captial B then it will add 1 to count and console log it
        if(word[i] === "B") {
            count = count + 1;
            console.log(count)
        }
    }
}

// countBs("BBBBBB")

let countChar = (word, character) => {
    let count = 0;
    for(let i = 0; i < word.length; i++) {
        if(word[i] === character) {
            count = count + 1;
            console.log(count)
        }
    }
}

// countChar("beezkneez", "e")