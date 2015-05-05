(function() {
  var dat = {"aboutCountries":{
  link:"http://ac.qzqp.tk/",
  desc:"An easy way to discover information about countries, built with the World Bank API."
}};
for(var d in dat) {
  $('#cardboard').append("<div class='col s12 m6'><div class='card-panel'><a href='" + dat[d].link + "'><h4>" + d + "</h4></a><br/><p>" + dat[d].desc + "</p></div></div>");
}
})();
