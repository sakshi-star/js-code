// * let, const, var

// ? {} -> it calleds scope when it comes with the functions

// * 2 types of scope

// 1. global scope -> it is the outer part of the functions, objects, or if else statements

// 2. Block scope -> it means we write code in the functions or in the if else statement 
//                   like it is the inner part of the code

// * the global/core scope is different when we ckeck in console and also it get different result when we run via node 

// ! for ex-

// let d = 300
// if (true) {
//     let a = 10
//     const b = 20
//     console.log("INNER : ", a);
    
// }

// console.log(d, "outer");


// ? clojers -> in this nested functions are access the child functions parameters

// * Nested scopes 

// ! ex->

function one (){
    const username = "sakshi"

    function two (){
        const website = "Youtube"
        console.log(username);
        
    }
    //console.log(website);
    two()
    
}

// one()

if (true){
    const username = "sakshi"
    if (username === "sakshi"){
        const website = "youtube"
        //console.log(username + website);
        
    }
    //console.log(website);   
}
//console.log(username);

console.log(addone(5))
function addone(num){
    return num + 1

}


const addtwo = function(num){
    return num + 2
}

console.log(addtwo(5))