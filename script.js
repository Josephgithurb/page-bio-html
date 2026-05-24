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
