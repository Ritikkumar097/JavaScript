// # Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// javaScript is Dynamically typed language because it does not require to define variable's datatype
const score = 10545  // example  // number datatype
const scorevalue = 100.3  // number datatype

const isLoggedIn = true   // boolean datatype
const outsideTemp = null  // null datatype
let userEmail;   // undefined datatype

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3494959949649154464484644n   // write a big number then at the last write n


// # Reference (Non primitative)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] // array datatype

let myObj = {                  // object datatype
    name: "ritik",
    age: 18
}

const myFunction = function(){       // function datatype
    console.log("Hello, World!");

}




