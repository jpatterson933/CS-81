/*
    Jeffer W. Patterson
    Week 4 Homework
    
    Instructions
    Given a list (objects with a chain of sub-objects)
    Reverse the order of the list
    Requirements you cannot use the buil-in reverse() function
    null is non-existent object, you may use an empty object instead

    Layout
        Code with Comments
        Code No Comments
*/

// our original list
let animals = {
    value: "dog",
    next: {
        value: "cat",
        next: {
            value: "bird",
            next: null
        }
    }
};

// a list with numbers as values 
let listNum = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
};

// recursive function that will build a list with nested objects from an array
function arrayToList(array, object) {
    // if the length is zero, return the object that has been built from the recursive function
    if (array.length === 0) {
        return object;
    } else {
        /* last will be the last value MINUS 1
        the reason we subtract 1 from the length is becuase
        if the length is 4, the arrays positions will be
        [0, 1, 2, 3] so in order to get the last array [3] from
        a length of 4, we have to subtract 1
        */
        let last = array[array.length - 1];
        console.log(last)
        /* array starts off as the original array
        the first round through we set the newArray to
         the original array minus the last 'item' in the array
         newArray no longer has last item in array
         --last item will be plugged into our object
        */
        let newArray = array.slice(0, array.length - 1);
        /* newArray is plugged in without the last value
        the last value is added in as the value of value
        after this runs once, the object that is returned will
        be nested into the value for next OR it will be a null value
        */
        return arrayToList(newArray, { value: last, next: object || null })
    }
};

function reverseArrayInPlace(array) {
    /*  we set i to the array.length - 1 (so if the length is 3 i will equal 2)
        then we say if i is greater than or equal to 0, we will subtract 1 from i (if i equals 2, this will run 3 times)
    */
    for (let i = array.length - 1; i >= 0; i--) {
        /*  splice paramters -> splice(where we want to start, number of items to delete, item we want to put into array)
            if our array.length is 3, i will equal 2
            we do not want to remove anything permanently from the array so we put 0 in
            then we put into position 2 array.shift() which is the FIRST element of the array
            this will loop through the entire array and put the first item behind the last item becuase i will continue to decrease
        */
        array.splice(i, 0, array.shift())
    };
    // we return our original array after it has been reversed
    return array;
};

// function to reverse a list with nested objects
function reverseList(list) {
    // set a local tempArray variable
    let tempArray = [];
    // function to find nested objects and return an array with the object's values
    function findNestedValue(object) {
        // if null, return out of function back to reverseList()
        if (object === null) {
            return;
        };
        // iterate through our object and grab values
        Object.values(object).forEach(item => {
            // if null return
            if (typeof item === null) {
                return;
                // if it is an object, rerun recursive function
            } else if (typeof item === "object") {
                return findNestedValue(item);
                // if it is a string, push to temp array
            } else if (typeof item === "string") {
                console.log(item)
                return tempArray.push(item);
                // if it is a number, push to tempArray
            } else if (typeof item === "number") {
                return tempArray.push(item);
            }
        });
    };
    // run our function to find nested objects and create tempArray from the values
    findNestedValue(list);
    // reverse the tempArray and set it to reversedArray
    let reversedArray = reverseArrayInPlace(tempArray);
    // turn our reversedArray back into a list with nested objects and set it to reverseList
    let reverseList = arrayToList(reversedArray);
    // return our reversed list
    return reverseList;
};

// original list
console.log(animals);
// reversed list
console.log(reverseList(animals));

// original list
console.log(listNum);
// reversed list
console.log(reverseList(listNum));

/*--------------------------------------------BELOW IS THE CODE WITHOUT COMMENTS--------------------------------------------*/
/*--------------------------------------------BELOW IS THE CODE WITHOUT COMMENTS--------------------------------------------*/
/*--------------------------------------------BELOW IS THE CODE WITHOUT COMMENTS--------------------------------------------*/

function arrayToList(array, object) {
    if (array.length === 0) {
        return object;
    } else {
        let last = array[array.length - 1];
        let newArray = array.slice(0, array.length - 1);
        return arrayToList(newArray, { value: last, next: object || null })
    }
};

function reverseArrayInPlace(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        array.splice(i, 0, array.shift())
    };
    return array;
};

function reverseList(list) {
    let tempArray = [];
    function findNestedValue(object) {
        if (object === null) {
            return;
        };
        Object.values(object).forEach(item => {
            if (typeof item === null) {
                return;
            } else if (typeof item === "object") {
                return findNestedValue(item);
            } else if (typeof item === "string") {
                return tempArray.push(item);
            } else if (typeof item === "number") {
                return tempArray.push(item);
            }
        });
    };
    findNestedValue(list);
    let reversedArray = reverseArrayInPlace(tempArray);
    let reverseList = arrayToList(reversedArray);
    return reverseList;
};

console.log(animals);
console.log(reverseList(animals));

console.log(listNum);
console.log(reverseList(listNum));