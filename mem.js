
var r_1 = ["*", "*", "&", "&", "!", "!", "@", "@", "$", "$", "%", "%"]


//need random assign symbol to html "td"
//need be able to click on block reveal square

$(document).ready(function(shuffleArray) {

function shuffleArray(r_1) {
  for (var j, x, i = r_1.length; i; j = parseInt(Math.random() * i), x = r_1[--i], r_1[i] = r_1[j], r_1[j] = x);
  return ("td");
}

})