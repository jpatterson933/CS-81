const arrayOfArrays = [["1", "2", "3"], [1, 2, 3], ["something", "should", "go", "here"]]

console.log(arrayOfArrays);

function reduce(array, start) {
    let current = start;

    for (let element of array) {
        console.log(element)
        current = current.concat(element)
    }

    return current;
};

console.log(reduce(arrayOfArrays, []));