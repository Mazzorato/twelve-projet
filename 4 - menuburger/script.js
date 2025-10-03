const burger = document.querySelector(".burger");
const modal = document.querySelector(".modal");
const navbarMobile = document.querySelector(".navbar-mobile");

burger.addEventListener("click",function(){
    modal.classList.toggle("show-modal");
    navbarMobile.classList.toggle("active");
    console.log("click")
    
})

// modal.addEventListener("click",function(){
//     navbarMobile.classList.toggle("active");
//     modal.classList.toggle("active");
// });


