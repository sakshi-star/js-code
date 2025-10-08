// * "use strict" (===) to treat all js code as newer version of js

// alert( 3 + 3)  // we are using nodejs, not browser

//console.log( 3 + 3) // code readeability should be high

// console.log("Sakshi") 
/* 
tc39.es (ecma 2023) js documentation like it give us standards  
*/

// let name ="sakshi" //string
// let age = "21" // number
// let isLoggedIn = false // boolean


//* there are 7 types of primitive dataTypes  are as follow

// number => 2 to power 53 ->  use to find range
// bigint -> use for large number
// string -> ""
// boolean -> true/false
// null -> standlone value and  it is a object
// undefined -> not define any datatype
// symbols -> unique

 


//* Non-primitive DataType or Reference  

// Arrays, objects, Functions 

//console.log(typeof undefined); // undefined
//console.log(typeof null); // object


// const heros = ["Ankit", "virat", "sidharth"];
// let myObj = {
//     name: "sakshi",
//     age: 21,

// }

// const myFunction = function(){
//     console.log("Hello World");
    
// }
// console.log(typeof heros);

 
// * ==================================Memory================================//

// stack(Primitive), Heap (Non-primitive)
// ex- stack memory-> it gives copy from memory 

let myName = "sakshi"
let anothername = myName
anothername = "Ankit"

console.log(anothername);
console.log(myName);
// if statement
if (true) {
}
 

// ex- Heap Memory -> it gives reference from the memory

// let userOne = {
//     email : "sakshigawali52@gmail.com",
//     passwor: "sakhu07"
// }

// let userTwo = userOne

// userTwo.email = "sakshigoogle.com"

// console.log(userOne.email);
// console.log(userTwo.email);










