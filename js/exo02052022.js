// var nom, jour;
// var sert à donner un nom à la variable - nom est la valeur
// nom = "Eddy";
// nom est la variable et eddy est la valeur
// alert(nom);
// console.log(nom);
// jour = "lundi";

// var jour = prompt("on est quel jour ?", jour);
// // prompt = avec formulaire
// document.write(jour + monExercice + "<br/>");
// // permet d ecrire la valeur de la variable sur la page html

// var monExercice = "je suis en train de faire mon exercice";
// // initialiser une variable
// document.write(monExercice);
// prompt("j'ai reussi mon exercice");

// var monChiffre = 2022;
// // -- 2. Un nombre entier (integer ou int)
// document.write(typeof monChiffre);

// var monChiffreDecimal = 3.14;
// // -- 3. Un nombre décimal (float)
// document.write(typeof monChiffreDecimal);

// STRING => FLOAT
var maChainedeCaractere = "57.12";
// document.write(typeof maChainedeCaractere);
var converti = parseFloat("maChainedeCaractere");
// document.write(typeof converti);

// NUMBER => STRING
var maChainedeCaractere2 = parseInt(converti);
console.log(maChainedeCaractere2);
// document.write(typeof maChainedeCaractere2);
// document.write(maChainedeCaractere2);

var maChainedeCaractere3 = maChainedeCaractere2.toString();
console.log(maChainedeCaractere3);
console.log(typeof maChainedeCaractere3);
// document.write(maChainedeCaractere3);

// CONCATENATION
document.write(
  maChainedeCaractere +
    "-" +
    converti +
    "-" +
    maChainedeCaractere2 +
    "-" +
    maChainedeCaractere3
);
