$(document).ready(function(){
  $('img[usemap]').rwdImageMaps();
  $('#left_arrow').css('visibility', 'hidden');
  $('map').on("click",function(){

    alea();

    function alea(){
      var alea = Math.random().toFixed(4);
    };

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
  });

  var item = [{item:"ROCK", value:"1", counter:"0"},
  {item:"COAL", value:"5", counter:"0"},
  {item:"GOLD", value:"30", counter:"0"},
  {item:"DIAMOND", value:"500", counter:"0"},
  {item:"PALLADIUM", value:"700", counter:"0"},
  {item:"URANIUM", value:"1000", counter:"0"},
  {item:"EMERALD", value:"200", counter:"0"},
  {item:"RUBY", value:"200", counter:"0"},
  {item:"SAPPHIRE", value:"200", counter:"0"},
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
