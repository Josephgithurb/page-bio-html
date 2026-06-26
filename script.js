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

// Animation fade-in au scroll
const observerOptions = {
    threshold: 0.2, // 20% de l'élément visible = animation
    rootMargin: '0px 0px -50px 0px' // déclenche un peu avant
};

const observer = new IntersectionObserver((entries)=> {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);  // anime qu'une seule fois
        }
    });
}, observerOptions);

// Observer tous les projets
document.querySelectorAll('.projet-item, .projet').forEach(el =>{
    observer.observe(el);
}); 

/* Fermer le menu burger apres clic sur un lien mobile */
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', ()=> {
        document.querySelector('#menucheck').checked = false;
    });
});


//J19: Map/ Filter/ Destructuration

// Donnees de test = tes projets
const Projets = [
    {id: 1, nom: "Landing Page Bio", tech:"html", niveau: "debutant"},
    {id: 2, nom: "Todo List", tech: "js", niveau: "intermediaire"},
    {id: 3, nom: "Site Vitrine", tech:"html", niveau:"debutant"}
];
//1 MAP : Transforme chaque projet en HTML
// En React  on fera exactement ca pour afficher une liste
const nomsProjets = Projets.map(projet => projet.nom);
console.log("Map noms:", nomsProjets);

// Version React-ready : retourne du HTML
const cartesHTML = Projets.map(projet => {
    return `<div class="carte">${projet.nom} - ${projet.tech}</div>`;
});
console.log("Map HTML:", cartesHTML);

//2. FILTER : Garde seulement les projets JS
const projetsJS = Projets.filter(projet => projet.tech === "js");
console.log("Filter JS:", projetsJS);

//3. DESTRUCTURATION : Récupère direct ce qu'il faut
const premierProjet = Projets[0];
const {nom, tech} = premierProjet; //au lieu de const nom = premierProjet.nom
console.log("Destructuré:", nom, tech);

//4. COMBO MAP + DESTRUCTURATION = 90% du code React
const listeReact = Projets.map(({id, nom, tech}) => {
    return `${id}: ${nom} fait en ${tech}`;
});
console.log("Combo React:", listeReact);

// Exercice 
const nombres = [1, 2, 3, 4, 5];
//1. Map : multiplie chaque nombre par 2
const multiplienombres = nombres.map((nombre) => nombre*2);
console.log("Resultat multiplication:", multiplienombres);
//2. Filter : garde seulement les nombres > 6
const multiplenombsup6 = multiplienombres.filter((nombre) => nombre > 6);
console.log("Multiplication nombres >6 :", multiplenombsup6);