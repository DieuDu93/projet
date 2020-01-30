// Fonction qui change la couleur du bouton
function changeCouleur() {
  bouton = document.getElementById("b2");
  bouton.style.background = "red";
}

// Fonction qui additionne 2 nombres choisis
function ajoute() {
  nombre1 = document.getElementById("i1").value;
  nombre2 = document.getElementById("i2").value;
  document.getElementById("i3").value = parseInt(nombre1) + parseInt(nombre2);
}

// Fonction qui ........................................

function divise() {}

// Fonction qui cache le bouton
function cache() {
  span = document.getElementById("s1");
  span.style.visibility = "hidden";
}

// Fonction qui affiche un panneau
function affiche() {}
