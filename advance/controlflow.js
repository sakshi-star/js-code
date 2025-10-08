// * * * * * IF Statement * * * * * //

// (===) -> strict equals used to type checking
// (!=) -> not equal
// (==!) -> It checks Negative sign

// if (2 === "2") {
// console.log("executed");

// }

// console.log(" Different DataType ");

// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
    
// } else {
// console.log(`user power: ${power}`); // -> this global scope is 
// }

// ? shorthand notetion

// const balance = 1000

// if (balance > 500) console.log("test"); // -> it called implicit scope it is in a single line code like we assume that the scope is available their 
                                        
// multiples if-else statement

// if (balance < 500) {
//     console.log("less than 500");
    
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if ( balance < 950) {
//     console.log("less than 950");
    
// } else if (balance <= 1000) {
//     console.log("The Balance is Equal");
    
// }
// else{
//     console.log("less than 1100");
    
// }

// ?  If we have to check the multiple conditions then use this (&& -> AND), (|| ->OR) operator to check that condition

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==2) {
//     console.log("Allow to buy courses");
    
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("user logged in");   
// }

// * * * * * * Switch Statement * * * * * * //

// syntax ->

// switch (key) {
//     case value:

//     break;

//     default:
//         break;
// }


// const month = 1
// switch (month) {
//     case 3:
//         console.log("March");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     case 7:
//         console.log("Jully");
//         break;

//     default:
//         console.log("This month is  Januarry");
//         break;
// }

// * * * * *  Truthy OR Falsy Value * * * * * //

// ? Truthy value -> in this we cant do comparison with condition only we assume that the given value is
// ?  string value which is truthy value
// ? Example - 

// const userEmail = "sakshi@124"

// if (userEmail) {
//     console.log("Got user email");
    
// } else {
//     console.log("Dont have user email");
    
// }

// Truthy values

// * "0", 'false', " ", [], {}, function(){}

// ? Falsy value -> The falsy value means empty string if we have a empty string their then we assum that the value is falsy value
// ? example -> 

// const score = ""
// if (score) {
//     console.log("I passed into the Exam");
    
// } else {
//     console.log(" I  failed into the Exam ");
    
// }


// Falsy values

// * false, 0, -0, BigInt, 0n, "", null, undefined, NaN;


// Ckeck the array, object is empty or not in conditions

// const ary = []

// if (user.length === 0) {
//     console.log("Array is empty");
    
// }

// const obj = {}

// if (Object.keys(obj).length === 0) {
//     console.log("Object is Empty");
    
// }


// ** Nullish Coalescing operator (??) : this operator is fully dependent upon the null and undefined keyword
 
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15
// console.log(val1);


// ** Terniary Operator ** //

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");



