//? singleton -> was not creates by literals it creates by constructes
// Object.create -> it calleds constructors


// *********object literals*************//

//  const mySym = Symbol("key1") // -> symbol declared


//  const JsUser = {
//      name: "Sakshi",
//      [mySym]: "mykey", // syntax of print syntax
//      location: "Nashik",
//      isLoggedIn: false
//  } // {}-> object

//JsUser.email = "Yadavkayra" // use for change the values
//Object.freeze(JsUser) // to freeze the all values
//JsUser.email = "ankityadav"
//console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello js users");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello js users, ${this.name}`);
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());



//console.log(JsUser["Location"]);
//console.log(JsUser.location);
//console.log(typeof JsUser[mySym]);


//*****Object Singleton************//
  
//const tinderUser = Object() // -> it is a singleton object

// const tinderUser = {}
// tinderUser.id = "123abcc"
// tinderUser.name = "sakhu"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email: "ankityadav",
//     fullname : {
//         usersfullname : {
//             firstname : "sakshi"
            
//         }
//     }
// }
// console.log(regularUser.fullname.usersfullname);

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign({}, target, source);

//console.log(returnedTarget);
// Expected output: Object { a: 1, b: 4, c: 5 }

//console.log(returnedTarget === target);
// Expected output: true

// const user = [
//     {
//     id : 1,
//     email : "sakshi@123.com"
// },
// {
//     id : 2,
//     email : "sakhu@123.com"
// },
// {
//     id : 3,
//     email : "ankit@123.com"
// }
// ]
// user[1].email
// console.log(tinderUser);


// console.log(Object.keys(tinderUser)); //  important for when we create the projects
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // display the array

// console.log(tinderUser.hasOwnProperty('isLogged')); // finds it has or not

const course = {
    coursename : "js code",
    email : "@hiteshchoudary",  // * destructuring the objects
    price : "1499"
}

const {coursename} = course
console.log(coursename);




// const navbar = ({company}) => {

// }      
// navbar(company = "sakshi")


// [
//     {},
//     {},
//     {}
// ] //* json structure


