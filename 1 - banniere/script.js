/*
Nouvelles compétences:
- querySelector // Selectionne le premier element seulement mieux que getElementsBy
- HTMLElement.style 
*/


const cookies_elem = document.querySelector(".cookies");
const btnAccept_elem = document.querySelector(".btn.accept");



cookies_elem.addEventListener("click", () => {
    cookies_elem.style.opacity = "0";
    setTimeout(() => {
        cookies_elem.style.display = "none";
    }, 800); 
});

