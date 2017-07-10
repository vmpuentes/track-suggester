$(document).ready(function() {
  $(".result").hide();

  // var questions = parseInt(submit("Do you like to design webpages?"));
  var q1Answer = parseInt($("#q1").val());

console.log(q1Answer);

  if (q1Answer === 1) {
    $('#csharp').show();
  } else {
    $('#ruby').show();
  }
});

// THINGS TO CONSIDER:
// Are we triggering an event? Y/N?
// What is the event we should be triggering?
// How can we collect AND use the answers to all of the questions, but only after some kind of event?
