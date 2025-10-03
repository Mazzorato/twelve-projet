/*
Nouvelles compétences:
- forEach
- querySelectorAll
*/



const switchBtn = document.querySelector(".btn");
switchBtn.addEventListener("click", function() {
    
    const allTag = document.querySelectorAll("*");
    const icon = document.querySelector(".icon");

    

    allTag.forEach(function(dark){
        dark.classList.toggle("darkmode");
    
    
});
   
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
    
})

