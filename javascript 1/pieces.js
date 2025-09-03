import { ajoutListenersAvis } from "./avis.js";
// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();
function genererPieces(pieces){
for (let i = 0; i < pieces.length; i++) {

    const article = pieces[i];
    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
    // Création des balises 
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
    const stockElement = document.createElement("p");
    stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";

      const avisBouton = document.createElement("button");
        avisBouton.dataset.id = article.id;
        avisBouton.textContent = "Afficher les avis";

    // On rattache la balise article a la section Fiches
    sectionFiches.appendChild(pieceElement);
    // On rattache l’image à pieceElement (la balise article)
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    //Ajout des éléments au DOM pour l'exercice
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement);
     //Code aJouté
        pieceElement.appendChild(avisBouton);

    }
    }


const bout = document.querySelector(".btn-trier");
bout.addEventListener("click", function () {
    const piecesordonne = Array.from(pieces);
    piecesordonne.sort(function (a, b) {
        return a.prix - b.prix;
    })
    console.log(piecesordonne)
})

const boutt = document.querySelector(".btn-filter");
boutt.addEventListener("click", function () {
    const piecesfilter = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
    console.log(piecesfilter)
})
const noms=pieces.map(piece=>piece.nom)
for(let i=pieces.length-1 ; i>=0 ; i--){
    if(pieces[i].prix > 35){
        noms.splice(i,1)
    }
}
console.log(noms)
const abordableElement=document.createElement("ul")
for(let i=0;i<noms.length;i++){
    const nomElement=document.createElement("li")
    nomElement.innerText=noms[i];
abordableElement.appendChild(nomElement);

}
document.querySelector(".abordables")
.appendChild(abordableElement)

const inputprixmax=document.querySelector('#prix-max')
inputprixmax.addEventListener('input',function(){
const filterpieces=pieces.filter(function(piece){
    return piece.prix<=inputprixmax.value;
})
document.querySelector(".fiches").innerHTML="";
genererpieces(filterpieces);
})
