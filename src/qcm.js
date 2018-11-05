/*<p><b>1.</b> Father Christmas and Santa Claus are two names for the man who bring children's presents at Christmas.</p>
<label class="containerRadio">True
   <input type="radio" name="Q1" value="1">
   <span class="checkmark"></span>
</label>
<label class="containerRadio">False
   <input type="radio" name="Q1" value="0">
   <span class="checkmark"></span>
</label>
<i class="material-icons" id="icoQ1" style="font-size: 2vw;color:green;"></i>*/
var numQuestion = 1;//to know wich question we are
$(document).ready(function() {
   $("#btn1").click(function() {
      numQuestion++;
      /*var strContainer = "#questionContainer" + numQuestion;
      var strQ = "Q" + numQuestion;
      var strQT = "QT" + numQuestion;
      var strQF = "QF" + numQuestion;
      var strQTid = "#QT" + numQuestion;
      var strQFid = "#QF" + numQuestion;
      var strIco = "icoQ" + numQuestion;*/
      $("#questionContainer").append("<p><b>"+numQuestion+". </b> The day before Christmas Day is called boxing Day.</p>");
      //True
      $("<label></label>", {
         "class": "containerRadio",
         "id" : String("QT" + numQuestion)
      }).appendTo("#questionContainer");
      $( String("#QT" + numQuestion)).append("True");
      $("<input></input>", {
         "type": "radio",
         "name" :  String("Q" + numQuestion),
         "value" : "0"
      }).appendTo( String("#QT" + numQuestion));
      $("<span></span>", {
         "class": "checkmark"
      }).appendTo( String("#QT" + numQuestion));

      //False
      $("<label></label>", {
         "class": "containerRadio",
         "id" :  String("QF" + numQuestion)
      }).appendTo("#questionContainer");
      $( String("#QF" + numQuestion)).append("False");
      $("<input></input>", {
         "type": "radio",
         "name" : String("Q" + numQuestion),
         "value" : "1"
      }).appendTo( String("#QF" + numQuestion));
      $("<span></span>", {
         "class": "checkmark"
      }).appendTo( String("#QF" + numQuestion));
      //ico --> <i class="material-icons" id="icoQ1" style="font-size: 2vw;color:green;"></i>
      $("<i></i>", {
         "class": "material-icons",
         "id" :  String("icoQ" + numQuestion)
      }).appendTo("#questionContainer").css({"font-size": "2vw", "color": "green"});
   });
});

/*
$(document).ready(function() {
   $("#btn1").click(function() {
      numQuestion++;
      var strContainer = "#questionContainer" + numQuestion;
      var strQ = "Q" + numQuestion;
      var strQT = "QT" + numQuestion;
      var strQF = "QF" + numQuestion;
      var strQTid = "#QT" + numQuestion;
      var strQFid = "#QF" + numQuestion;
      var strIco = "icoQ" + numQuestion;
      $(strContainer).append("<p><b>2. </b> The day before Christmas Day is called boxing Day.</p>");
      $("<label></label>", {
         "class": "containerRadio",
         "id" : strQT
      }).appendTo(strContainer);
      $(strQTid).append("True");
      $("<input></input>", {
         "type": "radio",
         "name" : strQ,
         "value" : "0"
      }).appendTo(strQTid);
      $("<span></span>", {
         "class": "checkmark"
      }).appendTo(strQTid);
      //False
      $("<label></label>", {
         "class": "containerRadio",
         "id" : strQF
      }).appendTo(strContainer);
      $(strQFid).append("False");
      $("<input></input>", {
         "type": "radio",
         "name" :strQ,
         "value" : "1"
      }).appendTo(strQFid);
      $("<span></span>", {
         "class": "checkmark"
      }).appendTo(strQFid);
      //ico --> <i class="material-icons" id="icoQ1" style="font-size: 2vw;color:green;"></i>
      $("<i></i>", {
         "class": "material-icons",
         "id" : strIco
      }).appendTo(strContainer).css({"font-size": "2vw", "color": "green"});
   });
});*/




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
      rischeck = 0;
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

   }
}
