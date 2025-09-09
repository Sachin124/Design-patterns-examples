/**
🧩 What is Adapter Pattern?

Think of Adapter as a translator.

* You have some existing code (a class, API, or library) that works in a certain way.
* You want to use it with new code that expects things in a different format.
* Instead of rewriting the old code, you write an Adapter that converts between the two.
👉 In short: Adapter makes two incompatible things work together.

🎯 Real-Life Analogy

You have a phone charger with a US plug.
In India, the sockets are different.
Instead of buying a new charger, you buy a plug adapter.
Now your old charger (US plug) works perfectly with the Indian socket.

Moral: The charger didn't change. The socket didn't change. The adapter made them compatible
 */


/** 
 * The Problem
 * Imagine you are building a system for fitting pegs into holes.
 * Your system is designed to work with round pegs and round holes.
 * But later, someone brings you square pegs.
 * The system doesn't understand square pegs, because it only knows how to measure a circle's radius.
 * 👉 Problem: Square pegs don’t fit into a system that expects round pegs.
 */

/** Without Adapter */

// class RoundHole{
//     constructor(public radius: number){}

//     fits(peg: RoundPeg): boolean{
//         return this.radius >= peg.getRadius();
//     }
// }

// class RoundPeg{
//     constructor(private radius: number){}
//     getRadius():number{
//         return this.radius
//     }
// }

// class SquarePeg{
//     constructor(radius: number){}
// }


// const hole = new RoundHole(5);
// const squarePeg = new SquarePeg(5);

/** With Adapter */


class RoundHole{
    constructor(public radius: number){}

    fits(peg: RoundPeg){
        return this.radius >= peg.getRadius()
    }
}

class RoundPeg{
    constructor(private radius: number){}

    getRadius():number{
        return this.radius
    }
}

class SquarePeg{
    constructor(public width: number){}
}

class SquarePegAdapter extends RoundPeg{
    constructor(private squarePeg: SquarePeg){
        super(0);
    }

    getRadius():number{
        return (this.squarePeg.width * Math.SQRT2) / 2
    }

}


const hole = new RoundHole(5);
const smallSquarePeg = new SquarePeg(5);
const largeSquarePeg = new SquarePeg(10);


const smallSquareAdapter = new SquarePegAdapter(smallSquarePeg);
const largeSquareAdapter = new SquarePegAdapter(largeSquarePeg);

// Test fitting
console.log("Small square peg fits:", hole.fits(smallSquareAdapter)); 
// ✅ true (equivalent radius ~3.5 < 5)

console.log("Large square peg fits:", hole.fits(largeSquareAdapter)); 
// ❌ false (equivalent radius ~7.07 > 5)
