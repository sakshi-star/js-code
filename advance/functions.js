function myName() {
    console.log("Sakshi");
    console.log("Anand");
    console.log("Gawali");
    
}

// myName()

// function addTwoNumber(number1, number2){
//     console.log(typeof number1 + number2);
    
// }

// addTwoNumber( 3, 4)

// ? how to return the value in functions ->

// function addTwoNumber (number1, number2){

//     return number1 + number2
// }

// const result = addTwoNumber(16, 7)

// console.log("Result: ", result);

// function LoginUserMessage(username){
//     return `${username} just logged in `
// }

// console.log(LoginUserMessage("Sakshi"));

// function LoginUserMessage(username = "sakshi"){
//     return `${username} just logged in `
// }

// console.log(LoginUserMessage());

// * using if sentense we check is username we put or not 

// function LoginUserMessage(username){
//     if(!username){  // !-> this exlametary used to equals the value we dont have write === 
//         console.log("please enter a username");
//         return
        
//     }
//     return `${username} just loged in` 
// }

// console.log(LoginUserMessage());


// ? (... -> rest operator used to collect the all values in one and give it 
// ? (...) this three dots also called spread operator but it has different uses of different times. )
// * for ex->

function calculateCartPrice(... num1){
    return num1
}

console.log(calculateCartPrice(200,400,600));

const user = {
    username : "sakshi",
    price : 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

// ? another step to pass the values using object

// handleObject({
//     username: "ankit",
//     price : 999
// })

// ? same we also pass the arrays

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

