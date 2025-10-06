
// ? this keyword -> used to refer the current contact

// * in browser there is a global object means that is a window object 


const user = {
    username : "sakshi",
    price : 999,

    welcomeMessage : function() {
       // console.log(`${this.username}, welcome to website`);
        //console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = " ankit "
// user.welcomeMessage()

//console.log(this);

// function chai (){
//     let username = "sakshi"
//      console.log(this.username);
        
// }
// chai()

// this in array function


// const chai = function(){
//     let username = "sakshi"
//     console.log(this.username);
    
// }

// chai()

// ************ arrow function (=>) *************** //

// const chai = () => {
//     let username = "sakshi"
//     console.log(this);
    
// }

// chai()

// ? basic arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));

// ? implicit return arrow function -> in this we dont need to use paranthesis, currely and  return keyword

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo  = (num1, num2) => (num1 + num2)

//const addTwo  = (num1, num2) => ({username: "sakshi"}) // -> this syntax used to called the object

//console.log(addTwo(7,9));

// const myArray = [2, 3, 4, 5]

// myArray.forEach()




