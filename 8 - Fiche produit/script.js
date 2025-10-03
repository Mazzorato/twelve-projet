/**
 * let
 * element.getAttribute()
 * element.setAttribute()
 * ++ operator
 * operateur ternaire
 */

// 1. Je recupere toutes les petites vignettes
const vignettes = document.querySelectorAll(".small");

// 2. Je recupere la grande photo
const fullImg = document.getElementById("full");

vignettes.forEach(function(vignette) {
    vignette.addEventListener("click", function (){
        const tampon_fullSrc = fullImg.getAttribute("src");
        fullImg.setAttribute("src", vignette.getAttribute("src"));
        vignette.setAttribute("src", tampon_fullSrc.getAttribute("src"));
        
        
    })
})





const panierMsg = document.querySelector(".panier-msg");
const btnAjouter = document.querySelector(".btn-add");

let nbPanier = 0;



btnAjouter.addEventListener("click",function () {
    nbPanier++;
    
    
    panierMsg.innerText = `Vous avez ${nbPanier} produits dans votre panier.`;
})
   