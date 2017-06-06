var apiKey = require('./../.env').apiKey;


Doctor = function(){
};

Doctor.prototype.getDoctors = function(issue, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ issue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
      console.log(response);
    displayDoctors(issue, response.data);

  })

};

exports.doctorModule = Doctor;

//
// https://api.betterdoctor.com/2016-03-01/doctors?query=nose&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=96d7831c8bfd8a041dbffc65159b33c4
