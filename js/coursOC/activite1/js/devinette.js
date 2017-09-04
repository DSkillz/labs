/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var input = 0;
var i = 0;
var count = 0;

while (input != solution) {
  var input = Number(prompt("Entrez le nombre à deviner (entre 0 et 100): "));
  i++;
  count = 6 - i;

  if (input < solution) {
    console.log("Plus grand ! \nReste " +  count + " essais !");
  } else if (input > solution) {
    console.log("Plus petit ! \nReste " +  count + " essais !");
  } else {
    console.log("Gagné !µ");
  }

  if (i == 6) {
    console.log("Perdu !");
    break;
  }
}
