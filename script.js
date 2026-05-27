//Recupère le bouton et le body
const bouton = document.querySelector("#theme-btn");
const body = document.querySelector("body");

// Ecoute le clic sur le bouton
bouton.addEventListener("click", function(){
    // Si body à la classe sombre on enlève sinon on l'ajoute
    body.classList.toggle("sombre");
    
    // Change le texte du bouton avec une condition
    if(body.classList.contains("sombre")) {
        bouton.textContent="Mode Clair";
    }else{
        bouton.textContent="Mode Sombre";
    }
});

//Recupérer le formulaire et la div de confirmation.
const formulaire = document.querySelector("#contact-form");
const confirmation = document.querySelector("#message-confirmation");

// Ecouter l'envoi du formulaire.
formulaire.addEventListener("submit", (event)=>{
    //Empecher le rechargement de la page.
    event.preventDefault();

    //Recuperer ce que l'utilisateur a tapé dans les champs.
    const nom = document.querySelector("#nom").value ;
    const email = document.querySelector("#email").value ;

    //Verifier que les champs ne sont pas vides.
    if(nom === "" || email === ""){
        confirmation.textContent = "Remplis tous les champs stp";
        confirmation.style.color = "red";
    }else {
        //afficher le message de succcès.
        confirmation.textContent = `Merci ${nom}! ton message a bien été envoyé. `;
        confirmation.style.color = "green";

        //vider le formulaire après confirmation.
        formulaire.reset();
    }
});
