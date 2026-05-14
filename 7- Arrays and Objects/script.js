                                // Arrays in Javascript

// Array used to store multiple values in single variable

// 1- Creating Array => let array = [];

// 2- Accessing array => let array = [1,2,3,4,5]; 
// Array access using index no: let array = [3];

// 3- Modify Array => let array = [1,2,3,4,5];  array[3] = 12;

                                // Methods in Javascript
                
// 1- push => insert element in the end 

// let arr = [1,2,3,4,5];
// arr.push(12);
// console.log(arr);

// 2- pop => remove element from last

// let arr = [1,2,3,4,5];
// arr.pop();
// console.log(arr);

// 3- shift => remove first element

// let arr = [1,2,3,4,5];
// arr.shift();
// console.log(arr);

// 4- unshift => insert element in start

// let arr = [1,2,3,4,5];
// arr.unshift(12);
// console.log(arr);

// 5- slice => get out the arrat part 

// let arr = [1,2,3,4,5];
// let newarr = arr.slice(0,3);
// console.log(arr);

// 6- splice => change remove, and update array value

// let arr = [1,2,3,4,5];
// arr.splice(0,2,"ali");
// console.log(arr);

// 7- reverse => reverse the array values 

// let arr = [1,2,3,4,5];
// arr.reverse();
// console.log(arr);

// 8- sort => use to sort the values in asceding and deciding orders

// let arr = [23,65,1,3,9];
// arr.sort(function(a,b){
//     return a-b; // Ascending order 
//     return b-a; // Descending order
// })
// console.log(arr);

// 9- foreach => this method run the function for every array value 

// let arr = [1,2,3,4,5];
// arr.forEach((val) => {
//     console.log(val+5);
// })

// 10- map => The map method is used when you want to create a new array based on the data in the old array.

// let arr = [1,2,3,4,5,6];
// let newarr = arr.map((value) => {
//     return value * 2;
// })
// console.log(newarr);

// 11- filter => return the value true or false

// let arr = [1,2,3,4,5,6,7];
// let newarr = arr.filter((value) => {
//     if(value < 2) return true;
// })
// console.log(newarr);

// 12- reduce => used for multiple values reduce in single value 

// let arr = [1,2,3,4,5,6];
// let newarr = arr.reduce((accumulater,value) => {
//     return accumulater + value;
// }, 0) 
// console.log(newarr);

// 13- find => use for find the value from array 

// let arr = [1,2,3,4,5,6,1];
// let newarr = arr.find((value) => {
//     return  value === 2;
// })
// console.log(newarr);

// 14- some => if value match then answer is true 

// let arr = [1,20,34,50,60];
// let newarr = arr.some((value) => {
//     if(value < 20) return true;
// })
// console.log(newarr);

                        // Destructioring and Spread operater


// Destructioring

// let arr = [1,2,3,4,5];
// let [a,b,,c] = arr;

// Spread operater 

// let arr = [1,2,3,4,5,6];
// let arr1 = [...arr]

                                    // Practice Questions

// 1- Create an array with three fruits and print the second one 

// let fruits = ["Apple","Banana","Orange"];
// fruits[1];

// 2- Add mango at the end and pineapple at the start 

// let fruits = ["Apple","Banana"];
// fruits.push("Mango");
// fruits.unshift("Pineapple");

// 3- Replace Banana with kiwi

// let arr = ["Apple","Banana"];
// arr.splice(1,1,"Kiwi");

// 4- insert red and blue at index 1 on this array 

// let col = ["Green","Yellow"];
// col.splice(1,0,"Red","Blue");

// 5- Extract only the 3 middle elements from this array 

// let arr = [1,2,3,4,5,6,7];
// newarr = arr.slice(2,5)

// 6- Use .map() to square each number 

// let arr = [1,2,3,4,5];
// let newarr = arr.map((val) => {
//     return val*val;
// })

// 7- Use .filter() to keep numbers greater then 10

// let num = [5,12,8,20,3];
// let num2 = num.filter((val) => {
//     if(val > 10) return true;
// })

// 8- Use .reduce() to find the sum of the array 

// let num = [10,20,30];
// let num2 = num.reduce((acc,val) => {
//     return acc+val;
// },0)

// 9- Use .find() to find the first number less than 10

// let num = [12,15,3,8,20];
// let num2 = num.find((value) => {
//     return value < 10;
// })

// 10- Use .some() to check if any student has marks below 35

// let num = [45,60,28,90];
// let num3 = num.some((value) => {
//     return value < 35;
// })

// 11- Use .every() to check all number is even 

// let num = [2,4,6,8,10];
// let num4 = num.every((value) => {
//     if(value%2 === 0) return true;
// })

// 12- Destructure this array to get first name and last name 

// let name = ["Muhammad","Ali"];
// let [fname , lname] = name;

// 13- Merge two arrays using spread operater

// let a = [1,2];
// let b = [3,4];
// let c = [...a,...b];