// Firstly we will make increament counter.
// jab hame ek se jyada element par click krke kuch output chahiye hota ha tab ham loop ka use krte ha.
// aur uske sath me querySelectorAll ka bhi use krte ha.

let plus_Button = document.querySelectorAll(".plus");
let minus_Button = document.querySelectorAll(".minus");
let counts = document.querySelectorAll(".one");
let Trolly = document.querySelectorAll("#trolly");
let num = document.querySelector("#numbers");

let count = 1;

plus_Button.forEach((p,index) =>{
    p.addEventListener("click",()=>{
        count++;
        counts[index].innerHTML=count;
    })
})

minus_Button.forEach((p,index) =>{
    p.addEventListener("click",()=>{
        count--;
        counts[index].innerHTML=count;
    })
})