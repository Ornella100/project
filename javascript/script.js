
const listemots = ["cachalot", "pétunia", "serviette"]
const listephrase = ["Pas de panique ", "La vie, l’univers et le reste", "Merci pour le poisson"]
 let score = 0
let choix = prompt("veuillez choisie :un mot ou une phrase")
while (choix !== "mot" && choix !== "phrase") {
    choix = prompt("veillez choisie :un mot ou une phrase ")
}
if (choix === "mot") {
for (let i = 0; i < listemots.length; i++) {
    let motutilisateur = prompt("Entrer un mot " + listemots[i])
    if (motutilisateur === listemots[i]) {
        score++
    }
}
console.log("votre score est " + score + "sur " + listemots.length)

} else {
 for (let i = 0; i < listephrase.length; i++) {
  let motutilisateur = prompt("Entrer un mot " + listephrase[i])
 if (motutilisateur === listephrase[i]) {
            score++
     }
 }
 console.log("votre score est " + score)
}
