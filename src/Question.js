class CreateQuestion {
   constructor() {

   }

   add(numQuestion, tabQ) { // add a new question
      $("#questionContainer").append("<p><b>" + numQuestion + ". </b>" + tabQ.getTxtIndex(numQuestion) + "</p>");

      // True
      $("<label></label>", { // label that contains true radiobtn
         "class": "containerRadio",
         "id": String("QT" + numQuestion)
      }).appendTo("#questionContainer");
      $(String("#QT" + numQuestion)).append("True");
      $("<input></input>", { // radiobtn
         "type": "radio",
         "name": String("Q" + numQuestion),
         "value": tabQ.getTrueIndex(numQuestion) // "0"
      }).appendTo(String("#QT" + numQuestion));
      $("<span></span>", {
         "class": "checkmark"
      }).appendTo(String("#QT" + numQuestion));

      // False
      $("<label></label>", {  // label that contains true radiobtn
         "class": "containerRadio",
         "id": String("QF" + numQuestion)
      }).appendTo("#questionContainer");
      $(String("#QF" + numQuestion)).append("False");
      $("<input></input>", { // radiobtn
         "type": "radio",
         "name": String("Q" + numQuestion),
         "value": tabQ.getFalseIndex(numQuestion) // "1"
      }).appendTo(String("#QF" + numQuestion));
      $("<span></span>", {
         "class": "checkmark"
      }).appendTo(String("#QF" + numQuestion));
      $("<i></i>", { // icon
         "class": "material-icons",
         "id": String("icoQ" + numQuestion)
      }).appendTo("#questionContainer").css({ // css for the icon
         "font-size": "2vw",
         "color": "green"
      });
   }

   tstOneCheck(n) { // tst if good answer
      var nom = new Array();
      nom = document.getElementsByName("Q" + n);
      var nomLength = nom.length;
      var radioIsNotCheck = 0; // radiobtn is check if 2 then no if 0 both
      for (var q = 0; q <= (nomLength - 1); q++) {
         if (nom[q].checked != 1) {
            radioIsNotCheck++;
         }
      }
      if (radioIsNotCheck == 2 || radioIsNotCheck == 0) { // if no check or both check
         return false;
      } else { // if radioIsNotCheck = 1 so continue
         return true;
      }
   }
}

class QuestionClass { // quesion class with the txt and results
   constructor(txt, answer) {
      this.txt = txt; // txt of the question
      if (answer == "true") { // 0 it's true 1 it's false
         this.true = 1;
         this.false = 0;
      } else if (answer == "false") {
         this.true = 0;
         this.false = 1;
      }
   }

   // getter
   getTxt() {
      return this.txt;
   }
   getTrue() {
      return this.true;
   }
   getFalse() {
      return this.false;
   }
}

class TabQuestion {
   constructor() {
      this.tab = []; // tab that contains question
   }

   initTabQ() { // init of question and answers
      this.add("Father Christmas and Santa Claus are two names for the man who bring children's presents at Christmas.", "true");
      this.add("The day before Christmas Day is called boxing Day.", "false");
      this.add("Families have a Christmas tree at Christmas time. It's a small pine tree. They put lights and decorations on it.", "true");
      this.add("Father Christmas brings children their presents at night. In the morning. On Christmas day, they see presents in a stocking at the bottom of their bed.", "false");
      this.add("Father Christmas is the children's father, uncle or grandfather. He wears a red and white costume.", "false");
      this.add("At noon families have a big Christmas dinner. This is usually turkey, roast potatoes and vegetables. After the dinner they have Christmas pudding.", "true");
      this.add("Christmas pudding is a dark and heavy fruit cake. You eat it hot with cream.", "true");
      this.add("Some people put a silver coin in the pudding. The person who find it has bad luck.", "true");
      this.add("In the evening, on Christmas Day, people eat Christmas cake.This is dark, rich fruit cake with a white sugary 'coat' around it.", "true");
      this.add("In the afternoon of Christmas Day, the Queen makes a speech on television.", "true");
   }

   add(txt, answer) { // create class question and push it in the tab
      let q = new QuestionClass(txt, answer) // create a question
      this.tab.push(q); // add the question to the tab
   }

   // getter
   getTxtIndex(id) {
      return this.tab[id - 1].getTxt();
   }
   getTrueIndex(id) {
      return this.tab[id - 1].getTrue();
   }
   getFalseIndex(id) {
      return this.tab[id - 1].getFalse();
   }
   getLenght() {
      return this.tab.length;
   }
}
