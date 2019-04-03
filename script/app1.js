$(document).ready(function(){
  $('img[usemap]').rwdImageMaps();
  const coordsArea1 = parseFloat(3,985,406,797,420,790,433,792,530,827,752,744,891,817,991,860,1080,895,1188,922,1241,931,1268,927,1273,909,1280,919,1295,887,1305,902,1320,878,1331,900,1339,873,1344,887,1363,855,1375,875,1381,860,1393,888,1482,853,1510,861,1670,931,1760,978,1916,1041,1917,1078,1,1078);
  const coordsArea2 = parseFloat(1,795,125,756,211,661,318,646,421,613,459,623,476,618,522,630,540,644,571,639,628,608,681,576,737,534,784,534,837,532,940,513,968,595,1025,668,1115,734,1142,707,1164,695,1186,708,1208,707,1242,683,1349,644,1422,590,1466,466,1531,452,1651,315,1695,303,1751,518,1802,588,1838,725,1919,796,1919,983,1800,959,1711,952,1595,966,1404,934,1495,930,1371,907,1309,868,1210,861,1085,879,1041,886,752,900,922,908,637,973,349,1002,148,1002,1,980);
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

  $('#left_arrow').on("click", function(){
    $('img').attr('src', '../background/PNG/game_background_1/game_background_1.png');
    $('area').attr({'coords':coordsArea2 , title:'Lake Mountain'});
    $('img[usemap]').rwdImageMaps();
  });

  $('#right_arrow').on("click", function(){
    $('img').attr('src', '../background/PNG/game_background_2/game_background_2.png');
    $('area').attr({'coords':coordsArea1 , title:'Mountain'});
    $('img[usemap]').rwdImageMaps();
  });
});
