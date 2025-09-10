const citations = [

  {citation: "La vie est ce qui arrive quand on est occupé à faire d'autres projets.", autheur: "De John Lennon"},
  {citation: "Le succès c'est d'aller d'échec en échec sans perdre son enthousiasme.", autheur: " De Winston Churchill"},
  {citation: "On ne voit bien qu’avec le cœur. L’essentiel est invisible pour les yeux.", autheur: "De Antoine de Saint-Exupéry"},
  {citation: "Tout ce dont vous avez besoin est déjà en vous.", autheur: " De Rumi"},
  {citation: "Fais de ta vie un rêve, et d’un rêve, une réalité.", autheur: " De Antoine de Saint-Exupéry"}
];
let citation=document.querySelector(".citation")
let autheur=document.querySelector(".autheur")
let bouton=document.querySelector(".bout")
 citation.innerText="La seule limite à notre épanouissement de demain sera nos doutes d’aujourd’hui."
autheur.innerText="De Franklin D. Roosevelt"
let musique=document.querySelector("#musique")
let son=document.querySelector(".son")

let musiqueactive=true;

bouton.addEventListener("click",function(){
    if(musiqueactive && musique.paused) musique.play().catch(()=>{
    alert("il n'y a pas de son")   })
    
    let aléatoire=Math.floor(Math.random()*citations.length)
    citation.innerText=citations[aléatoire].citation;
autheur.innerText=citations[aléatoire].autheur;


})

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



