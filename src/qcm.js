function calcul() {
   nbrQ = 10;
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
