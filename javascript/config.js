const listemots = ['cachalot', 'pétunia', 'serviette']
function afficherResultat(score, nbMotsProposes) {
    // Récupération de la zone dans laquelle on va écrire le score
    let spanScore = document.querySelector(".zoneScore span")
    // Ecriture du texte
    let affichageScore = `${score} / ${nbMotsProposes}` 
    // On place le texte à l'intérieur du span. 
    spanScore.innerText = affichageScore
}

function afficherproposition(proposition){
    let zonedeproposition=document.querySelector(".zoneProposition")
    zonedeproposition.innerText=proposition
}


function lancerlejeu() {
    let score = 0
    let i=0
    let btnValideMot=document.getElementById("btnValiderMot")
 let inputEcriture=document.getElementById("inputEcriture")
afficherproposition(listemots[i])
    btnValideMot.addEventListener("click", function(){
        console.log(inputEcriture.value)
        if(inputEcriture.value===listemots[i]){
            score++
        }
        i++
        afficherResultat(score,i)
        inputEcriture.value=''
        if(listemots[i]===undefined){
            afficherproposition("le jeu es fini")
            btnValideMot.disabled=true
        }else{
            afficherproposition(listemots[i])
        }
    })

afficherResultat(score,i)
}
lancerlejeu()






