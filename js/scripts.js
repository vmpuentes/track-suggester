//line 2 is telling the browser to wait until the document is ready for JQuery to excecute the javascript code.
$(document).ready(function() { // code that is included inside the $(document).ready(function() { will only run once the page Document Object Model is ready for Javascript code to execute.
  $("#formOne").submit(function(event) {
    $(".lang").hide(); //this line is telling jquery that everything with the class of "lang" is going to hide when the submit button is entered.
    event.preventDefault(); //This line is telling the browser to prevent the default action of hiding the entered text.
    var q1Answer = $("input#q1").val().toLowerCase();// this variable q1Answer is being declared through jquery and accessing the element input and the id  q1 and turning the user input value to lowercase. This is the same for lines 7-10 except JQuery will be calling upon the corresponding id's, q2-q5.
    var q2Answer = $("input#q2").val().toLowerCase();
    var q3Answer = $("input#q3").val().toLowerCase();
    var q4Answer = $("input#q4").val().toLowerCase();
    var q5Answer = $("input#q5").val().toLowerCase();
    var resultLanguage;// the variable resultLanguage is declared to later manipulate, using JQuery, the collective answers of q1-q5.
    if (q1Answer === "yes" && q5Answer === "yes") { // this if statement is declared to evaluate the answers of the survey questions using the branching method, or an if statement.If the values of questions 1 and 5 are yes then it will return the <p> tag with class Csharp.
      resultLanguage = "csharp";
    } else if (q3Answer === "yes") { //This line is a continuation of the if statement indicating, else if q3Answer is equal to yes,then...
      resultLanguage = "php"; //...the resultLanguage variable will be assigned to the id of "php".
    } else if (q4Answer === "yes") { //This line is also a continuation of the if statement indicating, else if q4Answer is equal to yes, then...
      resultLanguage = "ruby"; // ...the resultLanguage variable will be assigned to the id of "ruby".
    } else { // this line is essentially saying if all these conditions are not met then...
      resultLanguage = "java"; //...the resultLanguage variable will be equal to "java".
    }
    $("#" + resultLanguage).show(); // this line is indicating that JQuery will call upon the corresponding id that was evaluated in our if else statement and concatenate it with the resultLanguage variable which will then be run by the .show method.
  }); // This line is the closing bracket to enclose our submit event function on line 3.
}); // This line is the closing bracket to enclose our document.ready function on line 2.
