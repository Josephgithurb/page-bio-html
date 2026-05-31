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

// Recupère tous les boutons et tous les projets.
const boutonsFiltre = document.querySelectorAll(".filtre-btn");
const projets = document.querySelectorAll(".projet");

//Pour chaque bouton 
boutonsFiltre.forEach(bouton =>{
    bouton.addEventListener("click", function(){
        //1. Enlever la classe actif de tous les boutons
        boutonsFiltre.forEach(btn => btn.classList.remove("actif"));
        //2. Ajouter la classe actif au bouton cliqué
        this.classList.add("actif");
        
        //3. Recuperer le filtre choisi
        const filtre = this.getAttribute("data-filtre");

        //4. Faire une boucle sur tous les projet
        projets.forEach(projet => {
            //Faire une condition pour voir si le filtre correspond à la categorie de projet
            if(filtre === "tous" || projet.getAttribute("data-categorie")=== filtre){
                projet.classList.remove("cache");
            }else{
                projet.classList.add("cache");
            } 
        })
    })
})
