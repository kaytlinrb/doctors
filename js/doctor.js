var apiKey = require('./../.env').apiKey;

var displayDoctors = function(result){
  $('#doctorPannel').text(result);
};

Doctor = function(name){
this.name = name
};

Doctor.prototype.getDoctors = function(specialty,name) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+'runny nose'+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)

  .then(function(result) {

    displayDoctors(result);
    
    })
    console.log(getDoctors);
};

exports.doctorModule = Doctor;
