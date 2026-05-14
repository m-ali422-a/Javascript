                            // Objects in JS 
// Object is a collection of key - value pairs. They help us to store structured data. 

                            // Key Value Sturucture
// let obj = {
//     name: "Muhammad Ali",
//     age: 21,
//     Profession: "Developer",
// }

                            // Nesting and Deep access 
// => Nesting
// let user = {
//     name: "Muhammad Ali",
//     age: 21,
//     Profession: "Developer", 
//     location: {
//        city: "Mustafabad",
//        address:{
//         Home: "Lalyani",
//        }
//     },
// }
// => Deep access 
// user.location.address.Home;

// => Destructioring
// let {Home} = user.location.address;

                             // Looping Through Objects
// for in loop

// let obj = {
//     name: "Muhammad Ali",
//     age: 21,
//     Profession: "Developer",
//  }

// for(let key in obj){
//     console.log(key , obj[key]);
// }

                            // Copying Objects
// let obj = {
//     name: "Muhammad Ali",
//     age: 21,
//     Profession: "Developer",
// };
// Spread Operater 
// let user = {...obj};
// console.log(user);

                           // => Deep cloning

// let user = {
//     name: "Muhammad Ali",
//     age: 21,
//     Profession: "Developer", 
//     location: {
//        city: "Mustafabad",
//        address:{
//         Home: "Lalyani",
//        }
//     },
// }

// JSON.stringify(user) // convert into the string
// let ans = JSON.parse(JSON.stringify(user))

                            // Optional Chaining

// let user = {
//     name: "Muhammad Ali",
//     age: 21,
//     Profession: "Developer", 
//     location: {
//        city: "Mustafabad",
//        addresses:{
//         Home: "Lalyani",
//        }
//     },
// }
// optional chaining
// let user1 = user.location?.address?.Home;

