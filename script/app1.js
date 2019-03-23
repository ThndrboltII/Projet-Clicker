$(document).ready(function(){
  $('img[usemap]').rwdImageMaps();
  
  $('map').on("click",function(){

    alea();

    function alea(){

      var alea = Math.random().toFixed(3);

      // Set rock counter
      if(alea>=0 && alea<=0.6){
        item[0].counter = parseInt(item[0].counter) + 1;
        $("#rock").text("Rock: " + item[0].counter);
      };

      // Set coal counter
      if(alea>=0.6 && alea<=0.85){
        item[1].counter = parseInt(item[1].counter) + 1;
        $("#coal").text("Coal: " + item[1].counter);
      };

      // Set gold counter
      if(alea>=0.85 && alea<=0.95){
        item[2].counter = parseInt(item[2].counter) + 1;
        $("#gold").text("Gold: " + item[2].counter);
      };

      // Set diamond counter
      if(alea>=0.95 && alea<=0.96){
        item[3].counter = parseInt(item[3].counter) + 1;
        $("#diamond").text("Diamond: " + item[3].counter);
      };

      // Set palladium counter
      if(alea>=0.96 && alea<=0.966){
        item[4].counter = parseInt(item[4].counter) + 1;
        $("#palladium").text("Palladium: " + item[4].counter);
      };

      // Set lapis-lazuli counter
      if(alea>=0.966 && alea<=1){
        item[9].counter = parseInt(item[9].counter) + 1;
        $("#lapis").text("Lapis-Lazuli: " + item[9].counter);
      };
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
