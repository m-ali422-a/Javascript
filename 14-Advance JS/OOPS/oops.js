                                //? OOPS in JS 
//* humien seekhna ha contructer banana , ki aap aik bar blueprint bana do ki har object kaisa dikhega or phir hum new objects with different values bana sake ga

//? Constructer Function:-
// function Create(name,age,subject,color){
//     this.name = name;
//     this.age = age;
//     this.subject = subject;
//     this.color = color;
// }
// //* Prototype:-
// Create.prototype.write = this.write = function(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = this.color;
//         document.body.appendChild(h1);
//     }
// // new aik blank obj banata ha or this value store hoti ha 
// let user1 = new Create("Ali",21,"C++","blue");
// let user2 = new Create("M A",20,"C","red");


//? Class & Constructor:-
//* class aik blueprint ha jisme hum properties or methods define karte ha or phir new object bana sakte ha.

// class Create {
//     constructor(name, age, subject, color) {
//         this.name = name;
//         this.age = age;
//         this.subject = subject;
//         this.color = color;
//     }
//     write(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = this.color;
//         document.body.appendChild(h1);
//     }   
// }

// let user = new Create("M Ali",21,"C","blue");

//? Inheritance:-
//* Inheritance ka matlab ha ki hum aik class se dusri class bana sakte ha or usme properties or methods inherit kar sakte ha.

class newCreate {
    fnc(){
        console.log("hello");
    }
}

class copy extends newCreate{
    
}