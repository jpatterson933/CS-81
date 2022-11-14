// Village crows own an old scalpel that can cut through screen doors or packaging
// to quickly track it down, every time THE scalpel is moved to another next, an entry is added to the storage of botht the nest that had it and the nest that took it under the name scalpel
// nest_storage_from entry
// nest_storage_to entry
/* Write an async function locateScalpel that starts at the nest on which it runs, you can use the anyStorage
function defined earlier to access stroage in arbitrary nests - you can assum every nest has a "scalpel" entry in its 
data storage. */

// this is our promise all function
function Promise_all(promises) {
    return new Promise((resolve, reject) => {
        // Your code here.

        let results = [];
        let pending = promises.length;

        for (let i = 0; i < promises.length; i++) {
            promises[i].then(result => {
                results[i] = result;
                pending--;
                if (pending == 0) resolve(results);
            }).catch(reject);
        }
        if (promises.length == 0) resolve(results);
    });
}

// Test code.
Promise_all([]).then(array => {
    console.log("This should be []:", array);
});


function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 500);
    });
}

Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)])
    .then(array => {
        console.log("We should not get here");
    })
    .catch(error => {
        if (error != "X") {
            console.log("Unexpected failure:", error);
        }
    });