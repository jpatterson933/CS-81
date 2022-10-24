/*
    Jeffery W. Patterson
    CS 81
    TEST 1
*/

/*
Multiple Choice 1
Which of the following statements is true about the difference between while looping and do..while looping?

ANSWER
d) do while loops ensure that the body executes at least once
*/

/*
MC 2a
If input is "happy!", then output is:

ANSWER
a)"Yay!"

MC b
If input is "Sad", then output is:

ANSWER
c)"Are you human?"

MC 2c
If the input is "UNKNOWN", then the output is:
a)"How do you not know?"

ANSWER
"Are you human?"
*/


/*
Short Answer 1 (12 pts)

ANSWER
CALL STACK FOR ABOVE
not in function
    in factorial(4); return 4 * factorial(4 - 1)
        in factorial(3); return 3 * facotrial(3 - 1)
            in factorial(2); return 2 * factorial(2 - 1)
                in factorial(1); return 1 * factorial(1 - 1)
                    in factorial(0);
                        in if statement (0 === 0); return 1;
                in factorial(1); return 1 * 1
            in factorial(2); return 2 * 1
        in factorial(3); return 3 * 2
    in factorial(4); return 4 * 6
not in function
*/

/*
Short Answer 2 - Loops (12 pts)

ANSWER -> 5
*/

/*
Problem 1 - Find The Difference (20 pts)

ANSWER
*/

// array to test function
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// a simplet get sum array using higher order functions - reused in another problem but named 
function getSum(array) {
    return array.reduce((previousValue, nextValue) => previousValue + nextValue);
};

// function to sum the difference of odd and eve numbers 
function SumDiff(numbers) {
    // empty array for even numbers
    let evenNumbers = [];
    // empty array for odd numbers
    let oddNumbers = [];
    // for loop to fill arrays with even and odd numbers
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i])
        } else {
            oddNumbers.push(numbers[i])
        }
    }
    // get sum of even or odd numbers and round to nearest number
    let totalEvenNum = (Math.round(getSum(evenNumbers.map(num => num))));
    let totalOddNum = (Math.round(getSum(oddNumbers.map(num => num))));
    // use Math.abs() to subtract two numbers and return a positive value
    return Math.abs(totalEvenNum - totalOddNum);
};
// print our SumDiff() to the screen
console.log(SumDiff(numArray));

/*
Problem 2 - Recursive Sum (30 pts)

ANSWER
*/
// books with pages objects with nested book objects
let books = {
    "book": "A",
    "pages": 50,
    "next": {
        "book": "B",
        "pages": 25,
        "next": null
    }
}

// function that will turn objects into arrayss
function listToArray(object) {
    // set up an empty array variable to push in new items
    let newArray = []
    // inner recursive function that will dive into any key that has a nested object
    function findNestedValue(nestedEntry) {
        // check to see if nestedEntry is string
        if (typeof nestedEntry === "number") {
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
        // switch statement that checks the typeof value that is in the key value pair
        switch (typeof pair[1]) {
            // if the value is null it will break out of the statement
            case (null):
                break;
            // if the value is an object, it will run the recursive function findNestedValue() withe the value as the parameter
            case ("object"):
                return findNestedValue(pair[1])
            case ("number"):
                // this will catch page numbers and push into new array
                newArray.push(pair[1])
        };
    });
    // return the new arry to where the function was called
    return newArray;
};

// our function to calculate the sum of an array
function calculateSum(array) {
    return array.reduce((previousValue, nextValue) => previousValue + nextValue);
};
// log our sum of the created array from any book that has a page
console.log(calculateSum(listToArray(books)));


/*
Problem 3 - Search the Tree (40 pts)

ANSWER
*/

// tree object with inner left and right branches
let tree = {
    "value": 100,
    "left": {
        "value": 50,
        "left": {
            "value": 25,
            "left": null,
            "right": null
        },
        "right": {
            "value": 75,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 150,
        "left": null,
        "right": null
    }
};

// function that checks if the root object has a value
function isMissingFromTree(root, value) {
    // set an empty temporary array
    let tempArray = [];
    // search each branch for more branchs. This is a recursive function. 
    function searchTreeBranch(object) {
        // if the object is null, it will return out of this function
        if (typeof object === null) {
            return;
        } else {
            // go through each key value in object and assign it to pair
            Object.entries(object).forEach(pair => {
                // if the value is null, we return out of this function
                if (pair[1] === null) {
                    return;
                } else {
                    // switch statement checking the key for "left" or "right"
                    switch (pair[0]) {
                        // if key is null, it will break out of this statement
                        case (null):
                            break;
                        // key is value, it will push the value of value to the tempArray
                        case ("value"):
                            tempArray.push(pair[1])
                            return;
                        // if key is left, it will rerun our recursive function that searches branches
                        case ("left"):
                            return searchTreeBranch(pair[1]);
                        // if key is right, it will rerun our recursive function that searches branches
                        case ("right"):
                            // left and right hold objects which is this case is pair[1]
                            return searchTreeBranch(pair[1]);
                    };
                };
            });
        };
    };

    // our enitial Object.entries() method call to plug in the root paramater
    Object.entries(root).forEach(pair => {
        // switch statement to check the keys otherwise known as pair[0]
        switch (pair[0]) {
            // if null it will break out of this statement
            case (null):
                break;
            // key is value, it will push the value of value to the tempArray
            case ("value"):
                tempArray.push(pair[1]);
                break;
            // if key is left, it will rerun our recursive function that searches branches
            case ("left"):
                return searchTreeBranch(pair[1]);
            // if key is right, it will rerun our recursive function that searches branches
            case ("right"):
                // left and right hold objects which is this case is pair[1]
                return searchTreeBranch(pair[1]);
        };
    });
    // here we take parameter array and a plugged in value to see if the array has the plugged in value
    function checkTreeValues(array, pluggedValue) {
        // check the array and filter out any matches and set it to checkData
        let checkedData = array.filter(data => {
            return data === pluggedValue;
        });
        // if length is 0, there were not matches so it will return our false statement surrounded by template literals
        switch (checkedData.length) {
            case (0):
                return `Output: ${false}
                Reasoning: The value ${pluggedValue} was NOT found in the binary tree!`;
            // if length is 1, that means there was a match so it will return our true statement surrounded by template literals
            case (1):
                return `Output: ${true}
                Reasoning: The value ${pluggedValue} was found as a value in the binary tree!`;
        };
    };
    // this will return out template literals that tell us whether or not our original value existed in the root
    return checkTreeValues(tempArray, value);
};

// check different values to see if functions work properly
console.log(isMissingFromTree(tree, 25));
console.log(isMissingFromTree(tree, 24));
console.log(isMissingFromTree(tree, 50));