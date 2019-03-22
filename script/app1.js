$(document).ready(function(){
  var compte = 0;
  $('map').on("click",function(){
    $('#compteur').text('Compteur: ' + compte);

    alea();

    function alea(){
      // var rockAlea = Math.random();
      //   if(rockAlea <= item[0].rare){
      //     compte = compte + parseInt(item[0].value);
      //   };
      // var goldAlea = Math.random();
      //   if(goldAlea <= item[1].rare){
      //     compte = compte + parseInt(item[1].value);
      //   };
    };
  });

  var item = [{item:"ROCK", value:"1", rare:"0.98"},{item:"GOLD", value:"10", rare:"0.3"},{item:"DIAMOND", value:"500", rare:"0.1"},{item:"PALLADIUM", value:"700", rare:"0.05"},{item:"URANIUM", value:"1000", rare:"0.01"},{item:"EMERALD", value:"200", rare:"0.4"},{item:"RUBY", value:"200", rare:"0.4"},{item:"SAPPHIRE", value:"200", rare:"0.4"}];
});
