$(document).ready(function(){
  var compte = 0;
  $('map').on("click",function(){
    compte = compte + 1;
    $('#compteur').text('Compteur: ' + compte);
  });

  var item = [{item:"ROCK", value:"1", rare:"0.98"},{item:"GOLD", value:"10", rare:"0.3"},{item:"DIAMOND", value:"500", rare:"0.1"},{item:"PALLADIUM", value:"700", rare:"0.05"},
  {item:"URANIUM", value:"1000", rare:"0.01"},{item:"EMERALD", value:"200", rare:"0.4"},{item:"RUBY", value:"200", rare:"0.4"},{item:"SAPPHIRE", value:"200", rare:"0.4"}];
});
