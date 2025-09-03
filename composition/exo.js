/*let champ=document.getElementById("champ")
let taches=JSON.parse(localStorage.getItem("taches")) || [];
function mettreajour(){
    let list=document.getElementById("liste")
    list.innerHTML="";
    for(t of taches){
    let li =document.createElement("li")
    li.innerText=t.texte;
    if(t.termine){
     li.classList.add("terminer")   ;
    }
    list.appendChild(li);
    }
    let score=document.getElementById("compteur")
 let nb=taches.filter(t=>!t.termine).length
if(nb===0){
    score.innerText="Aucune tache restante"
}
else if(nb===1){
score.innerText="1 tache restante"
}
else{
    score.innerText=`${nb} taches  restante`;
}
localStorage.setItem("taches",JSON.stringify(taches));
}
mettreajour();

let bouton=document.getElementById("ajouter")
bouton.addEventListener("click", (event)=>{
    event.preventDefault();
    let écrire=champ.value.trim();
    if(écrire!==""){ 
    taches.push({texte:écrire,termine:false});
    champ.value="";
    mettreajour();
    };

});
let buton=document.getElementById("suprimer")
buton.addEventListener("click",(event)=>{
    event.preventDefault()
     let écrire=champ.value.trim();
    taches=taches.filter(t=>t.texte!==écrire)
    champ.value="";
    mettreajour();
})
let butte=document.getElementById("terminé")
butte.addEventListener("click",(event)=>{
    event.preventDefault();
    for(t of taches){
        if(champ.value.trim()===t.texte)
        t.termine=true;

    }
    champ.value="";
    mettreajour()
})
let vide=document.getElementById("vider")
vide.addEventListener("click",(event)=>{
event.preventDefault()
if(taches.length>0){
    if(confirm("voulez vous vraiment vider les taches")){
        taches=[];
        mettreajour();
    }else{
        console.log("le champ est déja vide");
    }
};
});


