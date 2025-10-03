/**
 * localStorage
 * setItem()
 * getItem()
 * Fonctionnement de Stockage et des cookies
 * setItem is ok
 * getItem is ok
 * 
 * true
 * false
 */
const cookies = document.querySelector(".cookies");
const btnAccept = document.querySelector(".btn-accept");

if(localStorage.getItem("cookiesAccepted") === "true") {
    cookies.style.display = "none";
} else {
    cookies.style.display = "block";
}


btnAccept.addEventListener("click", function() {
    localStorage.setItem("cookiesAccepted", "true");
    
    cookies.style.opacity = "0";
    setTimeout(function() {
        cookies.remove();
    }, 1000);
})



