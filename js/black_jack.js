function getRandomInt(max) {
  let randomInt = Math.floor(Math.random() * Math.floor(max));
  return randomInt;
}

function start() {

	let selection = document.querySelector("#selectorField");
	let conteneur = document.querySelector("#result");
  let secondConteneur = document.querySelector("#whoWin");
  let paragrapheContaineur = document.querySelector("#paragraphe")
  let paragrapheVictoire = document.querySelector("#AnnonceDeVictoire");
  let randomInt = getRandomInt(10);
  let inputNumber = selection.value;
	let textParagraphe = document.createTextNode(randomInt);
	paragraphe.appendChild(textParagraphe);
	conteneur.appendChild(paragraphe);
  if(randomInt === inputNumber || randomInt >= inputNumber) {
    let contenuVictoire = document.createTextNode(" Le nombre choisi est \
      inferieur ou égal au nombre généré. Vous avez gagné !");
      paragrapheVictoire.appendChild(contenuVictoire);
      secondConteneur.appendChild(paragrapheVictoire);
    }
  else if (randomInt <= inputNumber){
    let contenuVictoire = document.createTextNode(" Le nombre choisi est \
      supérieur au nombre généré. Vous avez perdu !");
      paragrapheVictoire.appendChild(contenuVictoire);
      secondConteneur.appendChild(paragrapheVictoire);
    }

  }
