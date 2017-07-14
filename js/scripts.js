$(document).ready(function() {
  $(".result").hide();
    $("form").submit(function(event) {
      console.log("form submitted.");

      var q1Answer = parseInt($("#q1").val());
      var q2Answer = parseInt($("#q2").val());
      var q3Answer = parseInt($("#q3").val());
      var q4Answer = parseInt($("#q4").val());
      var q5Answer = parseInt($("#q5").val());

      $("select#q1").select(q1Answer);
      $("select#q2").select(q2Answer);
      $("select#q3").select(q3Answer);
      $("select#q4").select(q4Answer);
      $("select#q5").select(q5Answer);

      if (q1Answer = 1) {
        return (#csharp).show();
        if (q2Answer )
      }




  }
 $(".result").hide();

  // var questions = parseInt(submit("Do you like to design webpages?"));
  var q1Answer = parseInt($("#q1").val());
    event.preventDefault();
// console.log(q1Answer);

//   if (q1Answer === 1) {
//     $('#csharp').show();
//   } else {
//     $('#ruby').show();
//   }
// });

// THINGS TO CONSIDER:
// Are we triggering an event? Y/N?
// What is the event we should be triggering?
// How can we collect AND use the answers to all of the questions, but only after some kind of event?
