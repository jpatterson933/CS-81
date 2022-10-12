/*
    Exercises
    1. The Sum of a Range
    2. Reversing an Array
    3. A List
    4. Deep Comparison
*/

// 1. The Sum of a Range
/*
    PART ONE
    Write a range function that takes two arguments, start and end, and returns an array containing all teh numbers from start up to (and including end)

    PART TWO
    Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55. ie -> console.log(sum(range(1, 10)));
    
    BONUS
    modify range function to take an optional third argument that indicates the "step" value used when building the array. 
    If no step is given, the elements go pu by increments of one, corresponding to the old behavior.
    The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
    Make sure it also works with negative step values so range(5, 1, -1) produces [5, 4, 3, 2, 1]
*/
// PART ONE
function range(start, end) {

    let rangeArray = new Array()

    for (let i = start; i < end + 1; i++) {
        // console.log(i)
        rangeArray.push(i)
    }
    return rangeArray;
}
// console.log(range(1, 10))
// PART TWO
function sum(array) {
    let total = 0;
    for (let num of array) {
        total += num;
    }
    return total;
}

// console.log(sum(range(1, 10)));

/*
    BONUS
    modify range function to take an optional third argument that indicates the "step" value used when building the array. 
    If no step is given, the elements go pu by increments of one, corresponding to the old behavior.
    The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
    Make sure it also works with negative step values so range(5, 1, -1) produces [5, 4, 3, 2, 1]
*/
function rangeTwo(start, end, step) {
    let rangeArray = new Array()
    // this deals with negative numbers and going downwards 
    if (start > end) {
        for (let i = start; i > end - 1; i += step) {

            // console.log(i)
            rangeArray.push(i)
        }
    } else
        for (let i = start; i < end + 1; i += step) {

            // console.log(i)
            rangeArray.push(i)
        }
    return rangeArray;
}

console.log(sum(rangeTwo(5, 1, -1)))