//your JS code here. If required.
var result = document.getElementById("timer");
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate()+1;
// time
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

var formattedDate = `${month}/${day}/${year},`
var formattedTime = `${hour}:${minutes}:${seconds}`
result.textContent = formattedDate + formattedTime + " PM";
