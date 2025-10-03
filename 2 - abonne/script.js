/*
Nouvelles compétences:
 - Font awesome
 - type Boolean
 - if else
 - HTMLElement.classList
    - toggle Inverse l'etat de la classe : present ou pas
    * add
    * remove
    * replace
*/

// 1. Je recupere l'icone smiley
const smiley = document.querySelector("#emoji");
const btnSub = document.querySelector(".btn-sub");

smiley.addEventListener("click",function() {
    smiley.classList.toggle("fa-face-smile");
    smiley.classList.toggle("happy");
});

let isAbonne = false;

btnSub.addEventListener("click",function() {
    btnSub.classList.toggle("abonne");
    btnSub.classList.toggle("Abonnez-vous");
  
    isAbonne = !isAbonne


    });

// 3. Je défini une variable binaire qui exprime l'etat abonné ou non de l'utilisateur

// 4. J'ecoute le clique sur l'icone smiley

// 5. J'ecoute l'evenemment click sur le bouton ABONNEZ
