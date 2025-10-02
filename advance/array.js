// * arrays

 const myArr = [0, 1, 2, 3, 4, 5]
//  myArr.push(6) // to add elements in array
//  myArr.pop(0) // to remove the element
//  myArr.unshift(0) // to add elements in first
//  myArr.shift() // to remove elements 


//  console.log(myArr.includes(9)); // to check element had or not 
//  console.log(myArr.indexOf(3));

// const newArr = myArr.join()
//  console.log(myArr);
//  console.log( typeof newArr);
 

// slice- slice used to returns a copy of section of array
// splice- it manupulates the original array like it removes the elements in the arrays

console.log("A" , myArr);
const myn1 = myArr.slice(1,3)
console.log("s", myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("c", myArr);

console.log(myn2);




1,2,3,4,5
0,1,2,3,4
