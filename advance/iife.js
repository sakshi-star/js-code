
// ***** IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) ***** //

// IIFE-> sometimes the global scopes variables or other declarations are
//  poluted in our code so we have to use iife to remove the global scope variables or 
//  declarations on their polution in our code 
// syntax { () () }1st paranthesis used to defination of function and other on for execution


// ! ex ->both IIFE are in one 


 (function chai(){
    // named IIFE
    console.log(" DB Connected");
    
 })();

 ( (name) =>{
    // unnamed IIFE with parameter  
    console.log(`DB Connected Two ${name}`);
    
 }) (`sakshi`)



