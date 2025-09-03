const listemots = ['cachalot', 'pétunia', 'serviette']
const listephrase = ["Pas de panique ", "La vie, l’univers et le reste", "Merci pour le poisson"]

function afficherresultat(score,nbreproposé){

let nbrscore=document.querySelector(".zoneScore span")
let affichage=`${score}/${nbreproposé}`
nbrscore.innerText=affichage
console.log("votre score est " + score + "sur " + nbreproposé)

}
function choisirphraseoumots(){
    let choix = prompt("veuillez choisie :un mot ou une phrase")
while (choix !== "mot" && choix !== "phrase") {
    choix = prompt("veillez choisie :un mot ou une phrase ")
}
return choix
}
function lancerboucledejeu(listedeproposition){
    let score=0
   for (let i = 0; i < listedeproposition.length; i++) {
    let motutilisateur = prompt("Entrer un mot " + listedeproposition[i])
    if (motutilisateur === listedeproposition[i]) {
        score++
    }
} 
return score
}
function lancerjeu(){
    let choix=choisirphraseoumots()
    let score=0
    let nbreproposé=0
    if(choix==="mot"){
      score=  lancerboucledejeu(listemots)
        nbreproposé=listemots.length
    }
    else{
         score=lancerboucledejeu(listephrase)
        nbreproposé=listephrase.length
    }
    afficherresultat(score,nbreproposé)
}
lancerjeu()