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
 */
//Conditionals - if else else-if
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
