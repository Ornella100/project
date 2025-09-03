const motapplication="espace";
let motutilisateur=prompt("Entrer un mot " +motapplication)
 if(motapplication===motutilisateur)
 {
 console.log("Bravo");
 }
else{
 console.log("Désolé vous n'avez pas trouvé")
 }
const listemots=["cachalot","pétunia","serviette"]
 let score=0
 for(i=0;i<listemots.length;i++){
let motutilisateur=prompt("Enter un mot "+listemots[i])
if(motutilisateur===listemots[i]){
    score++
}
 }