                                //? Event loop
// js is single threaded but it can works as asnchronusly.
// how ?
// here come our hero "The WEB API".
// WEB API regoister all the later task of js and give it to the callBack queue.

// and another hero i.e. EVENT LOOP take care these task.

// EVENT LOOP take task from callback queue and give it to the stack. but most importantly remmber.
// event loop only give task to the callStack when it is empty.

// there is also another queue that is micro queue. it also keeps the asynchronous task but these task are hight priority task like data fatching task
                      
                               
                               //? Syncronous
//* aisa code jo line by line execute hota hai, aur jab tak pehli line execute nahi hoti, tab tak dusri line execute nahi hoti.

// console.log("Hello");
// console.log("World");        

                                //? Asyncronous
//* aisa code jo line by line execute nahi hota, aur jab tak pehli line execute nahi hoti, tab tak dusri line execute ho sakti hai.

// setTimeout(() => {
//     console.log("World");
// }, 2000);

// console.log("Hello");

                                //? Callback Function
//* aisa function jisko ap aik or functiion bhej rahe ho parameter mai to wo parameter wala function callback function kehlata hai.

// let fnc = (val) => {
//     setTimeout(() => {
//         val();
//     }, 2000);   
// }

// fnc(()=>{
//     console.log("Hello World");
// });

                                //? Call back Hell
//* jab ap aik function ke ander dusra function bhejte ho aur wo dusra function ke ander teesra function bhejte ho aur ye chain chalti rahti hai to isko call back hell kehte hai.

// let orderPlace = (receive)=>{
//     console.log("Payment is in progress");

//     setTimeout(()=>{
//     console.log("Payment is received");
//     receive();
//     },3000);
// }

// let prepareOrder = (receive)=>{
//     console.log("Yor preparation start");

//     setTimeout(() => {
//         console.log("Your order is prepared");
//         receive();
//     }, 3000);
// }

// let pickOrder = (receive)=>{
//     console.log("Delivery boy is on the way");

//     setTimeout(() => {
//         console.log("Delivery boy pick the order");
//         receive();
//     }, 3000);
// }

// let deliver = ()=>{
//     console.log("I am on my way to deliver ooder");

//     setTimeout(()=>{
//         console.log("Order deliver Success");
//     }, 3000)
// }

// orderPlace(()=>{
//     prepareOrder(()=>{
//         pickOrder(()=>{
//             deliver();
//         });
//     });
// });

                                //? Promises
//* JavaScript me Promises ek built-in object hota hai. Yeh asynchronous operations (jaise API se data lana, file read karna) ke result ko handle karne ke kaam aata hai.

//? Promises ke 3 state hote hai
//* 1. Pending: Jab promise create hota hai to wo pending state me hota hai.
//* 2. Fulfilled: Jab promise ka kaam successfully complete ho jata hai to wo fulfilled state me chala jata hai.
//* 3. Rejected: Jab promise ka kaam fail ho jata hai to wo rejected state me chala jata hai.

// let promise1 = new Promise((resolve,reject)=>{
//     let ans = false;
//     if(ans){
//         resolve("Ans is resolve");
//     }
//     else{
//         reject("Ans is reject")
//     }
// });

// promise1.then((msg)=>{
//     console.log("Then " + msg);
// });
// promise1.catch((msg)=>{
//     console.log("Catch " + msg);
// });

                                //? Async Await
//* Async Await JavaScript me asynchronous code ko synchronous code ki tarah likhne ka ek tarika hai. Yeh Promises ke upar built hota hai aur code ko zyada readable aur maintainable banata hai.
//* Async always return promise.


// let abc = async ()=>{
//   let raw = await fetch("https://randomuser.me/api");
//   let ans = await raw.json();
//   console.log(ans);
// }
// abc();