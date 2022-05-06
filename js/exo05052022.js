// let nom = prompt("Fontaine");
// alert("welcome, vous vous appelez ?" + nom);

// var nom = prompt("votre nom");
// la valeur sera recupérer dans la boite de dialogue
// if (nom == 5) {
//   document.write(nom);
// }
// si la valeur est égale à 5 elle sera affiché sur la page
// l'accolade {} permet d'utiliser une autre fonction
// nom = parseInt(nom);
// parseInt (variable converti en Number)
// console.log(typeof nom);
// permet d'afficher le type de la valeur pour véfifier si la conversion a été effecuée

// var nombre = prompt("150");
// var nombreEntier = parseInt(nombre);
// var resultat = nombreEntier % 13;
// if (resultat === 0) {
//   document.write("le resultat est un multiple de 13");
// } else {
//   document.write("ce n'est pas un multiple de 13");
// }

// correction
// var nombre = prompt ("Entrez votre nombre : ");
// var nombreFloat = parseFloat (nombre);
// var result = nombreFloat%13;
// if (result === 0) {
// document.write (nombre + "est un multiple de 13");} else {
// document.write (nombre = "n'est pas un multiple de 13 et le résultat est :" + result);}
//
// mon exo =>
// var nombre = prompt("Lettre ou nombre");
// var nombre = parseInt(nombre);
// var result = nombre % 7;
// if (isNaN(result)) {
//   document.write(result + "c'est une chaîne de caractére");
// } else {
//   document.write(result + "ce n'est pas un multiple de 7");
// }

// var saisie = prompt("Entrez votre saisie : ");
// if (isNaN(saisie)) {
//   document.write(saisie + "est une chaine de caractère composée de chiffres");
// } else {
//   var finalResalt = saisie % 7;
//   if (finalResalt == 0) {
//     document.write(saisie + " est un multiple de 7");
//   } else {
//     document.write(
//       saisie +
//         "n'est pas un multiple de 7 et le résulta du modulo : " +
//         finalResalt
//     );
//   }
// }

// mon exercice
// var nombre = prompt("tapez");
// var nombre = parseInt(nombre);
// var nombre2 = 5;
// var resultat = nombre * nombre2;
// document.write(resultat + "<br>");
// document.write(resultat % 3);

// formule conversion celcuis en fahrenheit
// °F(°C x 1.8) + 32
// K = °C + 273.15

// mon exercice
// var temp = prompt("tapez la valeur de la température");
// var degres = parseFloat(temp);
// var fahrenheit = degres + 1.8 * 32;
// document.write(fahrenheit);

// mon exercice
// var nb1 = 25;
// var nb2 = "hotDog";
// var nb3;
// console.log("Chiffre1" + nb1);
// document.write("la valeur de nb1 est égale à" + "&nbsp" + nb1 + "<br>");
// document.write("la valeur de nb2 est égale à" + "&nbsp" + nb2 + "<br>");

// nb3 = nb1;
// nb1 = nb2;
// nb2 = nb3;

// document.write("la valeur de nb1 est égale à" + "&nbsp" + nb1 + "<br>");
// document.write("la valeur de nb2 est égale à" + "&nbsp" + nb2 + "<br>");

// boucle
// 1. initialise un compteur à partir de combien je compte (par défaut le compteur est la variable 'i')
// 2. la condition à vérifier qui doit donc être VRAIE (TRUE)
// 3. le 'pas' d'incrémentation (combien j'ajoute à chaque tour, généralement 1 donc i++)
// */
// for (var i = 1; i <= 10; i += 2) {
//   document.write("<p>Instruction exécutée : " + i + "</p>");
// }

// -- La boucle WHILE (tant que)
// très utilisée quand on ne connaît pas le nombre de tours de boucles à l'avance
// var j = 1;
// while (j <= 10) {
//   document.write("<hr /><p>Instruction exécutée : " + j + "</p>");
//   /* 50 lignes de code */
//   j += 2; // j = j + 1; OU j += 1;
// }

// for (var e = 5; e <= 15; e += 2) {
//   document.write("<p> Instruction exécutée : " + e + "</p>");
// }

// while
// var e = 3;
