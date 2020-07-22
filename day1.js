// Question 1 Explore and explain the various methods in console function .


// console.log() is used to log the output to the console, it may be any type,be it s string,array,object boolean ect..

console.log("Hey this is my Day1 assignment");
console.log("true");
console.log(2);
console.log([4,5,6]);
console.log({a:10, b:'vinuthab'});



// console.warn(), this method is used to log warning message to the console

console.warn("Hey , This is wrong window")

// console.clear() , clears the contents of console  and returns some text as "console has been cleared "

console.clear();

//console.time() and console.timeEnd() methods are used when we want to know the times taken by an function or an object to complete the given task.

console.time('a'); //a is the label that should be same for both the methods.
 let Myfun =  function(){ 
     console.log('This function has finished executed!'); 
 } 
 Myfun(); // calling fun();  
console.timeEnd('a');


// console.table() is used to create a table in a console.

console.table({'vinuthab':90 , 'vanih':88})

// console.error() is used to specify the error.

console.error("Invalid Number");



// Question 2 Write the difference between var, let and const with code examples

// var is a datatype , used to declare the variables, these variables are globally scoped or function/locally scoped.


var  greeting = "Hello hai"; //global scope 
function greetfunc()
{
    var greetfun="hello, inside function";
    console.log(greetfun); //local scope or function scope 
    console.log(greeting); //displayed here ;
}
greetfunc();

//var variables can also be redeclared and updated.

//let, the most preferred data type for declaration, it solves all the problems associated with var data type
// the  scope of let variables are only limited to function block .

let a=10;
let count=2;

if(count<=2)
{
    let b="Hello this is inside if block";
    console.log(b); //returns the value of b since its inside the block
}

//console.log(b); // output is like b varaible is not defined.

// let variabkes can be updated but cannot re-declared



// const ,variables declared under tthis datatype doesnot change,i.e., the value assigned remains constant or unchaged.The const variables must and should be initialized during the decalartion itself.
const bonus=100;
console.log(bonus);

bonus=0; //prones error since const variable cannot be reassigned or re-declared .

// Question3 Write a brief intro on available data types in Javascript.

/* 1.Primitive datatypes
  a.strings b.Number console.boolean
  d.undefined e.Null */

/*  2.Reference datatypes
  a.Arrays b.Functions c.objects */














