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

*/

function isEven(value) {
    if (value == 0) {
        console.log(true)
        return true;
    } else if (value == 1) {
        console.log(false)
        return false;
    } else if (value > 1) {
        isEven(value - 2)
        // console.log("recurse!")
    }
    
}

isEven(59)
isEven(75)
isEven(-1)

