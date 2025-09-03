let tableau=["télécommunication","indépendance","système","monotype","gestion"]
let score=0;
let index=0;
function melangertableau(tableau){
    for(let i=tableau.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [tableau[i],tableau[j]]=[tableau[j],tableau[i]];
    }
    return tableau
}
tableau=melangertableau(tableau)

function melanger(mot){
const lettre=mot.split("");
    for(let i=lettre.length-1;i>0;i--){
        const a=Math.floor(Math.random()*(i+1));
         [lettre[i],lettre[a]]=[lettre[a],lettre[i]];
    }
    return lettre.join("");
}

function affichermot(){
    if(index>=tableau.length){
        let proposition=document.getElementById("zonedeproposition")
        proposition.innerText="le jeu est fini"
        let bouton=document.getElementById("envoyer")
        bouton.disabled=true
    }else{
        let nouvelvaleur=tableau[index]
        let motmelanger=melanger(nouvelvaleur)
        let proposition=document.getElementById("zonedeproposition")
        proposition.innerText=motmelanger
    }
    return;
}
function verifieresultat(event){
    event.preventDefault()
    let motjuste=tableau[index]
    let motsaisie=document.getElementById("saisie").value.trim()
    if(motsaisie.toLowerCase()===motjuste.toLowerCase()){
        score++
        index++
document.getElementById("saisie").value="";
        affichermot()
    }
    let lescore=document.getElementById("votrescore")
    lescore.innerText="votre score est "+score;
}
 let bouton=document.getElementById("envoyer")
 bouton.addEventListener("click",verifieresultat)
 affichermot()