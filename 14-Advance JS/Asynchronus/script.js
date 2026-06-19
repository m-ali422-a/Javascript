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