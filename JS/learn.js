 /*
 //word vs keyword ✅
word = don't have any meaning in programing language
keyword = have a meaning in programing language
 chacha = word 
 for = keyword 
 bhaiya = word 
 if = keyword 
 let = keyword 

// variables and constant let✅
 //var const let = keyword
 //var = variables are there to store changable data 
 var name = "Gopal"
 var title = "Kumar"
 console.log(name + " "+title)
 name= "Mohit"
 console.log(name + " "+title)
 //const = we can't change variables data 
 const name = "Gopal"
 const title = "Kumar"
 console.log(name + " "+title)
 name= "Mohit" // we can't change const 
 console.log(name + " "+title) // 

 //hoisting  ✅ variables = we can use before making variables
 //hosting and hoisting are very deferent
 //hoisting - variable and functions are hoisted which means there
// declaration is moved on the top of the code.

var a ;
console.log(a)
console.log(b)
a = 25;
var b = 454 // converts var b; b = 454 and the var moves to top thats why 
we don't have a error


//Types in JS - ✅ Primitive and reference value -No Brackets
//primitives = 
//1. String var name = "Gopal"
//2. Number var age = 20
//3. Bigint var bigint  = 25646466146166.29
//4. Boolean
//5. Undefined
//6. Null
//7. Symbol
//8. Object
//reference= [] () {} // this type of value only make reference don't give real copy
//1. An object
//2. An array
//3. A date
//Examples:
var an_array = [5,6,7,8];
var an = an_array;
console.log(an);
an_array.pop();
console.log(an_array); //changes the original reference

//Conditionals ✅ - if else else-if
const age = 18
if(age > 18) {
      console.log("You are Adult")
}
else if(age = 18) {
    console.log("You are Adult")
}
else {
    console.log("You are Adult")
}

//Loop✅  
//For and While
//For Loop
for(var i = 26; i > 0, i--;) {
    console.log(i) 
}
//While Loop
var i = 26
while(i > 0) {
    i--
    console.log(i)
}
//function✅ 
//arguments and  
function coock(a, b, c, d, e, f){ //a,b,c,d,e,f is arguments
    var g = a+b+c+d+e+f;
    console.log(g);
}

coock(1, 2, 3, 4, 5, 6)//paramiters

//Array ✅
var names = ["Gopal", "Aman", "Pranjul","Gulshan"];
//Array Methods
names.push("Mohit");
console.log(names);

//JavaScript | Beginning to Mastery Complete Tutorial (Part 1)
//Var
//Let
//Const 
//Data Types

//String Methods
let Name = '35'
let Length = Name.length
let Slice = Name.slice()
let Substring = Name.substring()
let Substr = Name.substr()
let Replace = Name.replace()
let Replaceall = Name.replaceAll()
let Upper = Name.toUpperCase()
 let Lower= Name.toLowerCase()
 let Concat = Name.concat()
 let Trim = Name.trim()
 let trimStart=Name.trimStart()
 let trimEnd= Name.trimEnd()
 let padStart= Name.padStart()
 let padEnd= Name.padEnd()
 let charAt= Name.charAt()
 let charCode= Name.charCodeAt()
 let split =Name.split()
 console.log(split)
console.log(Number(Name))

//Template string
let name = "Gopal";
let age = 25;
let aboutMe = "My Name Is "+name+" and Age Is "+age //Normal
let aboutMe2 = `My name is ${name} and my age is ${age}`//With Template string
console.log(aboutMe, aboutMe2);
let num = BigInt(541)
let age = 546n;//Assign Big int
// == vs ===
//== only chek value
//=== also checks Data types
//if else condition
*/
let age = 19;
let buttton = document.querySelector('button');
function myFunction(){
    if(age % 2 == 0){
        document.querySelector("p").innerHTML = "You Enterd a Even Number" ;  
      }
      else{
        document.querySelector("p").innerHTML ="You entered a Odd Number"
      }
      
}
buttton.addEventListener('click', myFunction)

