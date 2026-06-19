                                 //? DOM in JS 
// Full form => Document Object Model 
// DOM is a programming interface for web document. it use to create, change, update and delete elements.
// DOM is bridge between HTML and JavaScript
// DOM represents HTML as a tree structure.

// Element => Only HTML tags 
// Node => Everything in dom is node ex: text,comment,element

                        //? Accessing elements in DOM 
//* 1- By ID 
// => document.getElementById("idName");
//* 2- By class
// => document.getElementsByClassName("className");
//* 3- By Tag
// => document.getElementsByTagName("tagName");
//* 4- Query Selector
// => document.querySelector("h1");
// => document.querySelectorAll("h1");

                                 //? Changing content

//* 1- innerHtml
// let h1 = document.querySelector("h1");
// h1.innerHTML = "<p>m ali</p>";
//* 2- innerText
// let h1 = document.querySelector("h1");
// h1.innerText = "Muhammad Ali";
//* 3- textContent
// let h1 = document.querySelector("h1");
// h1.textContent = "M Ali";

                                 //? Attribute Manipulation

//* 1- setAttribute
// let a = document.querySelector("a");
// a.setAttribute("href","https://www.google.com/");
//* 2- getAttribute
// let a = document.querySelector("a");
// console.log(a.getAttribute("href"));
//* 3- removeAttribute
// let a = document.querySelector("a");
// a.removeAttribute("href");

                                //? DOM Manipulation
//* 1- createElement,prepend,appendChild,removeChild

// let div = document.querySelector("div");

// let h2 = document.createElement("h2");
// h2.textContent = "Hello g";
// div.prepend(h2);
// div.appendChild(h2);
// h2.remove();

                            //? Change css using dom 
    
// let h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.classList.add("heading");
// h1.classList.remove("heading");