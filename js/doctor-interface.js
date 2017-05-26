var Doctor = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;



$(document).ready(function(){
  var medicalIssue = null;

$('#resultsDiv').hide();



$('#medicalForm').submit(function(event){
    event.preventDefault();
  var newDocs = new Doctor();
  var medicalIssue = $('#medicalIssueInput').val().toString();
  var docName = $('#docNameInput').val();
  $('#medicalIssueInput').val("");
  $('#docNameInput').val("");
  $('#resultsDiv').show();

  newDocs.getDoctors(displayDoctors);
});


});
