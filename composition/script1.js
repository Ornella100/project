let contactsactu=null
let contacts=JSON.parse(localStorage.getItem("contacts") || "[]")
let ajouter=document.getElementById("ajouter")



ajouter.addEventListener("click",function(){
const nom = document.getElementById("nom").value.trim();
  const prenom = document.getElementById("prenom").value.trim();
  const tel = document.getElementById("tel").value.trim();
  const email = document.getElementById("email").value.trim();
  if(!nom || !prenom || !tel || !email){
    alert("veuillez remplir tout les champ")
    return;
  } 
  let contact=document.createElement("div")
  contact.classList.add("contact");
  contact.innerHTML=`${nom} ${prenom}- ${tel} -${email}`
   contacts.push({ nom, prenom, tel, email });

contact.dataset.nom=nom;
contact.dataset.prenom=prenom;
contact.dataset.tel=tel;
contact.dataset.email=email;

contact.addEventListener("click",function(){
  contactsactu=contact;
document.getElementById("nom").value=contact.dataset.nom;
document.getElementById("prenom").value=contact.dataset.prenom;
document.getElementById("tel").value=contact.dataset.tel;
document.getElementById("email").value=contact.dataset.email;
 
})
let zone=document.querySelector(".zone")
zone.appendChild(contact)

document.getElementById("nom").value = "";
  document.getElementById("prenom").value = "";
  document.getElementById("tel").value = "";
  document.getElementById("email").value = "";
   localStorage.setItem("contacts",JSON.stringify(contacts))
})
let modifier=document.getElementById("modifier")
modifier.addEventListener("click",function(event){
  event.preventDefault();
  if(!contactsactu){
    alert("Veuillez selectionner un contact")
    return;
  }
  contactsactu.innerHTML=`${document.getElementById("nom").value.trim()} ${document.getElementById("prenom").value.trim()}-${document.getElementById("tel").value.trim()}-${document.getElementById("email").value.trim()}`

  contacts[index] = { nom, prenom, tel, email };
  localStorage.setItem("contacts",JSON.stringify(contacts))
})
let supprimer=document.querySelector("#suprimer")
supprimer.addEventListener("click",function(){
  if(!contactsactu){
alert("Veuillez selectionner un contact")
return  
  }
  contactsactu.remove();
   contacts.splice(index, 1);
   localStorage.setItem("contacts",JSON.stringify(contacts))
})

  


