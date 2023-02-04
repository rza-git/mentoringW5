// OOP ==> OBJECT ORIENTED PROGRAMMING

// CLASS ==> BLUEPRINT
// class Home {
//     // color;
//     // SPECIAL FUNCTION CLASS HOME
//     constructor(color, isValid) {
//         // this.color == undefined
//         // Variable
//         let colorDefault = "black"

//         // Properties / Field
//         this.color = color
//         this.isValid = isValid
//     }
// }


// OBJECT ==> REAL LIFE OBJECT
// const whiteHome = new Home("white", true) /// <===

// console.log(whiteHome.color)
// console.log(whiteHome.isValid)
// console.log(whiteHome.colorDefault, "<<<<<<<<<<======")

// const blueHome = new Home("blue", true) /// <====
// console.log(blueHome.color)
// console.log(blueHome.isValid)

// const redHome = new Home("red", true)
// const yellowHome = new Home("yellow", true)

// console.log(blueHome)
// console.log(redHome)
// console.log(whiteHome)


// Parent Class
class Animal {

    static counter = 0;
    constructor(age, color) {
        this.age = age;
        this.color = color;
        Animal.counter++
    }

    getColor() {
        return this.color
    }

    getAge() {
        return this.age
    }

    speak() {
        console.log("Hello")
    }
}

// Child Class
class Cat extends Animal {
    constructor(age, color) {
        // constructor parent
        super(age, color)
    }

    
    
    speak() {
        console.log("Meow")
    }
}

// Child Class
class Dog extends Animal {
    constructor(age, color) {
        // constructor parent
        super(age, color)
    }

    speak() {
        console.log("Gukguk")
    }
}

const cat = new Cat(2, "white"); // counter = 1
const dog = new Dog(4, "brown"); // counter = 2
const dog2 = new Dog(5, "black"); // counter = 3
// Polymorphism 
// Method Overriding
// cat.speak();
// dog.speak();

// console.log(cat.color)
// Encapsulation
console.log(cat.getColor())
console.log(cat.getAge())
console.log("counter = ", Animal.counter)


// console.log(cat);
// console.log(dog);