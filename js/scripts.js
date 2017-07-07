$(document).ready(function() {
  var questions = parseInt(submit("Do you like to design webpages?"));

  if (questions === 1) {
    $('#csharp').show();
}  else {
  $('#ruby').show();
  }
});
