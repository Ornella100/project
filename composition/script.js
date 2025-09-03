let champ = document.getElementById("champ")
let taches = JSON.parse(localStorage.getItem("taches")) || [];
// la fonction qui met a jour la liste et le storage
function miseajour() {
    let list = document.getElementById("liste")
    list.innerHTML = "";
    for (let t of taches) {
        let li = document.createElement("li")
        li.innerText = t.texte;
        li.addEventListener("click", ()=>{
            champ.value=t.texte
            })
           let btnsuprime=document.createElement("button")
           let img=document.createElement("img")
           img.src="images/supp.jpeg";
           img.alt="mon image";
            img.style.width="25px"
            btnsuprime.appendChild(img)
btnsuprime.classList.add("supprimer")
           btnsuprime.addEventListener("click",(event)=>{
event.stopPropagation();
         taches=taches.filter(tach=>tach!==t)
        champ.value = "";
        miseajour();
 })

 let butonter=document.createElement("button")
 let img1=document.createElement("img")
           img1.src="images/remove.png";
           img1.alt="mon image";
            img1.style.width="25px"
           butonter.appendChild(img1)
           butonter.classList.add("terminer")
        butonter.addEventListener("click", (event) => {
    event.stopPropagation();
            t.termine = true;
    champ.value = "";
    miseajour(); // actualise l'affichage
});
         if (t.termine) {
        li.classList.add("terminee");  
    }
     li.appendChild(btnsuprime)
     li.appendChild(butonter)
     list.appendChild(li)

    }
    localStorage.setItem("taches", JSON.stringify(taches));
// permet d'afficher le score et le mettre à jour
     let compteur = document.getElementById("compteur");
    let nb = taches.filter(t => !t.termine).length;
    if (nb === 0) {
        compteur.innerText = "Aucun souhait restant";
    } else if (nb === 1) {
        compteur.innerText = "1 souhait restant";
    } else {
        compteur.innerText = `${nb} souhaits restants`;
    }
}
miseajour();
// pour ajouter un élément
let buton = document.getElementById("ajouter")
buton.addEventListener("click", (event) => {
    event.preventDefault();
    if (champ.value !== "") {
        taches.push({ texte: champ.value.trim(), termine: false });
        champ.value = "";
        miseajour();
    }; 

});
// pour vider les taches
let boutonVider = document.getElementById("vider");
boutonVider.addEventListener("click", (event) => {
    event.preventDefault();
    if (taches.length > 0) {
        if (confirm("Voulez-vous vraiment supprimer toutes les tâches ?")) {
            taches = [];      // vide le tableau
            miseajour();      // met à jour la liste et le compteur
        }
    } else {
        alert("La liste est déjà vide !");
    }
});





