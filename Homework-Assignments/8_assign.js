/* As always, I recommend you go through the problems at the end of the chapter in addition to the assignment to better review and understand the chapter contents. Please submit your solutions for the assignment in an HTML or JS file this time (i.e. assignment8.js).

Problem

You're in charge of completing a race simulator. The code contains the following components:

getRacer(name) - This method accepts a racer name and returns a racer as a promise, indicating how fast the racer will complete his or if the racer will forfeit during the race. You'll notice that there is a 30% chance that a racer will forfeit.
race(racers) - This method accepts an array of racers and will start the race with the provided racers.
start(racers) - This method accepts a list of racers and will print the outcome of the race.

*/
function start(racers) {
  return new Promise((resolve, reject) => {
    // Your code here.
  });
}

function getRacer(name) {
  if (Math.random() <= 0.30) {
    return Promise.reject(name + " forfeits")
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(name), Math.random() * 5000);
  });
}

function race(racers) {
  console.log("starting race...")
  start(racers).then(result => {
    console.log("results: " + result)
  })
}

// test example(s)

/*
race([getRacer("anthony"), getRacer("john"), getRacer("joe")])
-> "john finished first, anthony finished second, and joe finished third"

race([getRacer("anthony"), getRacer("john"), getRacer("joe")])
-> "joe finished first, anthony finished second, and john finished third"

race([getRacer("anthony"), getRacer("john"), getRacer("joe")])
-> "joe finished first, john finished second, anthony forfeited"
The code you will complete will determine who finished first, second and third as illustrated by the test cases above. Racers who finished the race, should always be listed first, and those who forfeited, last. 

Requirements:

You CANNOT add/modify anything except where it says "Your code here"
Output can be generated with console.log()
Output must match the string format from the test cases, though the names of the racers of course, can change depending on what names are used when calling race()

*/