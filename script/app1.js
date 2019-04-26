$(document).ready(function(){
  var alea;
  $('img[usemap]').rwdImageMaps();
  $('#left_arrow').css('visibility', 'hidden');
  $('map').on("click",function(){

    for (var i=0; i<=mineur; i++){
      alea = Math.random().toFixed(4);
      backgroundMineral();
    };

    function backgroundMineral(){
      switch ($('#background').attr('src')) {
        case '../background/PNG/game_background_2/game_background_2.png':
          // Set rock counter
          if(alea>=0 && alea<=0.7434){
            mineral[0].counter = parseInt(mineral[0].counter) + 1;
            $("#rock").html('<img src="../images/minerals/rock.png" id="rockimg"/>Rock: ' + mineral[0].counter);
          };

          // Set coal counter
          if(alea>=0.7434 && alea<=0.9234){
            mineral[1].counter = parseInt(mineral[1].counter) + 1;
            $("#coal").html('<img src="../images/minerals/coal.png" id="coalimg"/>Coal: ' + mineral[1].counter);
          };

          // Set gold counter
          if(alea>=0.9234 && alea<=0.9474){
            mineral[2].counter = parseInt(mineral[2].counter) + 1;
            $("#gold").html('<img src="../images/minerals/gold.png" id="goldimg"/>Gold: ' + mineral[2].counter);
          };

          // Set diamond counter
          if(alea>=0.9474 && alea<=0.9494){
            mineral[3].counter = parseInt(mineral[3].counter) + 1;
            $("#diamond").html('<img src="../images/minerals/diamond.png" id="diamondimg"/>Diamond: ' + mineral[3].counter);
          };

          // Set palladium counter
          if(alea>=0.9494 && alea<=0.95){
            mineral[4].counter = parseInt(mineral[4].counter) + 1;
            $("#palladium").html('<img src="../images/minerals/palladium.png" id="palladiumimg"/>Palladium: ' + mineral[4].counter);
          };

          // Set lapis-lazuli counter
          if(alea>=0.95 && alea<=1){
            mineral[9].counter = parseInt(mineral[9].counter) + 1;
            $("#lapis").html('<img src="../images/minerals/lapis.png" id="lapisimg"/>Lapis-Lazuli: ' + mineral[9].counter);
          };
          break;

        case '../background/PNG/mine.png':
          // Set rock counter
          if(alea>=0 && alea<=0.4974){
            mineral[0].counter = parseInt(mineral[0].counter) + 1;
            $("#rock").html('<img src="../images/minerals/rock.png" id="rockimg"/>Rock: ' + mineral[0].counter);
          };

          // Set coal counter
          if(alea>=0.4974 && alea<=0.8974){
            mineral[1].counter = parseInt(mineral[1].counter) + 1;
            $("#coal").html('<img src="../images/minerals/coal.png" id="coalimg"/>Coal: ' + mineral[1].counter);
          };

          // Set gold counter
          if(alea>=0.8974 && alea<=0.9474){
            mineral[2].counter = parseInt(mineral[2].counter) + 1;
            $("#gold").html('<img src="../images/minerals/gold.png" id="goldimg"/>Gold: ' + mineral[2].counter);
          };

          // Set diamond counter
          if(alea>=0.9474 && alea<=0.9494){
            mineral[3].counter = parseInt(mineral[3].counter) + 1;
            $("#diamond").html('<img src="../images/minerals/diamond.png" id="diamondimg"/>Diamond: ' + mineral[3].counter);
          };

          // Set palladium counter
          if(alea>=0.9494 && alea<=0.95){
            mineral[4].counter = parseInt(mineral[4].counter) + 1;
            $("#palladium").html('<img src="../images/minerals/palladium.png" id="palladiumimg"/>Palladium: ' + mineral[4].counter);
          };

          // Set lapis-lazuli counter
          if(alea>=0.95 && alea<=1){
            mineral[9].counter = parseInt(mineral[9].counter) + 1;
            $("#lapis").html('<img src="../images/minerals/lapis.png" id="lapisimg"/>Lapis-Lazuli: ' + mineral[9].counter);
          };
          break;

        case '../background/PNG/game_background_1/game_background_1.png':
          // Set rock counter
          if(alea>=0 && alea<=0.5374){
            mineral[0].counter = parseInt(mineral[0].counter) + 1;
            $("#rock").html('<img src="../images/minerals/rock.png" id="rockimg"/>Rock: ' + mineral[0].counter);
          };

          // Set coal counter
          if(alea>=0.5374 && alea<=0.6674){
            mineral[1].counter = parseInt(mineral[1].counter) + 1;
            $("#coal").html('<img src="../images/minerals/coal.png" id="coalimg"/>Coal: ' + mineral[1].counter);
          };

          // Set gold counter
          if(alea>=0.6674 && alea<=0.6774){
            mineral[2].counter = parseInt(mineral[2].counter) + 1;
            $("#gold").html('<img src="../images/minerals/gold.png" id="goldimg"/>Gold: ' + mineral[2].counter);
          };

          // Set diamond counter
          if(alea>=0.6774 && alea<=0.6794){
            mineral[3].counter = parseInt(mineral[3].counter) + 1;
            $("#diamond").html('<img src="../images/minerals/diamond.png" id="diamondimg"/>Diamond: ' + mineral[3].counter);
          };

          // Set palladium counter
          if(alea>=0.6794 && alea<=0.68){
            mineral[4].counter = parseInt(mineral[4].counter) + 1;
            $("#palladium").html('<img src="../images/minerals/palladium.png" id="palladiumimg"/>Palladium: ' + mineral[4].counter);
          };

          // Set emerald counter
          if(alea>=0.68 && alea<=0.76){
            mineral[6].counter = parseInt(mineral[6].counter) + 1;
            $("#emerald").html('<img src="../images/minerals/emerald.png" id="emeraldimg"/>Emerald: ' + mineral[6].counter);
          };

          // Set ruby counter
          if(alea>=0.76 && alea<=0.84){
            mineral[7].counter = parseInt(mineral[7].counter) + 1;
            $("#ruby").html('<img src="../images/minerals/ruby.png" id="rubyimg"/>Ruby: ' + mineral[7].counter);
          };

          // Set sapphire counter
          if(alea>=0.84 && alea<=0.92){
            mineral[8].counter = parseInt(mineral[8].counter) + 1;
            $("#sapphire").html('<img src="../images/minerals/sapphire.png" id="sapphireimg"/>Sapphire: ' + mineral[8].counter);
          };

          // Set lapis-lazuli counter
          if(alea>=0.92 && alea<=1){
            mineral[9].counter = parseInt(mineral[9].counter) + 1;
            $("#lapis").html('<img src="../images/minerals/lapis.png" id="lapisimg"/>Lapis-Lazuli: ' + mineral[9].counter);
          };
          break;

        case '../background/PNG/game_background_4/game_background_4.png':
          // Set rock counter
          if(alea>=0 && alea<=0.293){
            mineral[0].counter = parseInt(mineral[0].counter) + 1;
            $("#rock").html('<img src="../images/minerals/rock.png" id="rockimg"/>Rock: ' + mineral[0].counter);
          };

          // Set coal counter
          if(alea>=0.293 && alea<=0.393){
            mineral[1].counter = parseInt(mineral[1].counter) + 1;
            $("#coal").html('<img src="../images/minerals/coal.png" id="coalimg"/>Coal: ' + mineral[1].counter);
          };

          // Set gold counter
          if(alea>=0.393 && alea<=0.427){
            mineral[2].counter = parseInt(mineral[2].counter) + 1;
            $("#gold").html('<img src="../images/minerals/gold.png" id="goldimg"/>Gold: ' + mineral[2].counter);
          };

          // Set diamond counter
          if(alea>=0.427 && alea<=0.437){
            mineral[3].counter = parseInt(mineral[3].counter) + 1;
            $("#diamond").html('<img src="../images/minerals/diamond.png" id="diamondimg"/>Diamond: ' + mineral[3].counter);
          };

          // Set palladium counter
          if(alea>=0.437 && alea<=0.44){
            mineral[4].counter = parseInt(mineral[4].counter) + 1;
            $("#palladium").html('<img src="../images/minerals/palladium.png" id="palladiumimg"/>Palladium: ' + mineral[4].counter);
          };

          // Set emerald counter
          if(alea>=0.44 && alea<=0.56){
            mineral[6].counter = parseInt(mineral[6].counter) + 1;
            $("#emerald").html('<img src="../images/minerals/emerald.png" id="emeraldimg"/>Emerald: ' + mineral[6].counter);
          };

          // Set ruby counter
          if(alea>=0.56 && alea<=0.68){
            mineral[7].counter = parseInt(mineral[7].counter) + 1;
            $("#ruby").html('<img src="../images/minerals/ruby.png" id="rubyimg"/>Ruby: ' + mineral[7].counter);
          };

          // Set sapphire counter
          if(alea>=0.68 && alea<=0.8){
            mineral[8].counter = parseInt(mineral[8].counter) + 1;
            $("#sapphire").html('<img src="../images/minerals/sapphire.png" id="sapphireimg"/>Sapphire: ' + mineral[8].counter);
          };

          // Set lapis-lazuli counter
          if(alea>=0.8 && alea<=1){
            mineral[9].counter = parseInt(mineral[9].counter) + 1;
            $("#lapis").html('<img src="../images/minerals/lapis.png" id="lapisimg"/>Lapis-Lazuli: ' + mineral[9].counter);
          };
          break;

        case '../background/PNG/nuclear_plant.png':
          // Set rock counter
          if(alea>=0 && alea<=0.813){
            mineral[0].counter = parseInt(mineral[0].counter) + 1;
            $("#rock").html('<img src="../images/minerals/rock.png" id="rockimg"/>Rock: ' + mineral[0].counter);
          };

          // Set gold counter
          if(alea>=0.813 && alea<=0.83){
            mineral[2].counter = parseInt(mineral[2].counter) + 1;
            $("#gold").html('<img src="../images/minerals/gold.png" id="goldimg"/>Gold: ' + mineral[2].counter);
          };

          // Set uranium counter
          if(alea>=0.83 && alea<=1){
            mineral[5].counter = parseInt(mineral[5].counter) + 1;
            $("#uranium").html('<img src="../images/minerals/uranium.png" id="uraniumimg"/>Uranium: ' + mineral[5].counter);
          };
          break;
      };
    };
  });

  $('#left_arrow').on("click", function(){
    switch ($('#background').attr('src')) {
      case '../background/PNG/mine.png':
        $('#background').attr({'src':'../background/PNG/game_background_2/game_background_2.png' , 'usemap':'#zone1'});
        $('img[usemap="#zone1"]').rwdImageMaps();
        $('#left_arrow').css('visibility', 'hidden');
        $('#right_arrow').css('visibility', 'visible');
        break;
      case '../background/PNG/game_background_1/game_background_1.png':
        $('#background').attr({'src':'../background/PNG/mine.png' , 'usemap':'#zone2'});
        $('img[usemap="#zone2"]').rwdImageMaps();
        $('#left_arrow').css('visibility', 'visible');
        $('#right_arrow').css('visibility', 'visible');
        break;
      case '../background/PNG/game_background_4/game_background_4.png':
        $('#background').attr({'src':'../background/PNG/game_background_1/game_background_1.png' , 'usemap':'#zone3'});
        $('img[usemap="#zone3"]').rwdImageMaps();
        $('#left_arrow').css('visibility', 'visible');
        $('#right_arrow').css('visibility', 'visible');
        break;
      case '../background/PNG/nuclear_plant.png':
        $('#background').attr({'src':'../background/PNG/game_background_4/game_background_4.png' , 'usemap':'#zone4'});
        $('img[usemap="#zone4"]').rwdImageMaps();
        $('#left_arrow').css('visibility', 'visible');
        $('#right_arrow').css('visibility', 'visible');
        break;
    }
  });

  $('#right_arrow').on("click", function(){
    switch ($('#background').attr('src')) {
      case '../background/PNG/game_background_2/game_background_2.png':
        if(bombe>=1){
          $('#background').attr({'src':'../background/PNG/mine.png' , 'usemap':'#zone2'});
          $('img[usemap="#zone2"]').rwdImageMaps();
          $('#left_arrow').css('visibility', 'visible');
          $('#right_arrow').css('visibility', 'visible');
        }else{
          alert("Il vous faut d'abord acheter la bombe dans le magasin.");
        };
        break;
      case '../background/PNG/mine.png':
        if(bateau>=1){
          $('#background').attr({'src':'../background/PNG/game_background_1/game_background_1.png' , 'usemap':'#zone3'});
          $('img[usemap="#zone3"]').rwdImageMaps();
          $('#left_arrow').css('visibility', 'visible');
          $('#right_arrow').css('visibility', 'visible');
        }else{
          alert("Il vous faut d'abord acheter le bateau dans le magasin.");
        };
        break;
      case '../background/PNG/game_background_1/game_background_1.png':
        if(scaphandre>=1){
          $('#background').attr({'src':'../background/PNG/game_background_4/game_background_4.png' , 'usemap':'#zone4'});
          $('img[usemap="#zone4"]').rwdImageMaps();
          $('#left_arrow').css('visibility', 'visible');
          $('#right_arrow').css('visibility', 'visible');
        }else{
          alert("Il vous faut d'abord acheter le scaphandre dans le magasin.");
        };
        break;
      case '../background/PNG/game_background_4/game_background_4.png':
        if(combi>=1){
          $('#background').attr({'src':'../background/PNG/nuclear_plant.png' , 'usemap':'#zone5'});
          $('img[usemap="#zone5"]').rwdImageMaps();
          $('#left_arrow').css('visibility', 'visible');
          $('#right_arrow').css('visibility', 'hidden');
        }else{
          alert("Il vous faut d'abord acheter la combinaison NBC dans le magasin.");
        };
        break;
    }
  });

  //https://gist.github.com/MTDdk/2aaa51d1e8cc2e6bcf1d30c2f205afe6
  var audio = document.querySelector('audio');
  if (audio) {
    window.addEventListener('keydown', function (event) {
      var key = event.which || event.keyCode;
      if (key === 32) { // spacebar
        // eat the spacebar, so it does not scroll the page
        event.preventDefault();
        audio.paused ? audio.play() : audio.pause();
      }
    });
  };
});
