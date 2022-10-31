/*
    Jeffery W. Patterson
    Week 6 Homework
    CS 81git ad
*/


/*
Design a Monster class. A Monster is created with a language argument string and a stomach represented by an array. The Monster should support functions eat() and speak(). Use the class notation to define your Monster object's interface.
eat(food) will store the passed argument into its stomach and return what it has eaten thus far.

speak(sentence) will simply return the passed in phrase.
*/

// monster class
class Monster {
    // constructor with language parameter and empty stomach
    constructor(language) {
        this.language = language;
        this.stomach = [];
        // set language
    }
    // takes a food_item STRING and returns everything eaten so far as an ARRAY
    eat(food_item) {
        this.stomach.push(food_item);
        return this.stomach;
    }

    // takes in a sentence STRING and returns the passed in sentence STRING with no change
    speak(sentence) {
            return `${sentence}`;
    }
}

let tubak = new Monster("english");
// make sure everything works using console.log()
console.log(tubak)
console.log(tubak.speak("I am hungry! Feed me food!"))
console.log(tubak.eat("strawberry"))
console.log(tubak.eat("rasberry"));
/*
Part 2

Create an object, Gremlin, that extends the Monster interface and takes the same argument language.

Gremlins inherits how a monster eats.
Gremlins speaks differently. Gremlins replace each word in a sentence with its only known language, "gar". For example, if the sentence is "I like chicken", the speak() method will turn it into "gar gar gar".

*/
// create a new class Gremlin that extends Monster
class Gremlin extends Monster {
    // constructor takes on the language and stomach parameters from monster
    constructor(language, stomach) {
        super(language,stomach)
    }
    // speak turns any string that is plugged in into gar gar gar
    speak(sentence) {
        let garSpeak = [];
        sentence.split(" ").map(words => {
            words = "gar";
            garSpeak.push(words);
        })

        return garSpeak;
        
    }
}

// create a new gremlin
let greggrey = new Gremlin("gar");
// check the console to make sure everything is working
console.log(greggrey)
console.log(greggrey.speak("this is a sentence"))
console.log(greggrey.eat("pumpking"))
console.log(greggrey.eat("almonds"))
console.log(greggrey.eat("candy").join(","));

