/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.

* 1. In implicit binding the this keyword refers to what ever is to
the left of the dot notation in a function.

* 2. Explicit Binding is utilized when a function is written in the global scope
rather than being utilized as a method nested inside of an object. if this function
utilizes the this keyword then anything to the right of the dot notation refers to the object
while to the left invokes the function. Essentially gives context to what this is going to be while
utilizing call,apply, or bind.




* 3. In new binding this refers to a constructor function which when called utlizing the new keyword
binds the this keyword to the context giving with in the function scope.



* 4. In window when neither of the above apply this is bound to the window unless strict is applied then it
would just kick back as undefined.

*/


// Principle 1 - Implicit Binding Below

let animalSound = function (obj) {
    obj.makeSound = function () {
        console.log(this.sound);
    };
};

let cow = {
    sound: 'Moooo!',
};

let cat = {
    sound: 'Meeeooow!',
};

animalSound(cow);
animalSound(cat);

cow.makeSound();
cat.makeSound();





// Principle 2
// code example for Explicit Binding

let travelhistory = function (dest1, dest2, dest3) {
    console.log(`${this.name} has traveled to ${dest1}, ${dest2}, ${dest3}`);
};

let Sam = {
    name: 'Sam',
};

let destinations = ['Qatar', ' California USA', ' Florida USA'];

travelhistory.apply(Sam, destinations);

// Principle 3

// code example for New Binding

let Profile = function (username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
};

let myprofile = new Profile('Rilla', 'rillatube@gmail.com', 'Abc123');

console.log(myprofile);





// Principle 4

// code example for Explicit Binding
// Works in browser I am assuming that vscode doesn't have a window????

let animalNoise = function () {
    console.log(this.sound);
};

let pig = {
    sound: 'Oooooink!',
};

animalNoise();
window.sound = 'oink';
animalNoise();


