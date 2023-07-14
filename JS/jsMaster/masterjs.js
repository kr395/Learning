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
//filter numers
//Filter method returns bulian value
// const array = numbers.filter((number,index)=>{
//     return number  !== number
// })
// console.log(array)


// ✅ Reduce Method
const numbers = [1,4,6,8,9,5,1,3]

const sum = numbers.reduce((accumulator,currentValue)=>{
     return accumulator + currentValue
},100) //We can give initial value to accumulator like in this case 100
console.log(sum)
// first accuumulator = 1
// and currentValue = 4
// returns 4+1 = 5
// next acccumulator is = 5
// and currentValu = 6
//  returns 6+5 = 11

//Real Life Example

const userCart=[
    {productId: 1, ProductName:"Laptop",price: 60000},
    {productId: 2, ProductName:"Mobile",price: 35000},
    {productId: 3, ProductName:"pen",price: 25},
    {productId: 4, ProductName:"Zins",price: 600},
] 
const totalAmmount = userCart.reduce((accumulator,CurrentValue)=>{
       return accumulator
})

console.log(totalAmmount)

