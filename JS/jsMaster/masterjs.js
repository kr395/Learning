// ✅console.log can print something on console
// console.log("hello world");
// "use strict"; //it helps to avoid error
// intro to variables

// variables can store some information
// we can use that information later
// we can change that information later

// ✅ declare a variable
// var firstName = "Gopal"
// var lastName = "Kumar Das"
// console.log(`My Name is ${firstName} ${lastName}`)//String Tamplate
// // change value
// lastName = "Das"
// // use a variable
// console.log(`My Name is ${firstName} ${lastName}`)

// rules for naming variables

// you cannot start with number
// example :-
// 1value (invalid)
// value1 (valid)

// var value1 = 2;
// console.log(value1);

// ✅ Variable Naming you can use only undersore _ or dollar symbol
// first_name (valid)
// _firstname (valid)

// first$name (valid)
// $firstname (valid)

// you cannot use spaces
// var first_name = "harshit"; // snake case writing
// var firstName = "harshit"; // camel case writing
// first name (invalid)

// convention
// start with small letter and use camelCase

// ✅ let keyword
// declare variable with let keyword

// let firstName = "Gopal";
// firstName = "Mohit";
// console.log(firstName);

// block scope vs funtion scope
// Full JS file runs as a function when conpile
// let a = 65; // We declare this let in Global
// {
//     //Its a block
//     let a = 2;
// }
// console.log(a)//We can't use let/Const out of any block
// ✅declare constants

// const pi = 3.14; //We can perform using const but we can't it's value directly.
// console.log(pi);
// ✅Data Types
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// 1. An object
// 2. An array
// 3. A date

// ✅String\
// String indexing

// let firstName = "harshitdfjakldsfdf";

//  h    a   r   s   h   i   t
//  0    1   2   3   4   5   6

// console.log(firstName[0]);
// length of string
// firstName.length

// console.log(firstName.length);

// console.log(firstName[firstName.length-2]);

// last Index : length - 1
// ✅All String Methods
//  length - Returns Length of a string
//  slice() - Extract a part according argument
//  substring()
//  substr()
//  replace()
//  replaceAll()
//  toUpperCase()
//  toLowerCase()
//  concat()
//  trim()
//  trimStart()
//  trimEnd()
//  padStart()
//  padEnd()
//  charAt() // return a charecter with specified index
//  charCodeAt()
//  split()

// let methods = ['length',
//     'slice()',
//     'substring()',
//     'substr()',
//     'replace()',
//     'replaceAll()',
//     'toUpperCase()',
//     'toLowerCase()',
//     'concat()',
//     'trim()',
//     'trimStart()',
//     'trimEnd()',
//     'padStart()',
//     'padEnd()',
//     'charAt()',
//     'charCodeAt()',
//     'split()'];

// let myName = "Gopal Kumar Das";
// let after = myName.length
//  let after = myName.slice(0,5) //Retrun Gopal
//  let after = myName.methods[0]
//  let after = myName.substring(5,11) //Return Kumar
//  let after = myName.replace()
//  let after = myName.replaceAll()
//  let after = myName.toUpperCase()
//  let after = myName.toLowerCase()
//  let after = myName.concat("I Love You")
//  let after = myName.trim()
//  let after = myName.trimStart()
//  let after = myName.trimEnd()
//  let after = myName.padStart()
//  let after = myName.padEnd()
//  let after = myName.charAt()
//  let after = myName.charCodeAt()
//  let after = myName.split()

// console.log(after);

// ✅All Operators
//  Arithmetic Operators
// +,-,*,**,/,%,++,--
// let a = 10;
// let b = 12;
// let c = b%a;
// console.log(`Value of C is ${c}`)
// Assignment Operators
// =, +=, -=,*=,/=,%=,**=  // x += y  same as x = x+y

//✅ template string
// let age = 22;
// let firstName = "Gopal"

// "my name is Gopal and my age is 22 "
// let aboutMe = "my name is " + firstName + " and my age is " + age;

// let aboutMe = `my name is ${firstName} and my age is ${age}`

// console.log(aboutMe);

// ✅undefined
// ✅null

// let firstName;
// console.log(typeof firstName);
// firstName = "Harshit";
// console.log(typeof firstName, firstName);

// let myVariable = null;
// console.log(myVariable);
// myVariable = "harshit";
// console.log(myVariable, typeof myVariable);
// console.log(typeof null);
// bug , error

//✅ BigInt
// let myNumber = BigInt(12);
// let sameMyNumber = 123n;
// // console.log(myNumber);
// // console.log(Number.MAX_SAFE_INTEGER);
// console.log(myNumber+ sameMyNumber);
// booleans & comparison operator

// ✅booleans
// true, false

// let num1 = 7;
// let num2 = "7";

// console.log(num1<num2);
// == vs ===
// console.log(num1 === num2);
// != vs !==
// console.log(num1 !== num2);
// truthy and falsy values

// ✅falsy values

// false
// ""
// null
// undefined
// 0
// if else condition

// let age = 17;

// if(age>=18){
//     console.log("User can play ddlc");
// }else {
//     console.log("User can play mario");
// }

// let num = 13;

// if(num%2===0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// let firstName= 0;

// if(firstName){
//     console.log(firstName);
// }else{
//     console.log("firstName is kinda empty");
// }

// ✅ternary operator

// let age = 4;
// let drink;

// if(age>=5){
//     drink = "coffee";
// }else{
//     drink = "milk";
// }

// console.log(drink);

//✅ ternary operator / conditional operator

// let age = 3;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);
// ✅ If Else Method
// let age = 18
// if(age>=18){
//     console.log("You are votable");
// }
// else{console.log("You are not eligable for vote");}
// Using ternary operator
// let votable = age>=18 ? "Yes" : "No"
// console.log(votable)

// and  or operator
// let firstName = "gopal";
// if(firstName[0].toUpperCase() === "G"){
//     console.log("your name starts with G")
// }

// if(age > 18){
//     console.log("you are above 18");
// }

// if(firstName[0] === "G" && age>18){
//     console.log("Name starts with H and above 18");
// }else{
//     console.log("inside else");
// }
// let firstName = "Gopal";
// let age = 16;

// if(firstName[0] === "H" || age>18){
//     console.log("inside if");
// }else{
//     console.log("inside else");
// }

// nested if else

// winning number 19

// 19 your guess is right
// 17 too low
// 20 too high

// let winningNumber = 69;
// let userGuess = +prompt("Guess a number");//use +sing in starting to convert input in a Number5

// if(userGuess === winningNumber){
//     console.log("Your guess is right!!");
// }else{
//     if(userGuess < winningNumber){
//         console.log("too low !!!");
//     }else{
//         console.log("too high !!!");
//     }
// }

// if
// else if
// else if
// else if
// else

// let tempInDegree = 50;

// if(tempInDegree < 0){
//     console.log("extremely cold outside");
// }else if(tempInDegree < 16){
//     console.log("It is cold outside");
// }else if(tempInDegree < 25){
//     console.log("wheather is okay ");
// }else if(tempInDegree < 35){
//     console.log("lets go for swim");
// }else if(tempInDegree < 45){
//     console.log("turn on AC");
// }else{
//     console.log("too hot!!");
// }

// console.log("hello");

//✅ switch statement
//Using Normar If else
// let day = 7;
// if(day === 0){
//     console.log("Sunday");
// }else if(day ===1){
//     console.log("Monday");
// }else if(day ===2){
//     console.log("Tuesday");
// }else if(day ===3){
//     console.log("Wednesday");
// }else if(day ===4){
//     console.log("Thrusday");
// }else if(day ===5){
//     console.log("Friday");
// }else if(day ===6){
//     console.log("Saturday");
// }else{
//     console.log("Invalid Day");
// }

// let day = 9;

// switch (day) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thrusday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid Day");
// }

// ✅while loop

// 0 se 9
// dry don't repeat yourself
// let i = 0; // 1 2 3 4

// while(i<=9){
//     console.log(i);
//     i++;
// }
// console.log(`current value of i is ${i}`);
// console.log("hello");

// let inputValue = 9;

// while(inputValue <= 15){
//     console.log(inputValue)
//     inputValue++
// }
// while loop example
// let num = 100;
// let total = 0; //1 + 2 +3
// let i = 0;

// while(i<=100){
//     total = total + i;
//     i++;
// }

// console.log(total);

// let total = (num*(num+1))/2;
// console.log(total);

// ✅intro to for loop
// print 0 to 9

// for(let i = 0;i<=9;i++){
//     console.log(i);
// }

// console.log("value of i is ",i);
// ✅break keywork and continue keyword

// for(let i = 1; i<=10; i++){
//     if(i===4){
//         break;
//     }
//     console.log(i);
// }

// for(let i = 1; i<=10; i++){
//     if(i===4){
//         continue;
//     }
//     console.log(i);
// }
// console.log("hello there");
// ✅ do while loop

// while(i<=9){
//     console.log(i);
//     i++;
// }

// let i = 10;
// do{
//     console.log(i);
//     i++;
// }while(i<=9);

// console.log("value of i is ", i);

// ✅ Arrays  rererence type
// let names = ["Gopal","Aman","Mohit"]
// let type = typeof(names)
// console.log(typeof(type))
// let obj = {} //we make objects using curly brases
// // you can store multiple types of Data
// let array = ["Gopal",22,null,BigInt(12222)]
// console.log(array[3])
// // Array is a Object
// console.log(Array.isArray(obj))

// ✅ Arrays methods
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let arrayMethod = numbers.length;
// let arrayMethod = numbers.toString();
// let arrayMethod = numbers.pop(); //Delete last index data returns the data
// let arrayMethod = numbers.push(); //Add data in -1th or last index
// let arrayMethod = numbers.shift(); //Remove data from 0th Index
// let arrayMethod = numbers.unshift();//Add data in 0th Index
// let arrayMethod = numbers.join();
// let arrayMethod = numbers.delete();
// let arrayMethod = numbers.concat();
// let arrayMethod = numbers.flat();
// let arrayMethod = numbers.splice();
// let arrayMethod = numbers.slice();
// console.log(numbers)

// ✅ Primitive vs reference data type 
//Primitive
// let aName = "Gopal";
// let name2 = aName;
// console.log(`The Value of aName is ${aName}`)
// console.log(`The Value of Name2 is ${name2}`)
// aName = "Mohit"
// console.log("After Changing the Value of aName")
// console.log(`The Value of aName is ${aName}`)
// console.log(`The Value of Name2 is ${name2}`)
//In case of primitive Data type its Not changing its Normal

let names = ["Gopal","Mohit"]
let names2 = names;
console.log("names: ", names)
console.log("names2: ", names2)
names.push("Gulshan")
console.log("After pushing a name in names Array")
console.log("names: ", names)
console.log("names2: ", names2)

