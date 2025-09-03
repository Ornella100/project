
let scoreordinateur=0;
let scorejoueur=0;

function choixordinateur()    {
let options=["Pierre","Papier","Ciseaux"]
let choix=options[Math.floor(Math.random()*options.length)]
return choix;
}
function jouer(choixjoueur){
   let choixordi=choixordinateur()
   resultat="";
   if( choixjoueur===choixordi){
    resultat="Vous avez tout les deux choisi "+choixjoueur;
}else if(
    ( choixjoueur==="Pierre" && choixordi==="Ciseaux")||
( choixjoueur==="Ciseau " && choixordi==="Papier")||
( choixjoueur==="Papier" && choixordi==="Pierre")  
)
{
     resultat= " Vous avez gagner "+choixjoueur+" bat "+choixordi;
    scorejoueur++;

    }
else
    {
    resultat="Vous avez perdu "+choixordi+" bat "+choixjoueur;
    scoreordinateur++;
}
document.getElementById("resultat").textContent = resultat;
   let score= document.getElementById("score")
   score.textContent = 
        "Score - Joueur : " + scorejoueur ;
        let score1= document.getElementById("score1")
        score1.textContent="Ordinateur : " + scoreordinateur;
}
document.getElementById("pierre").addEventListener("click", () => jouer("Pierre"));
document.getElementById("papier").addEventListener("click", () => jouer("Papier"));
document.getElementById("ciseaux").addEventListener("click", () => jouer("Ciseaux"));

   let musique=document.getElementById("musique")
   let son=document.getElementById("son")
 son.addEventListener("click",function(){
    if(!musique.paused ){
        musique.pause()
        musiqueactive=false
        son.innerText="Activer le son"
    }
    else{
     musique.play().catch(()=>{
    alert("il n'y a pas de son")   })
     son.innerText="Pas de son"
    }

})
    
