let mots=["formulaire","application","navigateur","université","communication","programmation","infrastructure"]
let score=0
let index=0;
function melangertableau(mots){
for( let i=mots.length-1;i>0;i--){
    const a=Math.floor(Math.random()*(i+1));
    [mots[i],mots[a]]= [mots[a],mots[i]]
}
return mots;
}
function melanger(mot) {
    const lettres=mot.split('')
for(let i=lettres.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [lettres[i],lettres[j]] = [lettres[j],lettres[i ]];
}
return lettres.join('');
} 
mots=melangertableau(mots)
function nouveaumots() {
if(index>=mots.length){
    let proposition=document.getElementById("zonedeproposition")
    proposition.innerText="le jeu est fini"
    let bouton=document.getElementById("envoyer")
    bouton.disabled=true

}else{
   let newmot=mots[index]
let nouveaute=melanger(newmot)
 let proposition=document.getElementById("zonedeproposition")
 proposition.innerText=nouveaute
 console.log("le mot correct est "+newmot)
}
return;
}
function verifiermessage(event){
    event.preventDefault();
    let motcorrect=mots[index]
  let  saisie=document.getElementById("saisie").value.trim();
   let proposition=document.getElementById("zonedeproposition")
   let lescore=document.getElementById("votrescore")
if(saisie.toLowerCase()===motcorrect.toLowerCase()){
    score++
    index++
let  saisie=document.getElementById("saisie").value="";
    nouveaumots()
}
  lescore.innerText="votre score est: "+score;
}
let bouton=document.getElementById("envoyer")
    bouton.addEventListener("click",verifiermessage)
    nouveaumots()




