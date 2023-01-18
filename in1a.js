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
  //Knappen ska öppna en promt...
  let mess = prompt("Skriv något!");
  console.log(mess);
  let fullMess = "";

  //Vi for-loopar 10ggr 
  for (let i = 0; i < 10; i++) {
    fullMess = fullMess + " " + mess;
    console.log(fullMess);
  }
  //Vi presenterar resultatet i ett alertfönster
  alert(fullMess);

} // Slut! :)

// Uppgift 1a8 här:
function buttonAction8() {
  //Kode här!
  //Vi letar upp bonusknappen i DOM'en...
  let bonusKnapp = document.getElementById("hiddenButton").style.visibility;

  if (bonusKnapp == "visible") {
    document.getElementById("hiddenButton").style.visibility = "hidden";
  } else {
    document.getElementById("hiddenButton").style.visibility = "visible";
}


} //Slut!

// Sista proceduren: Placera data i en tabell som byggs upp
function buttonAction9() {
  //Kode här
  //Lagrar innehållet från textrutan.
  let inputText = document.getElementById("arrayInput").value;
  console.log(inputText);
  //Lagrar och splittar texten i en array med hjälp av kommatecken
  let cellArray = inputText.split(",");
  console.log(cellArray);
  //Vi skapar en variabel som lagrar html-taggen table
  let tableElem = document.createElement("table");
  //let variabler för tabellen
  let rowElem;
  let cellElem;
  let cellContent;
  //Vi använder en for-loop för att loopa igenom cellArray
  for (let i = 0; i < cellArray.length; i++) {

    if (i % 7 === 0) {
      //Skapa en table-row
      rowElem = document.createElement("tr");
      //Lägger vi till en ny rad i tabellen
      tableElem.appendChild(rowElem);
    }
    //Skapar variabel för cellElem
    cellElem = document.createElement("td");

    //För varje iteration skapas en ny cell med innehåll.
    //Här var felet!!!!!
    cellContent = document.createTextNode(cellArray[i]);
    //Lägger till text i cellen
    cellElem.appendChild(cellContent);
    //Lägger till cellen i raden
    rowElem.appendChild(cellElem);
  }//Slut på for-loop

  //Hittar och infogar tabellen i diven med id = "tableContainer"
  let tableContainer = document.getElementById("tableContainer");
  
  //Vi ska rensa bordet på gammal data
  let oldElem = tableContainer.childNodes;
  for (let i = 0; i < oldElem.length; i++) {
      //Vi tar bor gamla noder i tableContainer
    tableContainer.removeChild(oldElem[i]);
    //När vi har itererat igenom de gamla childNodes så är datan rensad.
  }
  tableContainer.appendChild(tableElem);

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
