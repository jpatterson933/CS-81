/*
    Write a class Vec that represents a vecotr in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.
    Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors' (this and the parameters) x and y values.
    Add a getter property length to the prototype that computes the length of the vector--that is, the distance of the point (x,y) from the origin (0,0)
 */

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        let x = this.x + vector.x
        let y = this.y + vector.y
        return new Vec(x, y)
    };

    minus(vector) {
        let x = this.x - vector.x;
        let y = this.y - vector.y;
        return new Vec(x, y);
    }

    get findLength() {
        return (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
    }


}

let cosmo = new Vec(3, 4);
let drank = new Vec(3, 4);
let biggie = new Vec(22, 12);

console.log(drank.findLength)

// console.log(cosmo)
// console.log(cosmo.plus(drank));
// console.log(cosmo.minus(biggie));

