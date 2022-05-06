// var j = prompt("Insérer votre prénom : ");
// la valeur c ce qu on tape dans la boite de dialogue
// while (j != "monNom") {
//   j = prompt("La valeur n'est pas correcte, Insérez votre prénom :");
// }
// document.write("<hr/><p>Votre prénom est :" + j + "</p>");

// mon exo
// var somme = prompt("Insèrer la somme : ");
// while (somme != 1000) {
//   somme = prompt("Insérer le montant : ");
// }
// document.write("<h/><p>Ma somme est :" + somme * 5 + "</p>");

// exo boucle for
// var tps = 0;
// for (var mesSous = 1000; mesSous < 2000; mesSous += 50) {
//   document.write("j'ajoute : " + "50€" + "&nbsp" + tps + mesSous + "</p>");
//   tps++;
// }

// exo while
// var mesThunes = 100;
// var tps = 0;
// while (mesThunes < 2000) {
//   mesThunes += 50;
//   tps++;
// }
// document.write("<h3>Sous sur mon compte : " + mesThunes + "</h3>" + "<br>");
// valeur finale sur mon compte
// document.write(
//   "<h3>Jusqu'à 2000€, il me faut :" + "&nbsp" + tps + "mois" + "&nbsp" + "</h3>"
// );
// valeur finale du temps par mois

// exo suivant
// var ageJeune = 18;
// var age = parseInt(promt("Votre âge SVP ?"));

// while (age >= 3 || age < 120) {
//   age = parseInt(prompt("Indiquez votre âge !!"));

//   if (age > 3 && age < ageJeune) {
//     alert("Allez sur un autre site");

//     document.location.href = "https://www.youtube.com/watch?v=qPOXvQD9O5E";
//   }
//   if (age >= ageJeune && age <= 120) {
//     alert("Bienvenue, vous êtes majeur");
//   }
// }

var jour = prompt("Quel jour sommes-nous ?");
switch(jour) {
    case "lundi":
        console.log ("Demain on est mardi");
        break;
        case "mardi"
}