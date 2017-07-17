$(document).ready(function() {
  $("#formOne").submit(function(event) {
    $(".lang").hide();
    event.preventDefault();
    var q1Answer = $("input#q1").val().toLowerCase();
    var q2Answer = $("input#q2").val().toLowerCase();
    var q3Answer = $("input#q3").val().toLowerCase();
    var q4Answer = $("input#q4").val().toLowerCase();
    var q5Answer = $("input#q5").val().toLowerCase();
    var resultLanguage;
    if (q1Answer === "yes" && q5Answer === "yes") {
      resultLanguage = "csharp";
    } else if (q3Answer === "yes") {
      resultLanguage = "php";
    } else if (q4Answer === "yes") {
      resultLanguage = "ruby";
    } else {
      resultLanguage = "java";
    }
    $("#" + resultLanguage).show();
  });
});
