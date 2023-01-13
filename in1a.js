let globalVariabel = "null";

// Uppgift 1a1:
function buttonAction1() {

  //Kod här!
  //Hämta datum/tid och spara den i variabeln myDate.
  let myDate = new Date();
  console.log(myDate);

  //Vi behöver ett meddelande.
  let fras = "Hejsan!\n Idag är det: ";
  console.log(fras);

  console.log(fras + myDate);
  alert(fras + myDate);

} // Slut!

// Uppgift 1a2 här:
function buttonAction2() {
  //Kode här
  //Spara ett värde från prompten i globalVariabel som användare väljer.
  globalVariabel = prompt("Skriv något!", "");
  console.log(globalVariabel);
  //Skapar en ny lokal variabel som vi använder toUpperCase().
  let lokalVariabel = globalVariabel.toUpperCase();
  console.log(lokalVariabel);
  //Vi visar lokal variabel i en alet().
  alert(lokalVariabel);

} // Slut!

// Uppgift 1a3 här:
function buttonAction3() {
  //Kode här!
  //Vi letar upp id = result3 i DOM'en.
  document.getElementById("result3").innerHTML = globalVariabel;
} // Slut!

// Uppgift 1a4 här:
function buttonAction4() {
  //Kode här!
  //1:Startar tidtagningen
  let start = new Date();
  console.log(start);
  //3: Kör stoppfunktionen
  let stopFunction = function () {
    //4: Sparar stoptid
    let stop = new Date();
    //5: Räkna ut tiden
    let result = stop - start;
    //6: Lägger till töntig fras.
    let fras = " sekunder!!! WOW!!! Det var snabbt. :)";
    //7: Skriver ut resultatet och töntfrasen i ett alertFönster
    alert(result / 1000 + fras);
    //8: Sätter tillbaka eventListener till att anropa buttonAction4.
    document.getElementsByName("button4")[0].onclick = buttonAction4;
  }
  //2: Sätter om eventListneren till att anropa stopFunction
  document.getElementsByName("button4")[0].onclick = stopFunction;
} // Slut!

// Uppgift 1a5 här:
function buttonAction5() {
  //Kode här!
  //1: Vi letar upp våra inputelement och lagrar dess värde i variablerna tal1 och tal2
  let tal1 = document.getElementById("number1").value;
  let tal2 = document.getElementById("number2").value;
  console.log(tal1);
  console.log(tal2);
  //Vi kollar så att varsig tal1 eller tal2 är tomma.
  if (tal1 == "" || tal2 == "") {
    alert("Du måste fylla i båda fälten för att beräkna något här.");
  } else if (isNaN(tal1) || isNaN(tal2)) {
    //Detta kollar att det är ett nummer som fylls i våra inputfält.
    alert("Här funkar bara nummer! \n Om ni använder decimaltal så använd punkt... ej komma,,,");
  } else if (tal1 >= 1000 || tal2 >= 1000 || tal1 <= 0 || tal2 <= 0) {
    alert("Sorry!!! \n Denna trötta gamla dator hanterar bara tal över 0 eller under 1000");
  } else {
     //2: Vi beräknar tal1 och tal2
      let result = tal1 * tal2;
      console.log("resultatet är: " + result);
      document.getElementById("result5").innerHTML = result;
  }


  //3: Vi nollställer våra inputelement
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";

} // Slut!

// Uppgift 1a6 här:
function buttonAction6() {
  //Kode här!
  //Letar upp och lagrar textvärdet i textfältet.
  let ord = document.getElementById("textInput").value;
  console.log(ord);
  //Lagra antal mellanslag
  let minArray = ord.split(" ");
  //Räknar och lagra antalet mellanslag.
  let antal = minArray.length;
  console.log(antal);
  //Skickar värdet i variabeln 'antal' till span-elementet id='wordCount'
  document.getElementById("wordCount").innerHTML = antal;
  //Vi tömmer värdena i vårt textFält.
  document.getElementById("textInput").value = "";
} // Slut.

// Uppgift 1a7 här:
function buttonAction7() {
  //Kode här!
} // Slut! :)

// Uppgift 1a8 här:
function buttonAction8() {
  //Kode här!
} //Slut!

// Sista proceduren: Placera data i en tabell som byggs upp
function buttonAction9() {
  //Kode här
} //Slut! Nu kan ni kolla över eran kod och lämna in. Gott jobbat!

/*
 * Detta är en färdig procedur (funktion) som kopplar ihop händelsehanteraren
 * för alla knappar med de funktioner som ni har till uppgift att göra
 * NI SKALL INTE RÖRA NÅGOT HÄR:
 */

function onDoneLoadingHtml() {
  document.getElementsByName("button1")[0].onclick = buttonAction1;
  document.getElementsByName("button2")[0].onclick = buttonAction2;
  document.getElementsByName("button3")[0].onclick = buttonAction3;
  document.getElementsByName("button4")[0].onclick = buttonAction4;
  document.getElementsByName("button5")[0].onclick = buttonAction5;
  document.getElementsByName("button6")[0].onclick = buttonAction6;
  document.getElementsByName("button7")[0].onclick = buttonAction7;
  document.getElementsByName("button8")[0].onclick = buttonAction8;
  document.getElementsByName("button9")[0].onclick = buttonAction9;

  document.getElementById("hiddenButton").onclick = function () {
    alert("Neeeej!, \n du startade precis...\nKaffekokaren!");
  };
  
}

/*
 * Anger att när webläsaren är klar med att läsa in html, css ska den
 * köra funktionen onDoneLoadingHtml
 */
window.onload = onDoneLoadingHtml;
