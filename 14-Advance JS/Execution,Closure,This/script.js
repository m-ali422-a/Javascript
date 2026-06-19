                                    //? Execution Context
//* Aik aisa environment ha js fnc dekte hi aik space bana deta ha jisme wo apna sara code execute karta ha. or ye do phases me hota ha.
//* 1. Memory Creation Phase
//* 2. Code Execution Phase

                                    //? Closure
//* aik aisa fnc jo return kare aik doosra fnc or return hone wala fnc apne parent fnc ka kisi variable ko use kare.

//* fnc khatam hone ke baad execution context ke stack se remove ho jata ha lekin closure ke case mai fnc apne variable ki aik copy/backlink bana leta ha is tarah [[environment]].

//* closures ma pehle bar fnc call karne par sirf aik fnc return hota ha.
// function count(){
//     let a= 0;
//     return function(){
//         a++;
//         console.log(a);
//     }
// }
// let ans = count(); //! Abhi sirf aik fnc return hua ha
// ans();
// ans();
// ans();

                                    //? This Keyword
//* this keyword aik special keyword ha kyuki jaise baaki sarre keywords ki value ya nature same rehta ha lekin this ki value har fnc ke liye alag hoti ha. ye depend karta ha ke ap use kha use kar rahe ho.

//* 1- Global scope => window
// console.log(this);

//* 2- Function scope => window
// let fnc = ()=>{
//     console.log(this);
// }
// fnc();

//* 3- method with es5 fnc => (object)/with es6 fnc (window)
//* aik object ke ander aik function ho use method kehte ha.
//! obj ke ander this uska poora obj ha.
// let obj = {
//     name: "Ali",
//     age: 21,
//     newFnc: function(){
//         console.log(this.name);
//     }
// }
// obj.newFnc();

//* 4- Event handler => event handler ma this wo element ha jis per event laga ho.
//* arrow fnc apna this keyword create nhi krta ye hame window display krta ha.
// document.querySelector("h1").addEventListener("click",function(){
//     console.log(this);
// })

                                    //? Call, Apply, Bind
//* fnc call karte waqt ap us ki value set kar sakte ho. call, apply, bind ye teeno methods fnc ke this ko set karne ke liye use hote ha.

//* 1- call

// let obj = {
//     name: "Ali",
//     age: 21,
// }
// let fnc = function() {
//     console.log(this.name);
// }
// fnc.call(obj);

//* 2- apply => apply do se zayada arguments ko accept nhi karta ha. apply array ke form me arguments ko accept karta ha.

// let obj = {
//     name: "Ali",
//     age: 21,
// }
// let fnc = function(a,b,c){
//     console.log(this,a,b,c);
// }
// fnc.apply(obj,[1,2,3]);

//* bind => bind bhi call ki tarah hi ha lekin ye fnc ko call nhi karta ha balki uski copy bana deta ha jisme this set hota ha.

// let obj = {
//     name: "Ali",
//     age: 21,
// }
// let fnc = function(a,b,c){
//     console.log(this,a,b,c);
// }
// let newFnc = fnc.bind(obj,1,2,3);
// newFnc();