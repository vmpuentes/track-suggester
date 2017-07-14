$(function() {
  $("#formOne").submit(function(event) {

      var q1Answer = $("input#q1").val();
      var q2Answer = $("input#q2").val();
      var q3Answer = $("input#q3").val();
      var q4Answer = $("input#q4").val();
      var q5Answer = $("input#q5").val();

      for (index = i, )

      if (q1Answer === "yes") {

      alert("The C# programming language is most commonly used with the .NET framework. Students who are well-versed in C# programming can use it to create client applications, database applications, distributed components, and much more.Students who learn C# programming and combine it with their knowledge of the .NET framework can target larger enterprises, government agencies, and companies serving enterprise and government clients for employment.Companies using C# and .NET who have hired Epicodus graduates include Windsor and Incomm.")
    }
  });
});
  // if (q1Answer === "yes") {
  //   return $("#results#csharp").show();
  // } else $("#php").show();
  // console.log("hello");

  //$("form").submit(function(event) {
  //     console.log("form submitted.");
  // var questions = parseInt(submit("Do you like to design webpages?"));
  // var q1Answer = parseInt($("#q1").val());
  //   event.preventDefault();
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
