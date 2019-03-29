$(document).ready(function(){
  $('img[usemap]').rwdImageMaps();
  $('img').attr('src');
  $('map').on("click",function(){

    alea();

    function alea(){

      var alea = Math.random().toFixed(4);

      // Set rock counter
      if(alea>=0 && alea<=0.7434){
        item[0].counter = parseInt(item[0].counter) + 1;
        $("#rock").text("Rock: " + item[0].counter);
      };

      // Set coal counter
      if(alea>=0.7434 && alea<=0.9234){
        item[1].counter = parseInt(item[1].counter) + 1;
        $("#coal").text("Coal: " + item[1].counter);
      };

      // Set gold counter
      if(alea>=0.9234 && alea<=0.9474){
        item[2].counter = parseInt(item[2].counter) + 1;
        $("#gold").text("Gold: " + item[2].counter);
      };

      // Set diamond counter
      if(alea>=0.9474 && alea<=0.9494){
        item[3].counter = parseInt(item[3].counter) + 1;
        $("#diamond").text("Diamond: " + item[3].counter);
      };

      // Set palladium counter
      if(alea>=0.9494 && alea<=0.95){
        item[4].counter = parseInt(item[4].counter) + 1;
        $("#palladium").text("Palladium: " + item[4].counter);
      };

      // Set lapis-lazuli counter
      if(alea>=0.95 && alea<=1){
        item[9].counter = parseInt(item[9].counter) + 1;
        $("#lapis").text("Lapis-Lazuli: " + item[9].counter);
      };
    };
  });

  var item = [{item:"ROCK", value:"1", rare:"0,7434", counter:"0"},
  {item:"COAL", value:"5", rare:"0.18", counter:"0"},
  {item:"GOLD", value:"30", rare:"0.024", counter:"0"},
  {item:"DIAMOND", value:"500", rare:"0.002", counter:"0"},
  {item:"PALLADIUM", value:"700", rare:"0.0006", counter:"0"},
  {item:"URANIUM", value:"1000", rare:"0", counter:"0"},
  {item:"EMERALD", value:"200", rare:"0", counter:"0"},
  {item:"RUBY", value:"200", rare:"0", counter:"0"},
  {item:"SAPPHIRE", value:"200", rare:"0", counter:"0"},
  {item:"LAPIS-LAZULI", value:"10", rare:"0.05", counter:"0"}];

  $('left_arrow').on("click", function(){$('img').attr('src')="../background/PNG/game_background_1/game_background_1.png";})
});
