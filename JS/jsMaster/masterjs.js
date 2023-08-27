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

// let names = ["Gopal","Mohit"]
// let names2 = names;
// console.log("names: ", names)
// console.log("names2: ", names2)
// names.push("Gulshan")
// console.log("After pushing a name in names Array")
// console.log("names: ", names)
// console.log("names2: ", names2)

// ✅ Array Cloning
// concatenate two array
// let array1 =["Gopal",2,null,true]
// let array2 = ["Aman"]
// // let array3 = array1.concat(array2)
// let array3 = array1.concat(["Himan","Ani"])
// //spread operator
// let array4 = [...array1,"Hello"]

// console.log(array4)

// ✅ For loop in array

// let fruits = ["apple","mango","grapes"]
// let newArray =[]
// for (let i = 0; i < fruits.length; i++) {
//   newArray.push(fruits[i].toUpperCase())

// }
// console.log(newArray)

// ✅ For of Loop   (itrating array)

// let fruits = ["apple","mango","grapes"]
// for(let fruit  of fruits){ //It creates  a varible  and stores values in it
//     //from an array named  fruits
//     console.log(fruit)
// }
// // ✅ For in Loop
// for(let index  in fruits){ //It creates  a varible  and stores index number in it
//     //from an array named  fruits
//     console.log(fruits[index])
// }
// ✅ array Destructuring
// Shortcut Method for creating multiple variable and store date from an array
// let fruits = ["apple","mango","grapes","banana"]
// let newFruits = fruits.slice(2)
// const [var1,var2, ...newFruits] = fruits //Special Method in Js to do so

// console.log(var1)
// console.log(var2)
// console.log(newFruits)

// ✅ Objects   (Reference Type)
//    Objects are based on Key Value Pare
// const mohit ={
//     name:"Mohit Kumar",
//     age:30,
//     dob: new Date(),
//     hobys:["Typing","Computer","Caram"],
//     "new Data": "Unknown"
//     //bracket notation
//     //by default name age dob keys are in string format even it not between quets
// }
// //Add New Key Value pare
// mohit.charecter = true
// //Objects Don't have index
// //We have to acces data using it's key name

// console.log(mohit["new Data"])

// Adding new Key with given data in key variable

// const key =  "Email";

// const person ={
//     age:22,
//     language:"Bengali"
// }

// person[key]= "randomemail@krmail.com";

// // console.log(person.Email)

// //✅(Itrating objects Using -  For in loop and Object.keys method)
// // For in loop
// // for(let key in person){
// //     console.log(person[key])
// // }
// //Object.keys
// console.log(Object.keys(person)) // gives us a array
// // let personArray = Object.keys(person)
// for(let key of Object.keys(person)){
//      console.log("My",`${key}`,"is "," : ",person[key])
// }

// ✅Computed Properties

// const key1 = "Object1"
// const key2 = "Object2"

// const value1 = "myvalue1"
// const value2 = "myvalue2"

//Make a object with keys of key1 and key2 and give them value value1
//and value2

// const obj = {
//     [key1]:value1,
//     [key2]:value2
// }
// console.log(obj)
//Another Way
// const obj ={};
// obj[key1]= value1
// obj[key2]= value2

// ✅Spread Operator in object

// const array1 = [1,2,3]
// const array2 = [4,5,6]

// const newArray = [...array1,...array2] //sprading or cloning array to a new array
// const nam = "Gopal"
// const array = [...nam] //sprading a string in a array
// array.pop()
// const obj1 = {
//   name: "Gopal",
//   age: "22",
//   //One name of key is allowed
// };

// const obj2 = {
//   name2: "Mohit",
//   age2: "29",
// };

// const newObj = {...obj1,...obj2};
// const newObj1= {..."Gopa Kumar"} //with String
// const arrayObj = {...["Gopal","Aman","Mohit"]}
// console.log(newObj)

// ✅Object Destructuring

// const car= {
//     carName:"Volvo",
//     model:"v2",
//     price:1500000,
// }

// const {carName:carName1, model:model1} = car;  //creates variable and assing value line by line
//You can change name by using colon

// ✅Objects inside Array

// const users =[
//     {    userId:1, firstName:"Gopal", gender:"Male", },
//     {    userId:2, firstName:"Aman", gender:"Male", },
//     {    userId:3, firstName:"Mohit", gender:"Male", }
// ]

// let firstNames = []
// for(let user of users){
//     // console.log(user)
//     firstNames.push(user.firstName)
// }
// console.log(firstNames)

// ✅nested Destructuring

// const users =[
//     {    userId:1, firstName:"Gopal", gender:"Male", },
//     {    userId:2, firstName:"Aman", gender:"Male", },
//     {    userId:3, firstName:"Mohit", gender:"Male", }
// ]
// const [user1,user2,user3]= users
// const[{firstName:user1FirstName},{userId},{gender}] = users
// console.log(user1FirstName)

// ✅Functions

// function nameWriter(){
//     console.log(`My Name is Gopal`)
// }
// for (let i = 0; i <10; i++) {
//     nameWriter ()

// }
// let i = 0
// while(i<10){
//     nameWriter()
//     i++
// }
// console.log("Gopal")

// function sum(num1,num2){//num1 is a argument
//     console.log(num1+num2)

// }
// sum(1,5)

// function oddEven(number) {
//   if (number / 2 === 0) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
// }
// oddEven(25);

// function firstCharacter(string){
//     console.log(string[0]);
// }
// firstCharacter("Gopal")

// ✅Functions Expression
// Asinging funciton to a variable

// const firstCharacter = function(string){
//     console.log(string[0]);
// }
// firstCharacter("Gopal")

// ✅Arrow Functions

// const firstCharacter = (string)=>{  // Don't need to use function keyword in functions
//     console.log(string[0]);
// }
// firstCharacter("Gopal")

// const isEven =(number)=>{
//     if(number % 2 === 0){
//         console.log("The Number is Even")
//     }
//     else{
//         console.log("The Number is Odd")
//     }
// }
// isEven(123)

//Create a function which return  User name from object

// const user={
//     name:"Gopal",
//     age:22,
// }

// const userNameChaker =()=>{

//      const {name} = user;
//      console.log(name)
// }
// userNameChaker()

// ✅Hoisting

// printName()

// function printName(){
//   console.log("Gopal")
// }

// console.log(hello)
// var hello = "Gopal"

// ✅ Functions in function

// const app= ()=>{
//     const printName = ()=>{
//         console.log("Gopal")
//     }
//     const printAge = ()=>{
//         console.log(22)
//     }
//    console.log("Inside app function")

// }
// app()

// ✅ Lexical Scope

// const myVar = "value1"; //This Variable in Global Scope

// function myApp() {
//   //This is lexical Enviorment

//   function myFunc() {
//     // const myVar = "value59";
//     const myFunc2 = () => {
//       console.log("inside myFunc", myVar);
//     };
//     myFunc2();
//   }
//   console.log(myVar);
//   myFunc();
// }

// myApp();

// ✅ Block Scope vs Function Scope

//Let and const are block Scope
//var is function scope
//whole file compiled as a function
// {
//   //This is block
//   let a = 5;
// }
// {
//     //This is block
//   let a = 9;
// }
// console.log(a)ll

// ✅ default parameters
// function addTwo(a=0,b=0){//Satting default value as zero
//     console.log(a+b)
// }
// addTwo()

// ✅ rest parameters
// const myFunc = (a = 0, b = 0, c = 0, ...d) => {
//   ///...is rest paramiter
//   console.log(`a is ${a}`);
//   console.log(`b is ${b}`);
//   console.log(`c is ${c}`);
//   console.log(`d is`, d);
// };

// myFunc(5, 8, 9, 4, 5, 6, 7, 8);

// const addAll = function (...numbers) {
//   let sum = 0;
//   for (number of numbers) {
//     sum += number;
//   }
//   //    console.log(`sum of all Numbers is ${sum}`)
//   return sum;
// };

// const total = addAll(5, 5, 9, 63, 98, 45, 5);
// console.log(`sum of all Numbers is ${total}`);

//✅ param Destructuring

// const person = {
//   name: "Gopal",
//   age: 22,
// //   gender:"male",
// };

// function details({name,age=18,gender="Blank"}){ //Destructuring Objcet in paramiter
//    console.log(`Hello ${name} You are ${age} and your gender is ${gender} `)
// }
// details(person) // person gives above function an objcet

// ✅ callback Functions

// function myFunc(callback){ //callback is a function as param
// //    console.log(a)
//  callback()

// }

// function myFunc2(){
//     var nam = "Gopal"
//     console.log("Hello from myFunc2", nam)
// }
// myFunc(myFunc2)

// ✅ Function returning funciton

// function myFunc(name){
//     return name
// }

// const result = myFunc("Gopal")
// console.log(result)

// function calc(){
//     function sum(a,b){
//         console.log(a+b)
//     }
//    return sum
// }

// const result = calc()
// console.log(result(25,56))

// ✅ Important array methods

//forEach
//map
//filter
//reduce

// const numbers = [1,4,6,8,9,5]
// ✅ For Each
//Normar Method
// const multiply = ()=>{
//        for(number of numbers){
//            console.log(`${number}*2 = ${number*2}`)
//        }
// }
// multiply()
// Using array method
// function printMultiply(number, index){

//     console.log(`Index - ${index} & Number = ${number}`)
// }

// numbers.forEach(printMultiply)

//Using For Each Method
// numbers.forEach((number)=>{
//          console.log(`${number}*2 = ${number*2}`)
// })

// const users = [
//     {name:"Gopal",age:22},
//     {name:"Aman",age:21},
//     {name:"Mohit",age:29},
//     {name:"Gulshan",age:25}
// ]
// //For Each is like a loop
// users.forEach(function(obj,index){ //This is anonomus function means it has no name
//         console.log(`User ${index} name is ${obj.name}`)
// })

// ✅ Map Method
// const numbers = [1,4,6,8,9,5]
// const value = numbers.map((number,index)=>{ // map always create a new array every loop
//     // console.log(number*number)
//     return number* number   //To use map we have to return
// })
// console.log(value)
// const users = [
//     {name:"Gopal",age:22},
//     {name:"Aman",age:21},
//     {name:"Mohit",age:29},
//     {name:"Gulshan",age:25}
// ]

// const userAge = users.map((userObj,index)=>{
//      return userObj.name
// })
// console.log(userAge)

// ✅ Filter Method
// const numbers = [1,4,6,8,9,5,1,3]
// // filter numbers
// // Filter method returns bulian value

// const moreThan5 = numbers.filter((number,index)=>{
//     return number >= 5
// })
// console.log(moreThan5)

// ✅ Reduce Method
// const numbers = [1,4,6,8,9,5,1,3]

// const sum = numbers.reduce((accumulator,currentValue)=>{
//      return accumulator + currentValue
// },100) //We can give initial value to accumulator like in this case 100
// console.log(sum)
// first accuumulator = 1
// and currentValue = 4
// returns 4+1 = 5
// next acccumulator is = 5
// and currentValu = 6
//  returns 6+5 = 11

//Real Life Example

// const userCart=[
//     {productId: 1, ProductName:"Laptop",price: 60000},
//     {productId: 2, ProductName:"Mobile",price: 35000},
//     {productId: 3, ProductName:"pen",price: 25},
//     {productId: 4, ProductName:"Zins",price: 600},
// ]
// const totalAmmount = userCart.reduce((accumulator,CurrentValue)=>{
//        return accumulator + CurrentValue.price
// },0)

// console.log(totalAmmount)

// ✅ Sort Method

// const numbers = [1200,3,89,5,6,4,7,85]
// const names = ["gopal","mohit"]
// numbers.sort()  //Sort method trit this array as string ["1","3"]
// names.sort()
// console.log(numbers)
// console.log(names)

// const numbers = [1200,3]
// const sorted = numbers.sort((a,b)=>{
//      return a-b
// })
// console.log(sorted)
//For example
// 1200 and 3
// a = 1200 and b= 3
// return  a - b = 1200 - 3 = positive value
// if returns positive value b will appare first
//for oposite situation (for desending value)b - a = negetive value the a will appeare first

//Realistic Example
// Price low To High
// const products =[
//     {productId:1,productName:"Smart Watch",price:2900},
//     {productId:2,productName:"Smart Watch",price:1900},
//     {productId:3,productName:"Smart Watch",price:2500}
// ]
// //Short Method
// const lowToHigh = products.slice(0).sort((a,b)=>{
//     return a.price - b.price

// })
// //Long Method
// const price = products.map((obj,index)=>{
//         return obj.price
// })
// const low_high = price.sort((a,b)=>{
//       return a - b
// })
// console.log(low_high)

// ✅ find Method

// const names = ["Gopal","Sujit","Ajit","Montosh"]

// const isLength5 = function(string){
//       return string.length === 5;
// }

// names.find(isLength5)
// // console.log(isLength5("Gopal"))
// console.log(names.find(isLength5)) //Only return once first value and stoped
// find method
// const name4Letter= names.find((name)=>{
//        return name.length === 4
// })
// console.log(name4Letter)

// const products =[
//     {productId:1,productName:"Smart Watch",price:2900},
//     {productId:2,productName:"Smart Watch",price:1900},
//     {productId:3,productName:"Smart Watch",price:2500}
// ]
// const findId3 = products.find((product)=>product.productId === 3)
// console.log(findId3)

// ✅ every Method

// const numbers = [6,8,4]

// const evenCheck = numbers.every((number)=>number%2 === 0)
// console.log(evenCheck) //Even one number odd it returns false

//Every Method cheks every Item for given condition

// const products =[
//     {productId:1,productName:"Smart Watch",price:2900},
//     {productId:2,productName:"Smart Watch",price:1900},
//     {productId:3,productName:"Smart Watch",price:499},
//     {productId:3,productName:"Smart Watch",price:500},
//     {productId:3,productName:"Smart Watch",price:200},
// ]

// Check Every product greater than 1500? using find method

// const moreThan1500 = products.slice(0).every((product)=>product.price < 3000)

// console.log(moreThan1500)
//Filter under 500 product
// const prices = products.slice(0).map((product)=> product.price).filter((price)=>price<=500)

// console.log(prices)
// const under500 = prices.filter((price)=> price <= 500)
// console.log(under500)

// ✅ some Method

// const numbers = [3,5,8,6]

// Returns true or false
// Check Every Value and returns even one number satisfies the condition

// Check any number grater than 5

// const checkG5 = numbers.some((number)=>number <= 5)
// console.log(checkG5)
// const products =[
//     {productId:1,productName:"Smart Watch",price:2900},
//     {productId:2,productName:"Smart Watch",price:1900},
//     {productId:3,productName:"Smart Watch",price:499},
//     {productId:3,productName:"Smart Watch",price:500},
//     {productId:3,productName:"Smart Watch",price:200},
// ]
// const isMoreThan3000 = products.slice(0).some((product)=>product.price <= 3000)
// console.log(isMoreThan3000)

// ✅ fill Method
//Value, start, end

// const number = new Array(10).fill(25)
// console.log(number)

// const numbers = [1,5,8,6,3,5]
// numbers.fill(0,3,5)
// console.log(numbers)

// ✅ splice Method

//Start Index, delete count, insert

// const names = ["Gopal","Sujit","Suman"]
// const deleted = names.splice(1,1,"Rabi")
// console.log(names)
// console.log(deleted)

// Ctrl + Shift + o  - to find function and variable
//Ctrl + G - Go to line number
// ✅ iterables

// iterables
// (String and array)

// const name = "Gopal"
// for (const char of name) {
//      console.log(char)
// }

// const numbers = [1,5,42,6,8,4]
// for (const number of numbers) {
//      console.log(number * 2)
// }

// array like object
// const employ = {empId:3211,empName:"Gopal",Sallary:50000}
//Object isn't iterables
// array like object has length propery
//We can acces using index number

// String is a Arry Like Object

// ✅ Sets object
// Set Don't Allow Duplicate Values

// const names = new Set(["Gopal","Sujit","Rabi"])
// console.log(names)
//We can't acces using index
// console.log(names[1])
// const numbers = new Set()
// numbers.add([5,2,5])
// numbers.add(56)
// numbers.add(4)
// numbers.add(2)
// numbers.add(3)
// // console.log(numbers)
// for (const number of numbers) {
//     console.log(number)
// }

//Get uniqe values from a array using Set Method
// const names = ["Gopal","Sujit","Gopal"]
// const set = new Set(names)
// console.log(set)

// const me = new Set()

// me.add("Gooopal")
// me.add("Gooopal") //Duplicate Value isn't Allowed

// ✅ Maps Object

// const student = {name:"Gopal",rollNo:2}
// console.log(student.rollNo)
//In Case of Object we can only use string and symble as Key name
// console.log(student["rollNo"])

//Maps
// const person = new Map()
// person.set("Name" ,"Gopal")
// person.set([1,2,3],"One Two Three")
// person.set(1,"One")
// person.set({id:20,name:"Gopal"},"Id and Name")
// const student = {name:"Gopal",rollNo:2}
//In Case of Object we can only use string and symble as Key name
//  console.log(person)
//How to acces value
//  const personName = person.get("Name")
//  console.log(personName)

// for (const key of person.keys()) {
//     console.log(key, typeof(key))
// }
// for (const [key,value] of person) {
//     // console.log(key, Array.isArray(key))
//     console.log(key,value)
// }
// Order is Garanted in map

// const person = new Map([["Name","Gopal"],["Age",22],["Gander","Male"]])
// for (let [key,value] of person) {
//     console.log(key,value)
// }

// const person1 ={
//     id: 1,
//     firstName: "Gopal"
// }

// const extraInfo = new Map()
// extraInfo.set(person1,{age:22,gender:"Male"})
// const gender = extraInfo.get(person1).gender
// console.log(gender)

//Clone Using Object.assign

// const numbers = {
//        one:1,
//        two:2,
//        three:3
// }

// const numbers2 = {...numbers} //Cloning object
// const numbers2 = Object.assign({},numbers) //Cloning object
//New Method

// numbers.four = 4;
// console.log(numbers2)
// let user;
// const user =  {
//     name:"Gopal",
//     luckyNumbars:[2,6,98],
//     address:{
//         State:"WestBengal",
//         Pin:443356,
//         Landmark:"Near High School"
//     }

// }
// console.log(user?.name)
// console.log(user?.address?.Pin) //If Address doesn't Exist it will throw error
// to handle the error we have to inclue question mark to check

//✅ Methods

//Works in function inside object

// const nameAge = ()=>{
//     console.log(`My name is ${this.name}and age is ${this.age}`)
// }
// const person1 ={
//    name:"Gopal",
//    age:22,
//    about: nameAge
// }
// const person2 ={
//    name:"Sujit",
//    age:23,
//    about: nameAge
// }
// person1.about()
//✅ This Keyword
// console.log(this)  //This and Window is same
// console.log(window)
// function myFunc(){
//     "use strict"  // You Don't Giving Window objcet acces
//     console.log(this)
// }
// myFunc()

//✅ Call Apply Bind
// function hello(){
//    console.log("Hello World")
// }
// function gopal(){
//     console.log("My name is Gopal")
// }
// hello.call()
// hello.apply()
// hello.bind()
// const about = function(hobby,favGame){
//     console.log(this.firstName, this.age,hobby,favGame)
//   }
// const user1={
//       firstName: "Gopal",
//       age:22,
// }
// user1.about()
// const user2={
//       firstName: "Mohit",
//       age:29,

// }
// user1.about.call()//If we use .call we must have to pass paramiter or this
// user1.about.call(user2,"Programing","BGMI") //call for user2 next Arguments
// user1.about.call(user2,"Programing","BGMI")

//Don't Do this Mistake
// const user1={
//     firstName: "Gopal",
//     age:22,
//     about : function(){
//   console.log(this.firstName, this.age)
// }
// }

// const func = user1.about
// const func = user1.about.bind(user1) //We have to use bind method to do so

// func() //Don't work because it don't have this referece as we want
// It has window as a this reference

//✅ Arrow function and this
// const user1={
//     firstName: "Gopal",
//     age:22,
//     about : ()=>{
//   console.log(this.firstName, this.age)
// }
// }
// user1.about()  // Arrow function this will take reference from one level up this in that case is window object
// We can also create method like this
// const user2={
//     firstName: "Mohit",
//     age:29,
//     about(){
//   console.log(this.firstName, this.age)
// }
// }
//✅ OOP (Object Oriented Programing)

//Proto,Protype,Classes
//This is hard core
// const user1 = {
//     firstName: "Gopal",
//     lastName:"Kumar",
//     email:"testemail@email.com",
//     age:22,
//     address: "House Number, Colony, Pincode,state",
//     about(){
//         return `${this.firstName} is ${this.age} years old `
//     },
//     is18(){
//        return this.age >= 18;
//     }
// }

//What if we have to create this object million times we have to approch oop

//function that creates object
//add key value pair
//and return that object

// const userMethods = {
//     about(){
//     return `${this.firstName} is ${this.age} years old `
// },
//     is18(){
//     return this.age >= 18;
//  }
// }
// function userCreater(firstName,lastName,email,age,address,){
//        const user = {};
//        user.firstName = firstName;
//        user.lastName = lastName;
//        user.email = email;
//        user.age = age;
//        user.about = userMethods.about
//        user.is18 = userMethods.is18
//       return user
// }
// const user1 = userCreater("Gopal","Kumar","testemail@email.com",22,"Gurugram")
//We have to create method outside to speed up code
// console.log(user1.about())
// const obj1 = {
//     key1:"Value1",
//     key2:"Value2",
//     key3:"Value3",
// }
// const obj2 = {

//     key3:"Value3",
// }
//Another way to create blank blank object
// const obj3 = Object.create(obj1)
// obj3.key3 = "Unique"
// console.log(obj3.key2)
//What if we have to take key 1 in obj2 as reference if it don't has
// console.log(obj3)
//Prototype property also is a deferent topic

// If we have to create multiple Methods
// const userMethods = {
//     about(){
//     return `${this.firstName} is ${this.age} years old `
// },
//     is18(){
//     return this.age >= 18;
//  }
// }
// function userCreater(firstName,lastName,email,age,address,){
//        const user = Object.create(userMethods);
//        user.firstName = firstName;
//        user.lastName = lastName;
//        user.email = email;
//        user.age = age;
//        user.address = address
//       return user;
// }
// const user1 = userCreater("Gopal","Kumar","testemail@email.com",22,"Gurugram")
// const user2 = userCreater("Mohit","Kumar","testemail2@email.com",29,"Gurugram")
// // We have to create method outside to speed up code
// console.log(user1.about())
// console.log(user2.about())

//✅ Prototype property
//We can treat function as a objcet
// function hello(){
//     console.log("Hello")
// }
// console.log(typeof(hello))
// console.log(hello.name)  //Name is a function property
// //Fucntion provides many usefull properties
// //Fuction gives us a free space which is prototype
// //Prototype is like free blank object
// hello.myProperty ="It's My Property Value" // We are assinging value like objects
// console.log(typeof(hello.myProperty))
// hello.prototype.name = "Gopal"
// hello.prototype.prototpeFunction = function(){
//     return  "I am from protype funciton"
// }

// console.log(hello.prototype) // Only fucntion provides prototype property

//✅ User Prototype
// function userCreater(firstName,lastName,email,age,address,){
//        const user = Object.create(userCreater.prototype);
//        user.firstName = firstName;
//        user.lastName = lastName;
//        user.email = email;
//        user.age = age;
//        user.address = address
//       return user;
// }
// userCreater.prototype.about =  function(){
//     return `${this.firstName} is ${this.age} years old `
// },
// userCreater.prototype.is18 = function(){
//     return this.age >= 18;
//  }
// console.log(userCreater.prototype)

// const user1 = userCreater("Gopal","Kumar","testemail@email.com",22,"Gurugram")
// const user2 = userCreater("Mohit","Kumar","testemail2@email.com",29,"Gurugram")

// console.log(user1.about())
// console.log(user2.is18())

//✅ New Keyword

// function createUser(firstName,age){
//     this.firstName = firstName;
//     this.age = age;
// }

// const user9 = new createUser("Gopal",22)
//What new keyword doing
// 1.Create Empty Object {}    Value = this
// 2. return empty object
// 3. automatically create proto and assings in it

// Previous task using new Keyword
// If we use this type of function with new Keyword
// We can start it's name with Capital latter to identify it
// and to avoid error
// function UserCreater(firstName,lastName,email,age,address,){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address
// }
// UserCreater.prototype.about =  function(){
//  return `${this.firstName} is ${this.age} years old `
// },
// UserCreater.prototype.is18 = function(){
//  return this.age >= 18;
// }
// console.log(UserCreater.prototype)

// const user1 = new UserCreater("Gopal","Kumar","testemail@email.com",22,"Gurugram")
// const user2 = new UserCreater("Mohit","Kumar","testemail2@email.com",29,"Gurugram")
// //What new keyword doing
// // 1.Create Empty Object {}    Value = this
// // 2. return empty object
// // 3. automatically create proto and assings in it
// console.log(user1.about())
// console.log(user2.is18())

// This is a construtar function it creates Users Object
// function UserCreater(firstName,lastName,email,age,address,){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address
// }
// UserCreater.prototype.about =  function(){
//  return `${this.firstName} is ${this.age} years old `
// },
// UserCreater.prototype.is18 = function(){
//  return this.age >= 18;
// }

// const user1 = new UserCreater("Gopal","Kumar","testemail@email.com",22,"Gurugram")
// const user2 = new UserCreater("Mohit","Kumar","testemail2@email.com",29,"Gurugram")
// //What new keyword doing
// // 1.Create Empty Object {}    Value = this
// // 2. return empty object
// // 3. automatically create proto and assings in it
// for (const key in user1) {
// //  console.log(key)
//  // It will log all key including existing in protype
// }
// // What if we don't want to log this
// for (const key in user1) {
//     if (user1.hasOwnProperty(key)) {
//         console.log(key)

//     }
// }

//✅ More About Prototype
// We see many methods in array and other elements
// How they get these methods
// The Answer is they get methods from Array prototype
// let numbers =[1,2,3]
// console.log(Object.getPrototypeOf(numbers))
// console.log(numbers)
// let numbers2 = new Array(1,2,5)
// console.log(Array.prototype)

//✅ Class Keyword
// Classes are fake because it works internally like above
// How we use class Keyword

// class UserCreater {
//   constructor(firstName,lastName,email,age,address) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//   }
//  // We have to declare methods here
//   about(){
//     return `${this.firstName} is ${this.age} years old `;
//   }
//   is18(){
//     return this.age >= 18;
//   }

// }

// const user1 = new UserCreater(
//   "Gopal",
//   "Kumar",
//   "testemail@email.com",
//   22,
//   "Gurugram"
// );
// const user2 = new UserCreater(
//   "Mohit",
//   "Kumar",
//   "testemail2@email.com",
//   29,
//   "Gurugram"
// );
// console.log(Object.getOwnPropertyNames(user1))

// Class Practice

// class Animal{
//     constructor(name,age){
//       this.name = name;
//       this.age = age;
//     }
//     eat(food){
//        return `${this.name} Eats ${food}`
//     }

// }

// const dog = new Animal("Tomy",3)
// const cat = new Animal("Pussy",2)

// console.log(dog.eat("Bone"))
// console.log(cat.eat("Fish"))

// //extends Keyword
// // Object is called instence in other Programing language
// class Dog extends Animal{
//     constructor(name,age,speed){
//         super(name,age) // it gives this data to parent
//         this.speed = speed
//     }

//     drink(a){
//         return `${this.name}'s Speed is ${this.speed} He Drinks ${a}`
//     }

// }
// // Dog is a subclass and Animal is a base or parent class
// const tommy = new Dog("Tommy",3)
// console.log(tommy)
// const bob = new Dog("Bob",1,"30km/h")
// console.log(bob.drink("Water"))
// We can create same methods in child class to modyfy those methods
// According to need

//✅ getter and setters

// class person{
//      constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//      }

//      get fullName(){
//         return `${this.firstName} ${this.lastName}`
//      }
//    // How we can use this function as a property
//    // Use get keyword  to make method as property
//    // get keyword internally call the method

//     set fullName(fullName){
//         const [firstName,lastName] = fullName.split(" ")
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// }
// const person1 = new person("Gopal","Kumar Das",22)
// console.log(person1.fullName)
// // How we can change full Name using Full Name property

// person1.fullName = "Mohit Kumar Das"
// console.log(person1.fullName)

//✅ static methods and properties

// class person{
//      constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//      }

//      get fullName(){
//         return `${this.firstName} ${this.lastName}`
//      }
//    // How we can use this function as a property
//    // Use get keyword  to make method as property
//    // get keyword internally call the method

//     set fullName(fullName){
//         const [firstName,lastName] = fullName.split(" ")
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     // using static keyword we set methods on class level
//     static info(){
//         return this.name
//     }
// }

// const person1 = new person("Sujit", "Das",23)
// console.log(person1.fullName)
// all methods are object releted
// How can we set as a class releted function
// To do so use static keyword
// Static Propertys

//✅ How Javascript Works
// JS will compile code then runs
//  JS is a Synchronous Programing Language
//  If a line not exicuted it don't go to next language
//  Browser Provide JS Asynchronous Behabe
// console.log(this)
// console.log(window)
// console.log(firstName)
// var firstName = "Gopal" // firstName variable in global scope
// console.log(firstName)

// How Js runs steps
//  A. Compile
// 1. Tokenizing/Lexing - Divided into small chunks
// 2.Parsing  -  to check Early Error Checking and What is Apropriate scope of Variables
// 3.Code Generation
// B.Code Exicute  - To exicute code JS creates Exicution Context
//  It's Called - Global Exicution Context
// 2.Determining Apropriate scope of Variabl

//  When Global Exicution Context Creates
// Global Exicution Context store memory stack by stack
// 1. Sets value of this
// 2. Set all Variable value created using Var Keyword
// 3. storing evry value in object
// console.log(this);
// console.log(window); // Browser provides window object
// console.log(myFunction);
// //✅ We are able to acces fullName and myFunciton Because of Hoisting
// myFunction() // only runs if we create function using function keyword
// console.log(fullName);

// var myFunction = function(){  // Changing it to Function Expression
//     console.log("This is my function")
// }
// var firstName = "Gopal"
// var lastName = "Kumar Das"
// var fullName = firstName + " " + lastName
// console.log(fullName)
// //  When All line exicuted GEC will deleted and
// // Current Exicution context will on top of stack

// If we create variable Let or Const we have to
// Let and const also hoisted but only works if we inilisize it.

// We learnt about Global Exicution Context till now

// ✅ Function Execution Context

// let foo = "foo";
// console.log(foo);
// function getFullName(firstName, lastName) { // firstName is a paramiter
//   console.log(arguments);
//   let myVar = "Var inside func";
//   console.log(myVar);
//   const fullName = firstName + " " + lastName;
//   return fullName;
// }

// const person1 = getFullName("Gopal","Kumar Das");
//By calling this function  Js creates new function Execution Context
// console.log(person1)
// //  JS maintain Stack state  - Using Call Stack

// ✅ Closures
// Closures - when inner function returned it can take value from
//  it's outer function arguments in local memory
//function can return function

// function myFunc(){
//     // return "Gopal"
//     // return  [5,1,6]
//     // return { key1:"Value1",}
//     function newFunc(){
//         console.log("Gopal")
//     }
//     return newFunc
// }
// const ans = myFunc() // Return new Func and store the function in ans varibale
// ans()

// function nameAge(name,age=0){
//     // return "Gopal"
//     // return [5,1,6]
//     // return { key1:"Value1",}
//     function newFunc(){
//         console.log(`I am ${name} and I am ${age}`)
//     }
//     return newFunc // it returns with it's parent variales name and age
// }
// const ans = nameAge("Gopal", 22) // Return new Func and store the function in ans varibale
// ans()

// function hello(X){
//     const a = "varA"
//     const b = "varB"
//     return function(){
//         console.log(a,b,X)
//     }
// }

// const info = hello([1,56,86])
// info()

// 1.First create Global Exicution context
//    Memory Creation phase
// set this value to window
// set window to window
//  check all variable and function and stores to local memory info = uniniitilize
// save hello function in local memory
// next call hello function and start Function Execution context
//   check and store data of Argumnets
//   Now shifted in FEC along with Gec set value of  take value of X a, b after that return
//  the function along with all nececry variable and argument value
//  then it will close from Call stack
//  Cooming back to GEC calls info function  to create another FEC
// then it evaluate it's value
//  Then Close the GEC

// ✅ Task

// function calc(times = 0) {
//   return function (number = 0) {
    //     number = number ** times;
    //     console.log(number);
    //   };
    // }
    
    // const squre = calc(2);
    // squre(6);
    
    // Shorting Function
    // const calc =(power)=> (number)=> number ** power
    // const squre = calc(2)
    // console.log(squre(5))
    
    // ✅ Task

// function myFunc(){
//     let counter = 0;
//     return function(){
//         if (counter == 0) {
//             console.log("You called me")
//             counter++
//         } else {
//             console.log("Already called")
//         }
        
//     }
// }

// const result = myFunc()
// result()
// result()


//  Video 3

// JS is a Synchronous Programming and single threted
// console.log('Script Started')
// for (let i = 0; i < 1000; i++) {
//       console.log('inside for loop') 
// }
// console.log('Another Task')
 
//🔥 setTimeoout
// console.log('script Start')
// const givenId = setTimeout(()=>{  
//     console.log('mid of Script')
//     // This function provided by Browser
//     //    setTimeout is a Web API
// // Call Stack
// //  Event Loop 
// // Callback Queue
// },1000)
// console.log('The Id of setTimeout is ', givenId)
// clearTimeout(givenId)
// console.log('script end')

//🔥 setInterval

// setInterval(()=>{
//     console.log(Math.floor(Math.random()*10))
//     for (let i = 0; i <100 ; i++) {
    //         console.log('hello')
    
//     }
//     console.log('script End')
// },1000)

// const body = document.body;
// const stopBtn = document.querySelector('button')
// const colorSpan = document.querySelector('.color-code')

// const interverId = setInterval(()=>{
    //     const red = Math.floor(Math.random()*256)
    //     const green = Math.floor(Math.random()*256)
//     const blue = Math.floor(Math.random()*256)
//     const rgb = `rgb(${red},${green},${blue})`
//     body.style.backgroundColor = rgb;
//     colorSpan.textContent = rgb;
// },2000)
// stopBtn.addEventListener('click',()=>{
    //     clearInterval(interverId)
    // })
    
//🔥 CallBacks in general

// function func1(anotherFunc){
//   console.log('fuction is doing task1')
//   anotherFunc()
// }
// function func2(){
//     console.log('function is doing task2')
// } 
// func1(func2) // function taking another function as a argument
 
// function getTwoNumbersAndAdd(num1,num2,callback){ // This num1 and num2 are parameters
//   console.log(num1,num2)
//   callback(5,6)
// }
// function addTwoNumbers(number1,number2){
//      console.log(number1 + number2)
// }
// getTwoNumbers(1,2,addTwoNumbers)

// 🔥 Normal callBack in syncronys JS 

// function getAndMultiply(num1,num2,onSucces,onError){
    //      if (typeof(num1)=== 'number' && typeof(num2)=== 'number') {
        //         onSucces(num1,num2)
        //      } else {
//         onError()
//      }
// }
// getAndMultiply(52,2,
//     (number1,number2)=>{
//         console.log(number1*number2)
// },
// ()=>{
    //     console.log('Wrong DataType')
    // })
    
// 🔥 callBacks in Asynchronous JS 

//  Color Changing Heading Mini Project

// const allH1 = document.querySelectorAll('h1')
// console.log(allH1)
// let count  = 0;
// const intervalId =setInterval(() => {
//         const color = ['violet','purple','red','pink','green','blue','brown']
//         allH1[count].textContent = `Heading ${count+1}`
//         allH1[count].style.color = color[count]
//         count++
//         if (count === allH1.length) {
//             clearInterval(intervalId)
//         }
//     }, 1000)  

// 🔥 Promises



   
 



    
    
