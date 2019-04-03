$(document).ready(function(){
  $('img[usemap]').rwdImageMaps();
  var src = $('img').attr('src');
  const coordsArea1 = '3,985,406,797,420,790,433,792,530,827,752,744,891,817,991,860,1080,895,1188,922,1241,931,1268,927,1273,909,1280,919,1295,887,1305,902,1320,878,1331,900,1339,873,1344,887,1363,855,1375,875,1381,860,1393,888,1482,853,1510,861,1670,931,1760,978,1916,1041,1917,1078,1,1078';
  const coordsArea2 = '1,793,125,754,193,680,225,660,318,648,423,612,460,627,474,619,520,627,540,644,571,639,667,583,739,532,788,536,827,532,934,512,969,598,1025,666,1119,736,1141,712,1168,695,1197,726,1227,714,1244,678,1346,648,1426,588,1463,470,1534,453,1616,354,1649,320,1694,303,1746,515,1806,590,1836,731,1917,792,1917,983,1821,961,1714,956,1597,968,1407,938,1502,934,1376,907,1315,870,1203,865,1154,868,1086,873,1037,890,749,899,918,910,639,973,345,1004,148,1007,3,983';

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
  // var areas = [{area:"1", title:"Mountain", src:"../background/PNG/game_background_2/game_background_2.png"},
  // {area:"2", title:"Lake Mountain", src:"../background/PNG/game_background_1/game_background_1.png"}];

  var item = [{item:"ROCK", value:"1", rare:"0,7434", counter:"0", id='"#rock"'},
  {item:"COAL", value:"5", rare:"0.18", counter:"0"},
  {item:"GOLD", value:"30", rare:"0.024", counter:"0"},
  {item:"DIAMOND", value:"500", rare:"0.002", counter:"0"},
  {item:"PALLADIUM", value:"700", rare:"0.0006", counter:"0"},
  {item:"URANIUM", value:"1000", rare:"0", counter:"0"},
  {item:"EMERALD", value:"200", rare:"0", counter:"0"},
  {item:"RUBY", value:"200", rare:"0", counter:"0"},
  {item:"SAPPHIRE", value:"200", rare:"0", counter:"0"},
  {item:"LAPIS-LAZULI", value:"10", rare:"0.05", counter:"0"}];

  $('#left_arrow').on("click", function(){
    $('img').attr('src', '../background/PNG/game_background_1/game_background_1.png');
    $('area').attr({'coords':coordsArea2 , 'title':'Lake Mountain'});
    $('img[usemap]').rwdImageMaps();
  });

  $('#right_arrow').on("click", function(){
    $('img').attr('src', '../background/PNG/game_background_2/game_background_2.png');
    $('area').attr({'coords':coordsArea1 , 'title':'Mountain'});
    $('img[usemap]').rwdImageMaps();
  });
});
