/*ESERCIZIO:
Creare una griglia 6x6, ad ogni click parte una richiesta AJAX
che prende un numero random da 0 a 9.

Se è <= 5 il quadrato diventa giallo,
se è > di 5 il quadrato diventa verde.

Il numero ottenuto appare al centro del quadrato.*/


$(document).ready(function(){

  // salvo l’indirizzo del server da chiamare in una variabile
  var apiNumRandom = "https://flynn.boolean.careers/exercises/api/random/int";


  //funzione che ad ogni click fa partire una chiamata ajax
  $(".square").click(
    function() {

      var thisSquare = this;

      //richiedo via ajax all'API un numero random
      $.ajax(
        {
          url : apiNumRandom,
          method : "GET",
          success : function(data) {
            var numApi = data.response;
            console.log("il num random api è: " , numApi);

            // se num<=5 il quadrato cliccato è giallo, invece se num>5 è verde
            if (numApi <= 5) {
              $(thisSquare).addClass("yellow number");
              //faccio apparire num api al centro del quadrato
              $(thisSquare).text(numApi);
              /*cliccando più volte sullo stesso quadrato,
              cambia comunque il colore in base al numero random*/
              $(thisSquare).removeClass("green");
            } else if (numApi > 5) {
              $(thisSquare).addClass("green number");
              $(thisSquare).text(numApi);
              $(thisSquare).removeClass("yellow");
            }
          },
          error : function() {

          }
        }
      );
    }
  );




});
