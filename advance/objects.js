// singleton -> was not creates by literals it creates by constructes
// Object.create -> it calleds constructors


// object literals

 const mySym = Symbol("key1") // -> symbol declared


 const JsUser = {
     name: "Sakshi",
     [mySym]: "mykey", // syntax of print syntax
     location: "Nashik",
     isLoggedIn: false
 } // {}-> object

//JsUser.email = "Yadavkayra" // use for change the values
//Object.freeze(JsUser) // to freeze the all values
//JsUser.email = "ankityadav"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js users");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js users, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



//console.log(JsUser["Location"]);
//console.log(JsUser.location);
//console.log(typeof JsUser[mySym]);



