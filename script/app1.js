$(document).ready(function(){
  var alea;
  $('img[usemap]').rwdImageMaps();
  $('#left_arrow').css('visibility', 'hidden');
  $('map').on("click",function(){

    falea();

    function falea(){
      alea = Math.random().toFixed(4);
      backgroundMineral();
    };

    function log(){
      console.log(alea);
    }

    function backgroundMineral(){
      switch ($('img').attr('src')) {
        case '../background/PNG/game_background_2/game_background_2.png':
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
          break;

        case '../background/PNG/mine.png':
          // Set rock counter
          if(alea>=0 && alea<=0.4974){
            item[0].counter = parseInt(item[0].counter) + 1;
            $("#rock").text("Rock: " + item[0].counter);
          };

          // Set coal counter
          if(alea>=0.4974 && alea<=0.8974){
            item[1].counter = parseInt(item[1].counter) + 1;
            $("#coal").text("Coal: " + item[1].counter);
          };

          // Set gold counter
          if(alea>=0.8974 && alea<=0.9474){
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
          break;

        case '../background/PNG/game_background_1/game_background_1.png':
          // Set rock counter
          if(alea>=0 && alea<=0.5374){
            item[0].counter = parseInt(item[0].counter) + 1;
            $("#rock").text("Rock: " + item[0].counter);
          };

          // Set coal counter
          if(alea>=0.5374 && alea<=0.6674){
            item[1].counter = parseInt(item[1].counter) + 1;
            $("#coal").text("Coal: " + item[1].counter);
          };

          // Set gold counter
          if(alea>=0.6674 && alea<=0.6774){
            item[2].counter = parseInt(item[2].counter) + 1;
            $("#gold").text("Gold: " + item[2].counter);
          };

          // Set diamond counter
          if(alea>=0.6774 && alea<=0.6794){
            item[3].counter = parseInt(item[3].counter) + 1;
            $("#diamond").text("Diamond: " + item[3].counter);
          };

          // Set palladium counter
          if(alea>=0.6794 && alea<=0.68){
            item[4].counter = parseInt(item[4].counter) + 1;
            $("#palladium").text("Palladium: " + item[4].counter);
          };

          // Set emerald counter
          if(alea>=0.68 && alea<=0.76){
            item[6].counter = parseInt(item[6].counter) + 1;
            $("#emerald").text("Emerald: " + item[6].counter);
          };

          // Set ruby counter
          if(alea>=0.76 && alea<=0.84){
            item[7].counter = parseInt(item[7].counter) + 1;
            $("#ruby").text("Ruby: " + item[7].counter);
          };

          // Set sapphire counter
          if(alea>=0.84 && alea<=0.92){
            item[8].counter = parseInt(item[8].counter) + 1;
            $("#sapphire").text("Sapphire: " + item[8].counter);
          };

          // Set lapis-lazuli counter
          if(alea>=0.92 && alea<=1){
            item[9].counter = parseInt(item[9].counter) + 1;
            $("#lapis").text("Lapis-Lazuli: " + item[9].counter);
          };
          break;

        case '../background/PNG/game_background_4/game_background_4.png':
          // Set rock counter
          if(alea>=0 && alea<=0.293){
            item[0].counter = parseInt(item[0].counter) + 1;
            $("#rock").text("Rock: " + item[0].counter);
          };

          // Set coal counter
          if(alea>=0.293 && alea<=0.393){
            item[1].counter = parseInt(item[1].counter) + 1;
            $("#coal").text("Coal: " + item[1].counter);
          };

          // Set gold counter
          if(alea>=0.393 && alea<=0.427){
            item[2].counter = parseInt(item[2].counter) + 1;
            $("#gold").text("Gold: " + item[2].counter);
          };

          // Set diamond counter
          if(alea>=0.427 && alea<=0.437){
            item[3].counter = parseInt(item[3].counter) + 1;
            $("#diamond").text("Diamond: " + item[3].counter);
          };

          // Set palladium counter
          if(alea>=0.437 && alea<=0.44){
            item[4].counter = parseInt(item[4].counter) + 1;
            $("#palladium").text("Palladium: " + item[4].counter);
          };

          // Set emerald counter
          if(alea>=0.44 && alea<=0.56){
            item[6].counter = parseInt(item[6].counter) + 1;
            $("#emerald").text("Emerald: " + item[6].counter);
          };

          // Set ruby counter
          if(alea>=0.56 && alea<=0.68){
            item[7].counter = parseInt(item[7].counter) + 1;
            $("#ruby").text("Ruby: " + item[7].counter);
          };

          // Set sapphire counter
          if(alea>=0.68 && alea<=0.8){
            item[8].counter = parseInt(item[8].counter) + 1;
            $("#sapphire").text("Sapphire: " + item[8].counter);
          };

          // Set lapis-lazuli counter
          if(alea>=0.8 && alea<=1){
            item[9].counter = parseInt(item[9].counter) + 1;
            $("#lapis").text("Lapis-Lazuli: " + item[9].counter);
          };
          break;

        case '../background/PNG/nuclear_plant.png':
          // Set rock counter
          if(alea>=0 && alea<=0.813){
            item[0].counter = parseInt(item[0].counter) + 1;
            $("#rock").text("Rock: " + item[0].counter);
          };

          // Set gold counter
          if(alea>=0.813 && alea<=0.83){
            item[2].counter = parseInt(item[2].counter) + 1;
            $("#gold").text("Gold: " + item[2].counter);
          };

          // Set uranium counter
          if(alea>=0.83 && alea<=1){
            item[5].counter = parseInt(item[5].counter) + 1;
            $("#uranium").text("Uranium: " + item[5].counter);
          };
          break;
      };
    };
  });

  var item = [{item:"ROCK", value:"1", counter:"0"},
  {item:"COAL", value:"5", counter:"0"},
  {item:"GOLD", value:"30", counter:"0"},
  {item:"DIAMOND", value:"500", counter:"0"},
  {item:"PALLADIUM", value:"700", counter:"0"},
  {item:"URANIUM", value:"1000", counter:"0"},
  {item:"EMERALD", value:"100", counter:"0"},
  {item:"RUBY", value:"100", counter:"0"},
  {item:"SAPPHIRE", value:"100", counter:"0"},
  {item:"LAPIS-LAZULI", value:"10", counter:"0"}];

  $('#left_arrow').on("click", function(){
    switch ($('img').attr('src')) {
      case '../background/PNG/mine.png':
        $('img').attr({'src':'../background/PNG/game_background_2/game_background_2.png' , 'usemap':'#zone1'});
        $('img[usemap="#zone1"]').rwdImageMaps();
        $('#left_arrow').css('visibility', 'hidden');
        $('#right_arrow').css('visibility', 'visible');
        break;
      case '../background/PNG/game_background_1/game_background_1.png':
        $('img').attr({'src':'../background/PNG/mine.png' , 'usemap':'#zone2'});
        $('img[usemap="#zone2"]').rwdImageMaps();
        $('#left_arrow').css('visibility', 'visible');
        $('#right_arrow').css('visibility', 'visible');
        break;
      case '../background/PNG/game_background_4/game_background_4.png':
        $('img').attr({'src':'../background/PNG/game_background_1/game_background_1.png' , 'usemap':'#zone3'});
        $('img[usemap="#zone3"]').rwdImageMaps();
        $('#left_arrow').css('visibility', 'visible');
        $('#right_arrow').css('visibility', 'visible');
        break;
      case '../background/PNG/nuclear_plant.png':
        $('img').attr({'src':'../background/PNG/game_background_4/game_background_4.png' , 'usemap':'#zone4'});
        $('img[usemap="#zone4"]').rwdImageMaps();
        $('#left_arrow').css('visibility', 'visible');
        $('#right_arrow').css('visibility', 'visible');
        break;
    }
  });

  $('#right_arrow').on("click", function(){
    switch ($('img').attr('src')) {
      case '../background/PNG/game_background_2/game_background_2.png':
        $('img').attr({'src':'../background/PNG/mine.png' , 'usemap':'#zone2'});
        $('img[usemap="#zone2"]').rwdImageMaps();
        $('#left_arrow').css('visibility', 'visible');
        $('#right_arrow').css('visibility', 'visible');
        break;
      case '../background/PNG/mine.png':
        $('img').attr({'src':'../background/PNG/game_background_1/game_background_1.png' , 'usemap':'#zone3'});
        $('img[usemap="#zone3"]').rwdImageMaps();
        $('#left_arrow').css('visibility', 'visible');
        $('#right_arrow').css('visibility', 'visible');
        break;
      case '../background/PNG/game_background_1/game_background_1.png':
        $('img').attr({'src':'../background/PNG/game_background_4/game_background_4.png' , 'usemap':'#zone4'});
        $('img[usemap="#zone4"]').rwdImageMaps();
        $('#left_arrow').css('visibility', 'visible');
        $('#right_arrow').css('visibility', 'visible');
        break;
      case '../background/PNG/game_background_4/game_background_4.png':
        $('img').attr({'src':'../background/PNG/nuclear_plant.png' , 'usemap':'#zone5'});
        $('img[usemap="#zone5"]').rwdImageMaps();
        $('#left_arrow').css('visibility', 'visible');
        $('#right_arrow').css('visibility', 'hidden');
        break;
    }
  });
});
