// const name = "sakshi"
// const repoCount = 16

// console.log(name + repoCount); this syntax is outdated

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// `` is use for placeholder and it calleds string interpolition and the purpose is we do any codes on the one syntax

const gameName = new String('sakhuuu')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6, 5) // -> used to reverse string print
console.log(anotherString);






