function getCurrentTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  return [hours, minutes, seconds];
}

function formatHour(actualTime) {
  var time = getCurrentTime(actualTime);
  var format = time[2] % 2 == 0 ? addDigit(time[0]) + ":" + addDigit(time[1]) :
    addDigit(time[0]) + " " + addDigit(time[1]);
  return format;
}

function addDigit(value) {
  var newValue = value > 9 ? value : "0" + String(value);
  return newValue;
}

function setFormatLocal() {
  var date = new Date();
  localTime.textContent = formatHour(date);
}

function setFormatServer(serverDate){
  serverTime.textContent = formatHour(serverDate);
}


function getDataFromServer() {
  fetch('http://localhost:8080/')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var date = new Date(myJson);
    setFormatServer(date);
  });
}

function displayHours(){
  setFormatLocal();
  getDataFromServer();
}

displayHours();
setInterval(displayHours, 1000);