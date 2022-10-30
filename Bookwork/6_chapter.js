/*
    Write a class Vec that represents a vecotr in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.
    Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors' (this and the parameters) x and y values.
    Add a getter property length to the prototype that computes the length of the vector--that is, the distance of the point (x,y) from the origin (0,0)
 */

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };
    plus(vector) {
        let x = this.x + vector.x;
        let y = this.y + vector.y;
        return new Vec(x, y);
    };
    minus(vector) {
        let x = this.x - vector.x;
        let y = this.y - vector.y;
        return new Vec(x, y);
    };
    get findLength() {
        return (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
    };
};

let cosmo = new Vec(3, 4);
let drank = new Vec(3, 4);
let biggie = new Vec(22, 12);

// console.log(drank.findLength)

// console.log(cosmo)
// console.log(cosmo.plus(drank));
// console.log(cosmo.minus(biggie));

/*
    -Write a class called Group. Like Set, it has add, delete and has methods. Its constructor creates an empty group, add adds a value to the group, (but only if it is not already a emember), delete removes its arguement from the group ( it it was a member) and 'has' returns a Boolean value indicating whether its argument is a member of the group.
    -Use the === operator, or something equivalent such as indexOf, to determine whther two values are the same.
    -Give the calss a static from method that takes an iterable object as arguemnt and creats a group that contains all teh values produced by iterating over it.
*/

class Group{
    constructor(group) {
        this.group = [];
    };
    // add a value to the group if it does not already exist in the group
    add(item) {
        if(this.group.includes(item.toLowerCase())) {
            console.log("This player already exists!")
            return this.group;
        } else {
            return this.group.push(item.toLowerCase()); 
        }
    };
    // find and delete an item from the group
    delete(item) {
        this.group.splice((this.group.indexOf(item.toLowerCase())), 1);
        return this.group;
    };
    // check to see if the group has an item
    has(item) {
        if(this.group.includes(item.toLowerCase())){
            return console.log(`this group has ${item}`);
        } else {

            return console.log(`The group is missing ${item}`)
        }
    };

    static fromObject(object) {
        let test = new Group();
        test.add(object);
        return test;


    }

}


let players = new Group("trying");
console.log(players);

// issue here when trying to add multiple items
console.log(players.add("jean", "bean", "spleen"))
players.has("Jeff")
players.has("Jacob")
players.has("randotron")

console.log(players.delete("jeff"))

let vibeCheck = new Object ();

vibeCheck.chill = "relax";
vibeCheck.angst = "nervous";
vibeCheck.rage = "angry";

console.log(vibeCheck)

let newObjectGroup = new Object();
console.log(Group.fromObject(vibeCheck))

console.log(players)