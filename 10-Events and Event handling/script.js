                                //? Events In JS 

//*1 Input event

// let inp = document.querySelector("input");
// inp.addEventListener('input',(dets)=>{
//     if(dets.data !== null){
//         console.log(dets.data);
//     }
// });

//* 2 Change event

// let select = document.querySelector("select");
// let h2 = document.querySelector("h2");

// select.addEventListener('change',(dets)=>{
//     h2.textContent = `${dets.target.value} Device Selected `;
// });

//* 3 Keydown Event

// let h1 = document.querySelector("h1");
// window.addEventListener('keydown',(dets)=>{
//     if(dets.key === " "){
//         h1.textContent = "SPC";
//     }
//     else{
//         h1.textContent = dets.key;
//     }
// });

//* Upload file

// let inp = document.querySelector("input");
// let upload = document.querySelector("div");

// upload.addEventListener("click",()=>{
//     inp.click();
// });
// inp.addEventListener("input",(dets)=>{
//     let file = dets.target.files[0];
//     if(file){
//         upload.textContent = file.name;
//     }
// });

                                //? Event Delegation => use with bubbling
//* Event Delegation ek technique hai jo event bubbling ka use karti hai.Ismein har child par listener lagane ke bajaye parent par ek hi listener lagaya jata hai.

                                //? Event Propagation
//* Event Propagation ek process hai jismein jab koi event trigger hota hai to wo document ke root se start hoke targeted element tak jata hai aur phir wapas root tak jata hai.

//* jab bhi hum koi event raise karte ha to event flow teen phasis ma hotta hai
// * 1- Capturing Phase => top to bottom
// * 2- Target Phase => targeted element
// * 3- Bubbling Phase => bottom to top

                                //? 1- Event Capturing
// * jispe event ayyega wo apne parent element per event search karega aur phir uske parent element per event search karega.

// Capturing listener add karne ke liye third argument true dete hain:

// grandparent.addEventListener("click", () => {
//   console.log("Grandparent");
// }, true);

// parent.addEventListener("click", () => {
//   console.log("Parent");
// }, true);



                                //? 2- Event Bubbling
// * jispe event ayyega ager us per event listner nahi hoga to wo apne parent element per event search karega.

//! Example:-
// let ul = document.querySelector("ul");
// ul.addEventListener("click",(dets)=>{
//     dets.target.classList.toggle("line");
// });

                                //? Practice => Character Count

// let inp = document.querySelector("input");
// let span = document.querySelector("span");

// inp.addEventListener("input",(dets)=>{
//     text = 20 - dets.target.value.length;
//     if(text < 0){
//         span.textContent = text;
//         span.style.color = "red";
//     }
//     else{
//         span.textContent = text;
//         span.style.color = "white"
//     }
// });