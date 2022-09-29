/*
Jeffery W. Patterson
*/

/* Write a program that uses console.log() to print
numbers starting at 20 and ending at 0.

For every odd number print "Buzz" instead of the number
For every even number print "Fizz" insead of the number
*/

// using a for loop we set i to 20 and decrease it by one on every iteration until i = 0;
for (i = 20; i >= 0; i--) {
    // we take the number i and divide by two using the Modulus Operand %
    switch (i % 2) {
        // if the number is even it will give us a remainder of 0
        case(0):
        // console log Fizz and add the i to let us know it printed out the correct even number
        console.log("Fizz" + i);
        // break out of loop and start iteration with next number
        break;
        // if the number is odd it will give us a remainder of 1
        case(1):
        // console log Buzz and add the i to let us know it printed out the correct odd number
        console.log("Buzz" + i);
        break;
    };
};