function getRandomInt(max) {
  let randomInt = Math.floor(Math.random() * Math.floor(max));
  return randomInt;
}

function start() {

  /* Recupere l'id du champ de selection du nombre */
  let selection = document.querySelector("#selectorField");

  /* Recupere les valeurs des deux nombres */
  let randomInt = getRandomInt(2);
  var inputNumber = selection.value;

  /* Recupere le div et le paragraphe ou est affiché le chiffre généré */
  let conteneur = document.querySelector("#result");
  let paragrapheContaineur = document.querySelector("#paragraphe");

  /* Recupere le div et le paragraphe ou est affiché la comparaison et l'annonce de victoire */
  let secondConteneur = document.querySelector("#whoWin");
  let paragrapheVictoire = document.querySelector("#AnnonceDeVictoire");

  /* Recupere le div et les paragraphes ou sont affichés les scores */
  let containeurCompteur = document.querySelector("#compteur");
  let containeurVictoire = document.querySelector("#compteurVictoire");
  let containeurDefaite = document.querySelector("#compteurDefaite");
  let containeurMatchNul = document.querySelector("#compteurMatchNul");
  let textContaineurVictoire = document.createTextNode("Nombre total de victoires");

  /* Insertion des nombres dans leurs paragraphes */
	let textParagraphe = document.createTextNode(randomInt);
	paragraphe.appendChild(textParagraphe);
	conteneur.appendChild(paragraphe);

  /* Comparaison des nombres at affichage du vainqueur */
  if(randomInt == inputNumber) {
    console.log(" Égalité !");
    scoreEgalite = document.querySelector("#scoreEgalite");
      scoreEgalite.value ++;
    }
  else if(randomInt > inputNumber) {
    console.log(" Le nombre choisi est inferieur au nombre généré. Vous avez gagné !");
    scoreVictoire = document.querySelector("#scoreVictoire");
    scoreVictoire.value++;
      }
  else if(randomInt < inputNumber){
    console.log(" Le nombre choisi est supérieur au nombre généré. Vous avez perdu !");
    scoreDefaite = document.querySelector("#scoreDefaite");
    scoreDefaite.value++;
    }
}

function stop() {

  selectorField.value = 0;
  scoreEgalite.value = 0;
  scoreVictoire.value = 0;
  scoreDefaite.value = 0;
}
