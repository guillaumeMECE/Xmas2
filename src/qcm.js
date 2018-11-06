$(document).ready(function() {
   var numQuestion = 1; //to know wich question we are
   //init of tab question
   let tabQ = new TabQuestion(); //creation of the class
   tabQ.initTabQ(); //call fction to initiate
   let gestQCM = new CreateQuestion();

   //add question
   $("#btn1").click(function() {

      if (gestQCM.tstOneCheck(numQuestion)) {
         if (numQuestion < tabQ.getLenght()) {
            numQuestion++;
            gestQCM.add(numQuestion, tabQ); //add in jquery a new question
            if (numQuestion == tabQ.getLenght()) { //change next btn to validation one
               $("#btn1").val("Validation");
            }
         } else {
            //console.log("END");
            calcul();
         }
      } else {
         alert("You have to check an answer !");
      }
   });
});

function calcul() {
   nbrQ = 10; //number of question
   nom = new Array();
   nomLength = new Array();
   point = 0;
   pointavant = 0;
   isalert = false;
   for (n = 1; n < (nbrQ + 1); n++) {
      nom[n] = document.getElementsByName("Q" + n);
      nomLength[n] = nom[n].length;
      pointavant = point;
      rischeck = 0; // radiobtn is check if 2 then no if 0 both
      for (q = 0; q <= (nomLength[n] - 1); q++) {
         if (nom[n][q].checked == 1) {
            point = point + eval(nom[n][q].value);
         } else {
            point = point;
            rischeck++;
         }
      }
      if (pointavant == point) {
         document.getElementById("icoQ" + n).innerHTML = "cancel";
         document.getElementById("icoQ" + n).style.color = 'red';
      } else {
         document.getElementById("icoQ" + n).innerHTML = "check_circle";
         document.getElementById("icoQ" + n).style.color = 'green';
      }
      document.getElementById("icoQ" + n).style.fontSize = "2vw";
      if (rischeck == 2) {
         isalert = true;
         document.getElementById("icoQ" + n).innerHTML = "error";
         document.getElementById("icoQ" + n).style.color = 'red';
         document.getElementById("icoQ" + n).style.fontSize = "3vw";
      }

   }
   if (isalert == true) {
      alert("You have to check all the boxes !");
   } else {

      //document.form_xmas.txtNb.value = point;
      //document.getElementById("icoQ1").innerHTML = "done";
      document.getElementById("txtresult").innerHTML = "You have " + point + " good answers and " + (nbrQ - point) + " wrong answers";
      document.getElementById('cardresult').style.visibility = 'visible';

      //pie print
      var options = {
         title: {
            text: ""
         },
         /*title: {
         	text: "QCM Result"
         },*/
         data: [{
            type: "pie",
            startAngle: 45,
            showInLegend: "false",
            legendText: "{label}",
            indexLabel: "{label} : {y}",
            yValueFormatString: "#,##0.#" % "",
            dataPoints: [{
                  label: "Correct",
                  y: point
               }, // (point*100/nbrQ) },
               {
                  label: "Wrong",
                  y: (nbrQ - point)
               } //((nbrQ - point)*100/nbrQ) }
            ]
         }]
      };
      $("#chartContainer").CanvasJSChart(options);
   }
}
