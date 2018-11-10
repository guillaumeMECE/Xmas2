$(document).ready(function() {
   var numQuestion = 1; // to know wich question we are

   // init of tab question
   let tabQ = new TabQuestion(); // creation of the class
   tabQ.initTabQ(); // call fction to initiate
   let gestQCM = new CreateQuestion();

   // add question
   $("#btn1").click(function() {

      if (gestQCM.tstOneCheck(numQuestion)) {
         if (numQuestion < tabQ.getLenght()) {
            numQuestion++; // increment question statut
            gestQCM.add(numQuestion, tabQ); // add in jquery a new question
            if (numQuestion == tabQ.getLenght()) { //change next btn to validation one
               $("#btn1").val("Validation"); //change txt from next to validation if it's last question

            }
            $(String('#QT' + numQuestion)).animatescroll({
               padding: 300
            }); // auto scroll to the next question (jquery plugin)
         } else {
            calcul(); //calculate results
            $(String('#chartContainer')).animatescroll({
               padding: 300
            }); // auto scroll to result card
         }
      } else {
         alert("You have to check an answer !"); // alert to check an answer to the user
      }
   });
});

function calcul() {
   nbrQ = 10; // number of question
   nom = new Array(); // array for questions
   nomLength = new Array(); // array for true false each question
   point = 0; // score
   pointavant = 0; //to know if good answer or bad one
   isalert = false; // bool to know if everything is check
   for (n = 1; n < (nbrQ + 1); n++) { // to navigate in every question
      nom[n] = document.getElementsByName("Q" + n); // get the name of the question
      nomLength[n] = nom[n].length;
      pointavant = point;
      rischeck = 0; // radiobtn is check if 2 then no if 0 both
      for (q = 0; q <= (nomLength[n] - 1); q++) {
         if (nom[n][q].checked == 1) { // if something is check
            point = point + eval(nom[n][q].value); // add the value of the check answer 0 or 1
         } else { // if nothing is check
            point = point; // point don't move
            rischeck++; // radiobtn is not check so +1
         }
      }
      if (pointavant == point) { // case : wrong answer
         document.getElementById("icoQ" + n).innerHTML = "cancel";
         document.getElementById("icoQ" + n).style.color = 'red';
      } else { // case good answer
         document.getElementById("icoQ" + n).innerHTML = "check_circle";
         document.getElementById("icoQ" + n).style.color = 'green';
      }
      document.getElementById("icoQ" + n).style.fontSize = "2vw";
      if (rischeck == 2) { // case : nothing is check
         isalert = true; // tell to do an alert
         document.getElementById("icoQ" + n).innerHTML = "error";
         document.getElementById("icoQ" + n).style.color = 'red';
         document.getElementById("icoQ" + n).style.fontSize = "3vw";
      }

   }
   if (isalert == true) { // alert the user to check all
      alert("You have to check all the boxes !");
   } else { // print result in the card result
      document.getElementById("txtresult").innerHTML = "You have " + point + " good answers and " + (nbrQ - point) + " wrong answers";
      $("#cardresult").slideDown(); // animation to print results

      //pie charts config
      var options = {
         title: {
            text: ""
         },
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
               },
               {
                  label: "Wrong",
                  y: (nbrQ - point)
               }
            ]
         }]
      };
      $("#chartContainer").CanvasJSChart(options); // pie chart print
   }
}
