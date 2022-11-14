/* 
  Jeffery W. Patterson
  CS 81
  Assignment 8
  Late: 10/14/2022

  Notes: I really struggled with this assignment. I could not figure out how to combine the forfeiters with the racers that finished
  in the resolve callback that is in the start() function.
*/

// function where we will add our code to and that will start the race
function start(racers) {
  return new Promise((resolve, reject) => {
    // empty placement arrays
    let placement = [];
    // this will check our length and if it is not 0 that means that there are still people in the race (aka promises pending)
    let stillRacing = racers.length;
    // for looop to go through our Promises
    for (let i = 0; i < racers.length; i++) {
      // we grab reach racer and then grab that Promises result
      racers[i].then(result => {
        // we set the result from the Promise to a placement with an increasing index position
        placement[i] = result;
        // reduces the length of racers as they finish (just the length number)
        stillRacing--;
        // once all racers have finished - if statement - here we want to return the correct statement to the resolve
        if (stillRacing == 0) {
          // create a finishers array that is empty for the racers that did not forfeit
          let finishers = [];
          // map through the our racers results that were stored in placement array
          placement.map(driver => {
            // if the driver HAS finished then we push to the finishers array - if the position is empty it will return as undefined
            if (driver !== undefined) {
              // push any index positions that are not empty to the finishers array
              finishers.push(driver);
            }
          })

          // set a finalresults array to empty, this is where we will store the name and position of each racer
          let finalResults = []
          // create a positions array that will show the positions of each racer and where the finished
          let positions = ["first", "second", "third", "fourth", "fifth"]
          // for loop that takes the finishers array, and the positions array and assigns them accordingly
          for (let i = 0; i < finishers.length; i++) {
            // store a string with who the finisher was an what position in the race they finished at
            finalResults.push(` ${finishers[i]} finished in ${positions[i]}`);
          }
          // send the final results array to our resolve that will later be pulled by the race() function
          resolve(finalResults);
        }
        // here we will catch anybody who forfeits
      }).catch(result => {
        // log to the console once someone forfeits
        console.log(`Breaking News! ${result} the match!!`)
        // reduce are racing length if someone forfeits and drops out - since the total number of racers as reduced accordingly
        stillRacing--;
        // once no one is left racing, we will return the result to our reject for later us
        if (stillRacing == 0) reject(result);
      });
    };
  });
}
/* I added some commnets into the code provided for better clarification */

//this has the promise we want
function getRacer(name) {

  // IF MATH.random is less than or equal to 0.30 the player will forfeit and it will return the rejected player who forfeited
  if (Math.random() <= 0.30) {
    return Promise.reject(name + " forfeits")
  }
  // else it will return a new Promise that will return the name in the resolve but will return that name based off of the setTimeout()
  return new Promise((resolve, reject) => {
    // set timeout callback is resolve(name) with it being called on a random number times 5000
    setTimeout(() => resolve(name), Math.random() * 5000);
  });
};

function race(racers) {
  console.log("starting race...")
  // start racers 
  start(racers).then(result => { console.log("results: " + result) })
};

race([getRacer("anthony"), getRacer("john"), getRacer("joe"), getRacer("jeff"), getRacer("crab")]);
race([getRacer("washed up"), getRacer("try hard"), getRacer("fast racer")]);
race([getRacer("john"), getRacer("jacob"), getRacer("jingleheimer"), getRacer("smith")]);