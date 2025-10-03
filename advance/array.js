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

// console.log("A" , myArr);
// const myn1 = myArr.slice(1,3)
// console.log("s", myn1);

// console.log("B", myArr);

// const myn2 = myArr.splice(1,3)
// console.log("c", myArr);

// console.log(myn2);

1,2,3,4,5
0,1,2,3,4

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // pust to third element

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

// const new_heros = [...marvel_heros, ...dc_heros] //-> the[...] calleds spread operator means it seprates the single single element and it concats the array
// console.log(new_heros);
 
// const another_array = [1,2,3,[4,5],6,[7,8,[9,10]]]

// const real_array = another_array.flat(Infinity) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(real_array);

// to scape the data

console.log(Array.isArray("Sakshi")) // check is array or not
console.log(Array.from("Sakshi")); // An iterable object to convert to an array,Creates an array from an iterable object.
console.log(Array.from({name: "Sakshi"})); // it returns the empty array if we want the array so we have to instruct there.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements.



