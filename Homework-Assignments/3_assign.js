/*
Problem
Part 1: Recursive Copy Function

Given a string str and number n, write a program that recursively appends a copy of string str n times and returns the resulting string. For example:
RecuriveCopy("a", 10)
//-> "aaaaaaaaaaa"

RecursiveCopy("blah",5)
//-> "blahblahblahblahblahblah"
Please complete the following function. n is the number of copies to add to str:

function RecursiveCopy(str, n) {
    // your code here
}

*/


// we can set the length of the input string and multply that by the n to get our target
// the problem we are having is that it exponentially grows as a string
function RecursiveCopy(str, n) {
    // this sets our target length for each character so we know exactly how long it needs to be
    let target = str.length * n;
    let current = str;
    // lets us know our target length as well as our current string
    console.log(target, current)
    // inner recursive function that will run until our string meets its length
    function find(current, history) {
        // if statement that says, either our string length meets our target
        if (str.length == target) {
            return history;
        // this is where the if statement will run to and end since it will continue to try and grow the string at which point it will tell us
        } else if (current.length > target) {
            console.log("No need to go bigger. We have hit our target!")
            return null;
        // Once it gets here, we will run the find() function again
        } else {
            console.log(current)
            return find(current + str, `${history} + ${str}`)
        }
    }
    // this is where the recurrsion exists, we run our find statement, setting our current string as current, and the inital string
    return find(current, str)
};

RecursiveCopy("beaniew", 3);
RecursiveCopy("a", 12)
RecursiveCopy("Jeff", 10)








/*
Part 2: Call RecursiveCopy (Bonus 5 pts)

Write another function that calls RecursiveCopy() and returns the following string output: "The resulting string [x] has [y] characters". [x] should be replaced by the result from RecursiveCopy() and [y] should be replaced by the number of characters in the resulting string. You may pick the arguments to RecursiveCopy in CountChars or have the user provide input. I will leave this up to you.

function CountChars() {
  // your code here
  // call RecursiveCopy
  // returns a formatted string
}
For example:

console.log(CountChars())
//-> "The resulting string blahblahblahblah has 16 characters"
_______________________________________________

The problem must satisfy the following:

You must use recursion.
You should end up with n+1 copies of the str total in the output because you are appending additional str copies.
Use string literal formatting for the output.
Remember, the problems at the end of the chapter can provide great hints for these assignments.

*/