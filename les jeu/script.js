const couleurs = ["red", "green", "blue", "purple", "orange", "gold", "pink","brown","navy", "lime","teal","cyan" ,"magenta", "olive","maroon" ,"indigo"];

 let nombreclik= parseInt(localStorage.getItem("nombreclik")) || 0;
let clik=document.querySelector('.clik')
let terminer=document.querySelector('.bouton')
let lescore=document.querySelector('.score')
function afficher(){
    lescore.textContent = `Votre score: ${nombreclik}`;
   let index=nombreclik % couleurs.length
   clik.style.backgroundColor=couleurs[index];
}
 afficher();
clik.addEventListener("click",function(){
   if(musique.paused) musique.play().catch(() => {
        console.log("La lecture automatique est bloquée, cliquez pour démarrer la musique");
    });
  nombreclik++
  afficher();
  localStorage.setItem("nombreclik",nombreclik)

})
terminer.addEventListener("click",function(){
  nombreclik=0;
  musique.pause();
  localStorage.setItem("nombreclik",nombreclik)
  afficher();
})


    

