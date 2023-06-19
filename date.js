//jshint esversion :6

module.exports = getDate

function getDate(module){
  var today = new Date()
  currday = today.getDay()
  day = ""
  var options = {
    weekday:"long",
    day:"numeric",
    month : "long"
  }
  var day = today.toLocaleDateString("en-US", options)
  return day
}
