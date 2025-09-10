const input = document.getElementById("texte");
const bouton = document.getElementById("verifier");
const resultat = document.getElementById("resultat");

function estPalindrome(chaine) {
  // 1. Mettre en minuscule et enlever les caractères non alphanumériques
  const nettoyee = chaine.toLowerCase().replace(/[^a-z0-9]/g, );
  
  // 2. Vérifier si la chaîne est égale à son inverse
  const inverse = nettoyee.split("").reverse().join("");
  return nettoyee===inverse;
}

bouton.addEventListener("click", () => {
  const valeur = input.value.trim();

  if (valeur === "") {
    resultat.textContent = "Veuillez entrer un texte.";
    resultat.style.color = "orange";
    return;
  }

  if (estPalindrome(valeur)) {
    resultat.textContent = `"${valeur}" est un palindrome ! `;
    resultat.style.color = "green";
    resultat.style.textAlign="center";
    input.value="";
  } else {
    resultat.textContent = `"${valeur}" n'est pas un palindrome.`;
    resultat.style.color = "blue";
    resultat.style.textAlign="center";
    input.value="";
  }
});
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    bouton.click(); // 
  }
});