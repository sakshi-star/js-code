// ***** JavaScript Execution Context *****//

// { } --> Global Execution Context 
//              |
//           use this keyword

//* in brower the value of this is window object

// Functional Execution context 

// Eval Execution Context

//? how to execute the js code

// there are two phase to run the js program code

// 1. Memory Creation Phase --> in this only memory allocates the code

// 2. Execution phase -->

// steps to execute the code

// 1. Global Execution/Envirnoment --> and we allocated this with { This} keyword

// 2. Memory phase --> in this collect all variables and store into the memory and
//                     they give all variables undefined data

// 3. Execution phase --> assign the values of all the variables in this they
//                        create new variable Environment + execution thread

// 4. Example -->
                    let val1 = 10
                    let val2 = 5
                    function addNum(num1, num2){
                        let total = num1 + num2
                        return total 
                    }
                    let result1 = addNum(val1, val2)
                    let result2 = addNum(18, 2)
                    console.log(result1);
                    console.log(result2);

 // explaining the code --> 1. Global Execution context -> this

 //                         2.  Memory phase
 //                                 |
 //                             val1 -> undefined
 //                             val2 -> undefined
 //                             addNum -> Defination
 //                             result 1 -> undefined
 //                             result 2 -> undefined

//                           3. Execution phase 
//                                    |
//                               val1 -> 10
//                               val2 -> 5
//                               result1 -> 15
//                               result2 -> 20
//                               addNum -> creates new variable envirnoment + execution thread
//                                                         |
//                                                  1. Memory phase
//                                                     val1 -> undefined
//                                                     val2 -> undefined
//                                                     total -> undefined
//                                                     
//                                                  2. Execution context
//                                                     num1 -> 10
//                                                     num2 -> 5
//                                                     total -> 15 - the total is returned in parent executional context it also 
//                                                                   called functional/Global executional context

//                                              *   3. the most important thing is once global execution envirnoment is done
//                                    *                 then it delete the all execution threads and go to 1st step.

// -------------------------------------------------------------------------------------------------------------------------------- //
// Here is the simple and short explaination of the code 

//  let val1 = 10
//  let val2 = 5

//  We’re creating two variables and storing numbers in them:

// val1 holds the number 10

// val2 holds the number 5

// function addNum(num1, num2){
//     let total = num1 + num2
//     return total 
// }


//  This part creates a function called addNum.

// It takes two inputs (num1 and num2).

// Inside the function, it adds them together and stores the answer in total.

// Then it returns the result (sends it back to where the function was called).

// So basically, this function’s job is to add two numbers and give back the answer.

// let result1 = addNum(val1, val2)

//  Here, you call the function addNum and pass in val1 (10) and val2 (5).

// The function adds them → 10 + 5 = 15

// The result (15) is stored in the variable result1.

// let result2 = addNum(18, 2)

// The function is called again, this time with 18 and 2.

// It adds them → 18 + 2 = 20

// The result (20) is stored in the variable result2.


// console.log(result1);
// console.log(result2);

// Finally, the program prints both results on the screen:

// 15
// 20


// -------------------------------------------------------------------------------------------------------------------------------  //

// *******  call stack ******* //

// It has LIFO stack means last in first out

// When a function starts, it’s pushed onto the stack (added on top).

// When it finishes, it’s popped off (removed from the top).


// Call stack steps:

// greet() is added.

// Inside it, sayHello() is added.

// sayHello() finishes → removed.

// greet() finishes → removed.

// When the stack is empty — the program is done running!
