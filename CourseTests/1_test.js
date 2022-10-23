/*
Instructions
The content we have covered so far have provided a great foundation for problem-solving exercises in the JavaScript programming language. For this reason, a large part of this test will require you to integrate the knowledge you have learned so far in order to write simple to more complex programs for answers.

Test 1 questions can be found below on this page.
Test 1 will consist of coding and multiple choice questions that covers material from Chapter 1 up until, but not including, this week. You may use any resources you have used thus far in the course, but I ask that you avoid blatantly copying complete code from online resources for the answers.
This is a take-home test format, so the Test 1 questions will be available throughout the test period. You will only be able to submit the test any time during the test period: 10/19 12 am to 10/23 11:59 pm.
Please submit your assignment on this page below in one JavaScript file (.js). You can put your multiple choice answers above between comments.
NO LATE SUBMISSIONS WILL BE ACCEPTED.
Tip: If in the end you cannot get your solution to work the way you want, please just submit what you have done so far. I will be scoring based on progress and partial work from your submission for this test.
Submission Format
As mentioned above, please put all your answers in one javascript file (put the MC and short answer questions in comments).
Good luck!

_________________________________

 

Test 1
 

Multiple Choice 1

Which of the following statements is true about the difference between while looping and do..while looping?

a) while loops require if condition statements to run

b) only while loops require a condition

c) while loops must use a global variable

d) do while loops ensure that the body executes at least once


Multiple Choice 2

Observe the following switch statement closely:

switch (prompt("What is your mood today?")) {
  case "happy!":
    console.log("Yay!");
    break;
  case "Sad".toLowerCase():
    console.log("Don't be sad...");
  case "upset":
    console.log("Get glad!");
    break;
  case "UNKNOWN":
    console.log("How do you not know?");
  default:
    console.log("Are you human?");
    break;
}
 

MC 2a

If input is "happy!", then output is:

a)

"Yay!"

b)

"How do you not know?"
"Are you human?"

c) 

"Are you not human?"

d)

"Get glad!"

 

MC 2b

If input is "Sad", then output is:

a)

"Get glad!"

b)

"Don't be sad..."

"Get glad!"

c)

"Are you human?"

d)

None of the above

 

MC 2c

If the input is "UNKNOWN", then the output is:

a)

"How do you not know?"
"Are you human?"
b)

"How do you not know?"

c)

"Are you human?"

d)

None of the above

 

Short Answer 1 (12 pts)

Write out the call stack order for this program if x is 4.

function factorial(x) { 
  if (x === 0) {
    return 1;
  }
  return x * factorial(x-1); 
}

console.log(factorial(x));
Use "not in function" if not in a function, and put the function name along with the arguments if in a function.

Hint: Use the textbook exampleLinks to an external site. as a guide. An example solution would look something like:

Not in function
in function_name(arg, ...)
...
Not in function
To be clear, you are not writing code, but simply describing in a list each function call (list functions with their parameters only, except the “not in function” at the beginning and end of your call stack list) that happens during the execution of the recursive function.

Short Answer 2 - Loops (12 pts)

What is the value of y after the following pseudo-code program executes?

given a variable "y" set to 0
for each number from inclusively 1 to 10:
  if the number is even, then
    increment "y" by 4
  otherwise
    decrement "y" by 3
 

Problem 1 - Find The Difference (20 pts)

Given an array of integers, write a program to find the difference between the sum all the even numbers in the array and sum of all odd numbers in the array. You can subtract the sums in whatever order you wish but the function must always return a positive integer. Please complete a function called SumDiff, which takes an argument of an array of numbers and returns an integer.

function SumDiff(numbers) {
    // your code here
    // returns an integer
}

Example test case:
Input: [1,5,8,2,10,33,36]
Output: 17
Reasoning: (8 + 2 + 10 + 36) - (1 + 5 + 33) = 17
 

Problem 2 - Recursive Sum (30 pts)

Given an JavaScript object list of books that each have a pages attribute to define the number of pages in the book, find the sum of all the pages in the object list of books using recursion (you must use recursion to solve this problem, any other methods will receive half credit).

Keep in mind:

The input list object may be completely empty (ex. {})
The next attribute may not be defined
function getPageTotal(list) {
    // your code here
    // returns an integer
}

Example test case:
Input: 
{
  "book":"A",
  "pages":50,
  "next":{
    "book":"B",
    "pages":25,
    "next": null
  }
}

Output: 75
Reasoning: 50 + 25 pages
 

Problem 3 - Search the Tree (40 pts)

A binary search tree is a data structure that consists of JavaScript objects called "nodes". A tree always has a root node which holds its own integer value property and can have up to two child nodes (or leaf nodes), a left and right attribute. A leaf node holds a value attribute and, likewise, a left and right attribute each potentially pointing to another node in the binary tree. Think of it as a Javascript object with potentially more sub-objects referenced by the left and right attributes (as seen in assignment 4). There are certain rules that apply to a binary tree:

A node's left leaf node has a value that is <= than to its own value
A node's right leaf node has a value that is => its own value
In other words:

let node = {
  value: <some number>
  left: <a node object with value attribute <= this object's value>
  right: <a node object with value attribute >= this object's value>
}
If you need a visual aid, below is an example of what a binary tree looks like according to the above rules:

binarytree.png

You will be writing a function called isMissingFromTree that takes two arguments: the root object and a value (number), and returns a boolean: false if the value is present in the tree or true if it is not present.

function isMissingFromTree(root, value) {
    // your code here
    // return boolean
}
Let's translate the above image into a familiar JavaScript object below as an example:


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
    "left": null
    "right": null
  }
}

console.log(isMissingFromTree(tree, 25))

Output: false
Reasoning: 25 is a value of a leaf node in the binary tree so it isn't missing from it
..
"left": {
  "value": 25,
  "left": null,
  "right": null
},
..



*/