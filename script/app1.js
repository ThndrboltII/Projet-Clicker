$(document).ready(function(){
  $('map').on("click",function(){
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
      var alea = Math.random().toFixed(3);

      if(alea>=0 && alea<=0.6){
        
      };
      if(alea>=0.6 && alea<=0.85){ compte = compte + parseInt(item[2].value)};
      if(alea>=0.85 && alea<=0.95){ compte = compte + parseInt(item[3].value)};
      if(alea>=0.95 && alea<=0.96){ compte = compte + parseInt(item[4].value)};
      if(alea>=0.96 && alea<=0.966){ compte = compte + parseInt(item[5].value)};
      if(alea>=966 && alea<=1){ compte = compte + parseInt(item[0].value)};
    };
  });

  var item = [{item:"ROCK", value:"1", rare:"0.6", counter:"0"},
  {item:"COAL", value:"5", rare:"0.25", counter:"0"},
  {item:"GOLD", value:"30", rare:"0.1", counter:"0"},
  {item:"DIAMOND", value:"500", rare:"0.01", counter:"0"},
  {item:"PALLADIUM", value:"700", rare:"0.06", counter:"0"},
  {item:"URANIUM", value:"1000", rare:"0", counter:"0"},
  {item:"EMERALD", value:"200", rare:"0", counter:"0"},
  {item:"RUBY", value:"200", rare:"0", counter:"0"},
  {item:"SAPPHIRE", value:"200", rare:"0", counter:"0"},
  {item:"LAPIS-LAZULI", value:"10", rare:"0.034", counter:"0"}];
});
