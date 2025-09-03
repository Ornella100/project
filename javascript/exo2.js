 let score=0
 const listemots=["cachalot","pétunia","serviette"]
 const listephrases=["Pas de panique ", "La vie, l’univers et le reste", "Merci pour le poisson"]
 let listeproposition=listemots
 function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

function afficherrésultat(score,i){
    
let nbrscore=document.querySelector(".zoneScore span")
let affichage=`${score}/${i}`
nbrscore.innerText=affichage
console.log("votre score est " + score + "sur " + i)
}

function afficherproposition(proposition){
    let zoneproposition= document.querySelector(".zoneProposition")
        zoneproposition.innerText=proposition

}

function lancerjeu(){
let score=0
let i=0
let btnValiderMot=document.getElementById("btnValiderMot");
let inputEcriture=document.getElementById("inputEcriture");
 afficherproposition(listeproposition[i])
btnValiderMot.addEventListener("click" ,()=>{
console.log(inputEcriture.value)
if(inputEcriture.value=listeproposition[i]){
    score++
}
i++
 afficherrésultat(score,i)
inputEcriture.value=""
 afficherproposition(listeproposition[i])
if(listeproposition[i]===undefined){
    afficherproposition("le jeu est fini")
    btnValiderMot.disabled=true
}

} );
let listeradios=document.querySelectorAll(".optionSource input")
for(let j=0;j<listeradios.length;j++){
    listeradios[j].addEventListener("change", (event)=>{
console.log(event.target.value)
if(event.target.value==="1"){
    listeproposition=listemots
}
else{
    listeproposition=listephrases
}
 afficherproposition(listeproposition[i])
})
}
let form=document.querySelector("form")
form.addEventListener("submit", (event)=>{
event.preventDefault();
let monnom=document.getElementById("nom")
let nom=monnom.value
let monemail=document.getElementById("email")
let email=monemail.value
let scoreEmail=`${score}/${i}`
console.log(nom,email)
afficherEmail(nom,email,score)
})
 afficherrésultat(score,i)
 }
 lancerjeu()
  