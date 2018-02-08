function getRandomInt(max) {
  let randomInt = Math.floor(Math.random() * Math.floor(max));
  return randomInt;
}

function start() {
  /* selection des balises html dans des variables */
	let selection = document.querySelector("#selectorField");
	let conteneur = document.querySelector("#result");
  let secondConteneur = document.querySelector("#whoWin");
  let paragrapheContaineur = document.querySelector("#paragraphe")
  let paragrapheVictoire = document.querySelector("#AnnonceDeVictoire");
  let containeurCompteur = document.querySelector("#compteur");


  /* Récuperation des valeurs des nombres random et choisis */
  let randomInt = getRandomInt(10);
  let inputNumber = selection.value;

  /* Insertion des nombres dans leurs paragraphes */
	let textParagraphe = document.createTextNode(randomInt);
	paragraphe.appendChild(textParagraphe);
	conteneur.appendChild(paragraphe);

  let defaite = 0;
  let victoire = 0;
  let matchNul = 0;

  /* Comparaison des nombres at affichage du vainqueur */
  if(randomInt == inputNumber) {
    let contenuVictoire = document.createTextNode(" Le nombre choisi est \
      égal au nombre généré. Vous avez gagné !");
      paragrapheVictoire.appendChild(contenuVictoire);
      secondConteneur.appendChild(paragrapheVictoire);
      console.log(randomInt);
      console.log(inputNumber);
      matchNul+= 1;
    }
  else if(randomInt > inputNumber) {
    let contenuVictoire = document.createTextNode(" Le nombre choisi est \
        inferieur au nombre généré. Vous avez gagné !");
        paragrapheVictoire.appendChild(contenuVictoire);
        secondConteneur.appendChild(paragrapheVictoire);
        victoire +=1;
      }
  else if(randomInt < inputNumber){
    let contenuVictoire = document.createTextNode(" Le nombre choisi est \
      supérieur au nombre généré. Vous avez perdu !");
      paragrapheVictoire.appendChild(contenuVictoire);
      secondConteneur.appendChild(paragrapheVictoire);
      defaite += 1;
    }
  let containeurVictoire = document.querySelector("#compteurVictoire");
  let containeurDefaite = document.querySelector("#compteurDefaite");
  let containeurMatchNul = document.querySelector("#compteurMatchNul");
  containeurCompteur.appendChild(containeurVictoire);
  containeurCompteur.appendChild(containeurDefaite);
  containeurCompteur.appendChild(containeurMatchNul);
}
