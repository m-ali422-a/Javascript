                            //?  Function in JavaScript
//* Function is a block of code that perform a specific task and we reused it whenever we needed. 

//* In simple we define it:-
//* Function = Perform task + Reused code 

                            //?    Types of Functions

//? 1 - Simple Function / Funtion Decleration

// function myName(){
//     console.log("Muhammad Ali");
// }
// myName();

//? 2 - Function Expression 

// let myname = function(a,b){
//     return a*b;
// }

// let ans = myname(2,10);
// console.log(ans);

//? 3 - Arrow Function 

// let myName = (a,b) => {
//     let ans = a + b;
//     return ans;
// }
// let a = myName("Muhammad " + "Ali")
// console.log(a);
                             //? Funtions with parameters and arguments:-

// function myName(a , b)=>This is Funtion parameter {
//     console.log("Full Name " + a + b);
// }
// myName("Muhammad ","Ali");=>This is function argument

                            //? Default,Rest,Spread Parameters

                                //* Default Parameter

// let a = (a=0,b=0)=>{
//     console.log(a+b);
// }
// a();

                                //* Rest Parameter

// let a = (...v)=>{
//     console.log(v);
// }
// a(1,2,3,4,5,6,7,8,9,10);

                            //? Functions With return value
// function myName(a , b){
//     let fullName = a + b;
//     return fullName;

    // unreachable Statements
// This code write after the return keyword didnot execut
// }

// let Naming = myName("Muhammad " , "Ali");
// console.log("Full Name:" + Naming);

                            //? First Class Function
// we can use functions as values
//! Example:-
// let abc = (v)=>{
//     v();
// }

// abc(()=>{
//     console.log("M Ali");
// });

                            //? Higher Order Function
// Higher order function is a function that accept another function as an argument or return a function as a result.
//! Example:-

// let abc = ()=>{
//     return function(){
//         console.log("ALi");
//     }
// }

// abc()();

                            //? Pure vs Impure Function
//* Pure Function
// A pure Function is a fnc that return the same output for the same input and no change the value who is define outside.
//! Example:-

// let a = 10; //* this is not change the value

// let abc = ()=>{
//     console.log("Ali");
// }
// abc();

//* Impure Function
// impure fnc that fnc that change the value of variable who is define outside.

//! Example:-

// let a = 10;

// let abc = ()=>{
//     a++;
//     return a;
// }
// console.log(abc());

                            //? Closure in JavaScript
//* aik aisa fnc jo return kare aik dusra fnc aur return hone wala fnc apne parent fnc ke variable ko use kare.
//! Example:-

// let abc = ()=>{
//     let a =10;
//     return function(){
//         console.log(a);
//     }
// }
// abc()();

                            //? Lexical Scope in JavaScript
//* Lexical Scope ka matlab yeh hai ke variables ki accessibility (yaani woh kahan istemal ho sakte hain)  
//! Example:-
// function abc(){
//     let a = 10;

//     function inn1(){
//         let b = 20;
//         console.log(a);

//         function inn2(){
//             let c = 30;
//         }
//     }
//     inn1();
// }
// console.log(abc());

                         //? IIFE (Immediately Invoked Function Expression)
//* IIFE aik aisa function hai jo apne aap ko call kar leta hai.

// (function(){
//     console.log("Ali");
// })();