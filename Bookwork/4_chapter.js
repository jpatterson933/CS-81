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
};
// console.log(range(1, 10))
// PART TWO
function sum(array) {
    let total = 0;
    for (let num of array) {
        total += num;
    }
    return total;
};

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
};

// console.log(sum(rangeTwo(5, 1, -1)));

/*
    Write two functions reverseArray and reverseArrayInPlace
    reverseArray takes an array as argument and produces a NEW array that has the same elements in the inverse order.
    reverseArrayInPlace modifies the array given as argument by reversing its elements
    you MUST NOT use the standard reverse method
*/
let listOfCars = ["bmw", "honda", "toyota", "ford", "tesla", "lucid"];

let reverseArray = (array) => {
    // console.log(array);
    let length = array.length;
    // console.log(length, "length")
    let newArray = []
    for (let i = 0; i < length; i++) {
        let lastItem = array.pop()
        newArray.push(lastItem)
    }
    // console.log(newArray)
    return newArray;
};

reverseArray(listOfCars);
let listOfNumbers = ["one", "two", "three", "four", "five", "six"]

function reverseArrayInPlace(array) {
    /*
        so we take the array.length-1 and set it to i so an array of 6 elements will be 5
        then we say if i is greater than or equal to 0 we want to get down by 1 so it should loop five times
        then we splice the array at position 0 and add the element at position 5 and counting down so 5, 4, 3, 2, 1, 0        
    */
    for (let i = array.length - 1; i >= 0; i--) {

        array.splice(i, 0, array.shift())
    }
    return array;
};

// console.log(reverseArrayInPlace(listOfNumbers));

/*
    1. write a function arrayToList that build up a list structure like the one shown when given [1, 2, 3] as argument.
    2. write a listToArray function that produces an array from a list. 
    Then, add a helper function prepend(), which takes an element and a list and creates a new list that adds the element fo the front of the input list
    write a function nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element
    If you have not already, also write a recursive version of nth    
*/

/* 
    create a recursive function to create nested objects
    first we say that if our array.length is 0, we have nothing else in the array and we will return the created object
    else we say let the last be
*/
function arrayToList(array, object) {
    if (array.length === 0) {
        return object;
    } else {
        // this counts down our array length and sets it to last - starts with original length
        let last = array[array.length - 1];
        // console.log(last)
        // array starts off as original array, then for the first round we set the new array to the original minus one
        // we set the new array to NOT include the last element since it will be put into the object
        // so if array is [1, 2, 3, 4] then new array will look like [1, 2, 3, 4].slice(0, 4 - 1) -> array.slice(0, 3) = [1, 2, 3] 
        let newArray = array.slice(0, array.length - 1);
        // this recursive functions starts by placing the last element in the array into the first object
        // the first time it runs, it will not have the object parameter // the first time recurs it will have the object parameter
        // the first object will be put into the rest: object position
        // so it starts with the last element in the array and works forward until it has built out the entire object
        // so if array is [1, 2, 3, 4] the first item to be created will be {value: 4, rest: null}
        return arrayToList(newArray, { value: last, rest: object || null })
    }
};

// console.log(arrayToList([1, 2, 3]));

let set = ["table", "chairs", "rug"]
let numberSet = [1, 2, 3, 4, 5, 6, 7]
let objectOne = arrayToList(set)
// console.log(arrayToList(numberSet))
let objectTwo = arrayToList(numberSet)

// function that will turn objects into arrays
function listToArray(object) {
    
    // set up an empty array variable to push in new items
    let newArray = []
    // inner recursive function that will dive into any key that has a nested object
    function findNestedValue(nestedEntry) {
        // check to see if nestedEntry is string
        if (typeof nestedEntry === "string" || typeof nestedEntry === "number") {
            // if returns as string, will get pushed into array
            newArray.push(nestedEntry)
            // check to see if nestedEntry is an object
        } else if (typeof nestedEntry === "object") {
            // if returns as an object, will be broken down into 
            Object.entries(nestedEntry).forEach(pair => {
                // checks to see if the value of the entry is null
                if (pair[1] === null) {
                    // if it is null, it will return us back to wher ethe function was called
                    return;
                }
                // if the value of the key in the entry is not null, it will recurse back and rerun this function
                findNestedValue(pair[1])
            });
        };
    };

    // call Object method entries to check the key value pairs of each item passed into the function
    Object.entries(object).forEach(pair => {
        // console.log(typeof pair[1])
        // swithc statement that checks the typeof value that is in the key value pair
        switch (typeof pair[1]) {
            // if the value is null it will break out of the statement
            case (null):
                break;
            // if the value is an object, it will run the recursive function findNestedValue() withe the value as the parameter
            case ("object"):
                return findNestedValue(pair[1])
            // if the value type is string, it will push it into our new array
            case ("string"):
                // push value of key value pair into newArray
                newArray.push(pair[1])
            case ("number"):
                newArray.push(pair[1])
        }
        // forEach will go through all key value pairs until there are none left or it breaks out due to null value
    });
    return newArray;
};
// call our listToArray() function
// console.log(listToArray(objectOne));
console.log(listToArray(objectTwo))