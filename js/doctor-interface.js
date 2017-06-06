var Doctor = require('./../js/doctor.js').doctorModule;
var apiKey = require('./../.env').apiKey;

$('#resultsDiv').hide();


var displayDoctors = function(issue, doctorData){
  doctorData.forEach(function(doctor){
    var firstname = doctor.profile.first_name;
    var lastname = doctor.profile.last_name;
    $('#doctorPannel').append(firstname + " " + lastname);
  });

};

$(document).ready(function(){
  var newDoc = new Doctor();
$('#medicalForm').submit(function(){
  var issue = $('#medicalIssueInput').val();
  $('#medicalIssueInput').val("");
  $('#resultsDiv').show();

  console.log(newDoc.getDoctors(issue, displayDoctors))

  newDoc.getDoctors(issue, displayDoctors);
  });
});
