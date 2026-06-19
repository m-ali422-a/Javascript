                            //? Objects in JS 
//* Object is a collection of key - value pairs. They help us to store structured data. 

                            //? Key Value Sturucture
// let obj = {
//     name: "Muhammad Ali",
//     age: 21,
//     Profession: "Developer",
// }

                            //? Dot vs bracket notation

// Dot:-
// obj.name;
// Bracket:-
// obj['name'];

                            //? Nesting and Deep access 
//* => Nesting
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

//* => Destructioring
// let {Home} = user.location.address;

                             //? Looping Through Objects
//* for in loop

// let obj = {
//     name: "Muhammad Ali",
//     age: 21,
//     Profession: "Developer",
//  }

// for (let key in obj){
//     console.log(key,obj[key]);
// };

                            //? Copying Objects
//* ager object aik nested object ha to spread operater se copy krne ke baad ager hum us ki value change kare ga to wo us ka reference pas karne lage ga.

// let obj = {
//     name: "Muhammad Ali",
//     age: 21,
//     Profession: "Developer",
// };
// // Spread Operater 
// let obj2 = {...obj};
// console.log(obj2);

                           //? Deep cloning for nested obj

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

// let user2 = JSON.parse(JSON.stringify(user))
// user2.name = "ali";
// console.log(user2);

                            //? Optional Chaining
                            
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
// // optional chaining
// let user1 = user.location?.address?.Home;