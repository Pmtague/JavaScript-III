/* The four principles of "this";
* in your own words, explain the four principle for the "this" keyword below.
*
* 1. If we don't use any specific rules to point this, this points to the window (when working in the browser).

* 2. This points to whatever is left of the dot.

* 3. Uses .bind() to create a new function.

* 4. In explicit binding, .call() or .apply() are used to determine where this points.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding



// Principle 2

// code example for Implicit Binding

let MyInfo = function() {
    this.name = 'Penny',
    this.age = 'noneya',
    this.daughter = 'Hope'
};

MyInfo.prototype.giveInfo = function() {
    console.log(`${this.name}'s age is ${this.age} and she has a daughter named ${this.daughter}!`)
}

let info = new MyInfo();

info.giveInfo()

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding



MyInfo.prototype.giveInfo.call(new )