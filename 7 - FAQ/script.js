const container = document.querySelector(".container");
const questions = document.querySelectorAll(".question");


questions.forEach(function(question){
   
    question.addEventListener("click",function(){
        const btnArrow = question.querySelector(".btn-arrow");

        question.nextElementSibling.classList.toggle("show-reponse");
        btnArrow.classList.toggle("fa-chevron-down");
        btnArrow.classList.toggle("fa-chevron-up");

    });
});
