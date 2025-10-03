/**
 * Event submit
 * event.preventDefault()
 * HTMLInputElement.value
 * String.prototype.trim()
 * regex
 * RegexExp.prototype.test()
 */



/**
 * 1 .Je recupère
 *      - le formulaire
 *      - le champ prenom
 *      - le champ nom
 *      - le champ email
 *      - le champ message
 */


const form = document.getElementById("formulaire");


form.addEventListener("submit",function(event){
    event.preventDefault();

    hideError(document.querySelector("#prenom"));
    hideError(document.querySelector("#nom"));
    hideError(document.querySelector("#email"));
    hideError(document.querySelector("#message"));

    const prenom = document.querySelector("#prenom").value.trim();
    const nom = document.querySelector("#nom").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    let isValid = true;

if(prenom.length < 2 || prenom.length > 20 ) {
    document.querySelector("#prenom").nextElementSibling.classList.remove("invisible");
    console.log("Votre prénom doit contenir entre 2 et 20 caractères");
    isValid = false;
} 


if(nom.length < 2 || nom.length > 20) {
    document.querySelector("#nom").nextElementSibling.classList.remove("invisible");
    console.log("Votre nom doit contenir entre 2 et 20 caractères");
    isValid = false;
} 

if (!isValidEmail(email)) {
    document.querySelector("#email").nextElementSibling.classList.remove("invisible");
    console.log("Adresse email invalide");
    isValid = false;
}
    

if (message.length < 10 || message.length > 100) {
    document.querySelector("#message").nextElementSibling.classList.remove("invisible");
    console.log("Le message doit contenir entre 10 et 100 caractères");
    isValid = false;
}


const data = { prenom, nom, email, message };



    if(isValid) {
        console.log("Formulaire valide : ", data);
        
    }
});


function isValidEmail(email){
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Création d'un objet RegexExp
    if (emailFormat.test(email))
    {
        return true;
    }else{
        return false
    }
}

function hideError(element) {
    element.nextElementSibling.classList.add("invisible");
}
/**
 * BONUS HORS ACTIVITE *********************************************
 * Envoyer un mail
 */
/**
 * sendMail : Fonction qui permet d'envoyer un mail
 */
function sendMail(message,from){
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"message":"${message}","from":"${from}"}`
      };
      
    fetch('http://localhost:3000/sendmail', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}