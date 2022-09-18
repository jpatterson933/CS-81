/*
    The goal of this exercise was to write a loop that printed out the folowing using console.log();
#
##
###
####
#####
######
#######
*/

let hash = "";

for (i = 0; i < 7; i++) {
    let pound = "#";
    hash = hash + pound;

    console.log(hash);
};

/* FIZZ BUZZ Write a program that uses console.log to print all numbers from 1 to 100 except
numbers divisible by 3 print "fizz" and numbers divisible by 5 and not 3 print Buzz THEN
numbers divisible by both 3 and 5 print FIZZBUZZ */

for (i = 0; i <= 100; i++) {
    console.log(i)

    switch (0) {
        case ((i % 3)):
            console.log("Fizz");
            break;
        case ((i % 5)):
            console.log("Buzz");
            break;
    }

    if (((i % 3) + (i % 5)) == 0) {
        console.log("FizzBuzz")
    }
}

