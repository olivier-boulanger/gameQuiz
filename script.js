// --------------------------- Déclaration  de variables
quest = document.getElementById("quest"); // div ou sera affiché les questions
situation = document.getElementById("situation"); // div pour le nombre de points
contain = document.getElementById("contain");
var points = 0; // initialisation du nombre de points
var random = 4; // initialisation du nombre initial aléatoire
var tab2;
var testy = 0;
var nbresQuest = 0;

function getRandomInt(max) { // méthode pour générer un nombre aléatoire entre 0 et max
    return Math.floor(Math.random() * Math.floor(max));
}
// ----------------------  onclick sur le choix du theme 
function question(index) {
    document.getElementById(index).className = "none";
    situation.innerHTML = "";
    var choix = 1;
    h3 = document.createElement("h3"); // creation d'un h3
    if (index == 1) {
        h3.innerHTML = "Quel est le meilleur buteur de l'Europa League ?"; // attribution du texte au h3
        tab = ["Huntelaar", "Falcao", "Larsson", "Aduriz"];
        tab2 = ["Huntelaar", "Falcao", "Larsson", "Aduriz"];
    }
    else if (index == 2) {
        h3.innerHTML = "Lequel de ces films est le premier Pixar ?";
        tab = ["1001 pattes", "Le monde de Nemo", "Toy Story", "Cars"];
        tab2 = ["1001 pattes", "Le monde de Nemo", "Toy Story", "Cars"];
    }
    else if (index == 3) {
        h3.innerHTML = "A quoi correspond le symbome chimique K dans le tableau périodique des éléments ?";
        tab = ["Thallium", "Cesium", "Potassium", "Azote"];
        tab2 = ["Thallium", "Cesium", "Potassium", "Azote"];
    }
    else if (index == 4) {
        h3.innerHTML = "Dans quel océan baigne l'île de Paques ?";
        tab = ["Indien", "Atlantique", "Pacifique", "Austral"];
        tab2 = ["Indien", "Atlantique", "Pacifique", "Austral"];
    }
    else if (index == 5) {
        h3.innerHTML = "En quelle année a été assassinné J.F.Kennedy ?";
        tab = ["1961", "1958", "1963", "1964"];
        tab2 = ["1961", "1958", "1963", "1964"];
    }
    else {
        h3.innerHTML = "Qui a peint la chapelle Sixtine ?";
        tab = ["Rembrandt", "De Vinci", "Michel-Ange", "Botticelli"];
        tab2 = ["Rembrandt", "De Vinci", "Michel-Ange", "Botticelli"];
    }
    quest.appendChild(h3); // le titre h3 est rattaché à la div quest

    // ----------------- affichage aléatoire des questions
    do {
        contain.className = "none";
        para = document.createElement("p"); // creation d'un paragraphe
        jindex = getRandomInt(random);
        if (tab2[jindex] == tab[2]) {
            testy = 3;
        } else {
            testy = 0;
        }
        func = para.setAttribute('onclick', "goodR(" + testy + ")"); // attribution d'une fonction onclick à chaque paragraphe
        quest.appendChild(para); // les paragraphes sont rattachés à la div quest
        rep = para.innerHTML = "Choix N° " + choix + " : " + tab2[jindex]; // attribution du texte a chaque paragraphe
        tab2.splice(jindex, 1);
        choix++;
        random--;
    } while (choix < 5)
}

function goodR(i) {
    if (i == 3) {
        alert("Bien Joué");
        points++;
        contain.className = "block";
        quest.innerHTML = "";
        situation.innerHTML = "Vous avez " + points + " points !";
        random = 4;
        nbresQuest++;
        if (nbresQuest == 6) {
            endGame();
        }
    }
    else {
        alert("Mauvaise réponse");
        contain.className = "block";
        quest.innerHTML = "";
        situation.innerHTML = "Vous avez " + points + " points !";
        random = 4;
        nbresQuest++;
        if (nbresQuest == 6) {
            endGame();
        }
    }
}

function endGame() {
    situation.innerHTML = "FIN DE LA PARTIE ! VOUS AVEZ " + points + "POINTS";
    situation.style ="color:red";
}

