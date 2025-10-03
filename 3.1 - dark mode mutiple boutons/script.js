
//1. Je recupere tout les switchs
const switchBtns = document.querySelectorAll(".switch");
//2. Je recupere tout les elements html de ma page
const allElements = document.querySelectorAll("*")
//3. Je parcours tout les switchs

switchBtns.forEach(function (switchBtn){

    switchBtn.addEventListener("click", function () {
        const icone = document.querySelectorAll(".icon");

        icone.forEach(function (icone) {
            icone.classList.toggle("fa-moon");
        });

        allElements.forEach(function(element){
            element.classList.toggle("darkmode");
        })
    })

})
