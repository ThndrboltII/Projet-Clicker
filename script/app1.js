$(document).ready(function(){ //Quand la page est chargé, lance la fonction
  var alea; //Variable stockant un chiffre entre 0 et 1
  $('img[usemap]').rwdImageMaps(); //Redimensionne la balise map par rapport à la balise img
  $('#left_arrow').css('visibility', 'hidden');

  $('map').on("click",function(){ //Fonction appellée lors d'un clic sur la balise map

    for (var i=0; i<=mineur; i++){ //Tant que i est inférieur au nombre de mineur => relance une variable aléatoire
      alea = Math.random().toFixed(4); //variable aléatoire à 4 décimales
      backgroundMineral();
    };

    function backgroundMineral(){
      switch ($('#background').attr('src')) { //Conditions sur l'attribut src de l'arrière plan
        case '../background/PNG/game_background_2/game_background_2.png': //1er niveau
          // Réinitialise le compteur de rock
          if(alea>=0 && alea<=0.7434){ //effectifs cumulés
            mineral[0].counter = parseInt(mineral[0].counter) + 1;
            $("#rock").html('<img src="../images/minerals/rock.png" class="mineralimg"/>Rock: ' + mineral[0].counter);
          };

          // Réinitialise le compteur de coal
          if(alea>=0.7434 && alea<=0.9234){
            mineral[1].counter = parseInt(mineral[1].counter) + 1;
            $("#coal").html('<img src="../images/minerals/coal.png" class="mineralimg"/>Coal: ' + mineral[1].counter);
          };

          // Réinitialise le compteur de gold
          if(alea>=0.9234 && alea<=0.9474){
            mineral[2].counter = parseInt(mineral[2].counter) + 1;
            $("#gold").html('<img src="../images/minerals/gold.png" class="mineralimg"/>Gold: ' + mineral[2].counter);
          };

          // Réinitialise le compteur de diamond
          if(alea>=0.9474 && alea<=0.9494){
            mineral[3].counter = parseInt(mineral[3].counter) + 1;
            $("#diamond").html('<img src="../images/minerals/diamond.png" class="mineralimg"/>Diamond: ' + mineral[3].counter);
          };

          // Réinitialise le compteur de palladium
          if(alea>=0.9494 && alea<=0.95){
            mineral[4].counter = parseInt(mineral[4].counter) + 1;
            $("#palladium").html('<img src="../images/minerals/palladium.png" class="mineralimg"/>Palladium: ' + mineral[4].counter);
          };

          // Réinitialise le compteur de lapis-lazuli
          if(alea>=0.95 && alea<=1){
            mineral[9].counter = parseInt(mineral[9].counter) + 1;
            $("#lapis").html('<img src="../images/minerals/lapis.png" class="mineralimg"/>Lapis-Lazuli: ' + mineral[9].counter);
          };
          break;

        case '../background/PNG/mine.png': //2eme niveau
          // Réinitialise le compteur de rock
          if(alea>=0 && alea<=0.4974){
            mineral[0].counter = parseInt(mineral[0].counter) + 1;
            $("#rock").html('<img src="../images/minerals/rock.png" class="mineralimg"/>Rock: ' + mineral[0].counter);
          };

          // Réinitialise le compteur de coal
          if(alea>=0.4974 && alea<=0.8974){
            mineral[1].counter = parseInt(mineral[1].counter) + 1;
            $("#coal").html('<img src="../images/minerals/coal.png" class="mineralimg"/>Coal: ' + mineral[1].counter);
          };

          // Réinitialise le compteur de gold
          if(alea>=0.8974 && alea<=0.9474){
            mineral[2].counter = parseInt(mineral[2].counter) + 1;
            $("#gold").html('<img src="../images/minerals/gold.png" class="mineralimg"/>Gold: ' + mineral[2].counter);
          };

          // Réinitialise le compteur de diamond
          if(alea>=0.9474 && alea<=0.9494){
            mineral[3].counter = parseInt(mineral[3].counter) + 1;
            $("#diamond").html('<img src="../images/minerals/diamond.png" class="mineralimg"/>Diamond: ' + mineral[3].counter);
          };

          // Réinitialise le compteur de palladium
          if(alea>=0.9494 && alea<=0.95){
            mineral[4].counter = parseInt(mineral[4].counter) + 1;
            $("#palladium").html('<img src="../images/minerals/palladium.png" class="mineralimg"/>Palladium: ' + mineral[4].counter);
          };

          // Réinitialise le compteur de lapis-lazuli
          if(alea>=0.95 && alea<=1){
            mineral[9].counter = parseInt(mineral[9].counter) + 1;
            $("#lapis").html('<img src="../images/minerals/lapis.png" class="mineralimg"/>Lapis-Lazuli: ' + mineral[9].counter);
          };
          break;

        case '../background/PNG/game_background_1/game_background_1.png': //3eme niveau
          // Réinitialise le compteur de roc
          if(alea>=0 && alea<=0.5374){
            mineral[0].counter = parseInt(mineral[0].counter) + 1;
            $("#rock").html('<img src="../images/minerals/rock.png" class="mineralimg"/>Rock: ' + mineral[0].counter);
          };

          // Réinitialise le compteur de coa
          if(alea>=0.5374 && alea<=0.6674){
            mineral[1].counter = parseInt(mineral[1].counter) + 1;
            $("#coal").html('<img src="../images/minerals/coal.png" class="mineralimg"/>Coal: ' + mineral[1].counter);
          };

          // Réinitialise le compteur de gol
          if(alea>=0.6674 && alea<=0.6774){
            mineral[2].counter = parseInt(mineral[2].counter) + 1;
            $("#gold").html('<img src="../images/minerals/gold.png" class="mineralimg"/>Gold: ' + mineral[2].counter);
          };

          // Réinitialise le compteur de diamon
          if(alea>=0.6774 && alea<=0.6794){
            mineral[3].counter = parseInt(mineral[3].counter) + 1;
            $("#diamond").html('<img src="../images/minerals/diamond.png" class="mineralimg"/>Diamond: ' + mineral[3].counter);
          };

          // Réinitialise le compteur de palladiu
          if(alea>=0.6794 && alea<=0.68){
            mineral[4].counter = parseInt(mineral[4].counter) + 1;
            $("#palladium").html('<img src="../images/minerals/palladium.png" class="mineralimg"/>Palladium: ' + mineral[4].counter);
          };

          // Réinitialise le compteur de emeral
          if(alea>=0.68 && alea<=0.76){
            mineral[6].counter = parseInt(mineral[6].counter) + 1;
            $("#emerald").html('<img src="../images/minerals/emerald.png" class="mineralimg"/>Emerald: ' + mineral[6].counter);
          };

          // Réinitialise le compteur de rub
          if(alea>=0.76 && alea<=0.84){
            mineral[7].counter = parseInt(mineral[7].counter) + 1;
            $("#ruby").html('<img src="../images/minerals/ruby.png" class="mineralimg"/>Ruby: ' + mineral[7].counter);
          };

          // Réinitialise le compteur de sapphir
          if(alea>=0.84 && alea<=0.92){
            mineral[8].counter = parseInt(mineral[8].counter) + 1;
            $("#sapphire").html('<img src="../images/minerals/sapphire.png" class="mineralimg"/>Sapphire: ' + mineral[8].counter);
          };

          // Réinitialise le compteur de lapis-lazul
          if(alea>=0.92 && alea<=1){
            mineral[9].counter = parseInt(mineral[9].counter) + 1;
            $("#lapis").html('<img src="../images/minerals/lapis.png" class="mineralimg"/>Lapis-Lazuli: ' + mineral[9].counter);
          };
          break;

        case '../background/PNG/game_background_4/game_background_4.png': //4eme niveau
          // Réinitialise le compteur de roc
          if(alea>=0 && alea<=0.293){
            mineral[0].counter = parseInt(mineral[0].counter) + 1;
            $("#rock").html('<img src="../images/minerals/rock.png" class="mineralimg"/>Rock: ' + mineral[0].counter);
          };

          // Réinitialise le compteur de coa
          if(alea>=0.293 && alea<=0.393){
            mineral[1].counter = parseInt(mineral[1].counter) + 1;
            $("#coal").html('<img src="../images/minerals/coal.png" class="mineralimg"/>Coal: ' + mineral[1].counter);
          };

          // Réinitialise le compteur de gold
          if(alea>=0.393 && alea<=0.427){
            mineral[2].counter = parseInt(mineral[2].counter) + 1;
            $("#gold").html('<img src="../images/minerals/gold.png" class="mineralimg"/>Gold: ' + mineral[2].counter);
          };

          // Réinitialise le compteur de diamond
          if(alea>=0.427 && alea<=0.437){
            mineral[3].counter = parseInt(mineral[3].counter) + 1;
            $("#diamond").html('<img src="../images/minerals/diamond.png" class="mineralimg"/>Diamond: ' + mineral[3].counter);
          };

          // Réinitialise le compteur de palladium
          if(alea>=0.437 && alea<=0.44){
            mineral[4].counter = parseInt(mineral[4].counter) + 1;
            $("#palladium").html('<img src="../images/minerals/palladium.png" class="mineralimg"/>Palladium: ' + mineral[4].counter);
          };

          // Réinitialise le compteur de emerald
          if(alea>=0.44 && alea<=0.56){
            mineral[6].counter = parseInt(mineral[6].counter) + 1;
            $("#emerald").html('<img src="../images/minerals/emerald.png" class="mineralimg"/>Emerald: ' + mineral[6].counter);
          };

          // Réinitialise le compteur de ruby
          if(alea>=0.56 && alea<=0.68){
            mineral[7].counter = parseInt(mineral[7].counter) + 1;
            $("#ruby").html('<img src="../images/minerals/ruby.png" class="mineralimg"/>Ruby: ' + mineral[7].counter);
          };

          // Réinitialise le compteur de sapphire
          if(alea>=0.68 && alea<=0.8){
            mineral[8].counter = parseInt(mineral[8].counter) + 1;
            $("#sapphire").html('<img src="../images/minerals/sapphire.png" class="mineralimg"/>Sapphire: ' + mineral[8].counter);
          };

          // Réinitialise le compteur de lapis-lazuli
          if(alea>=0.8 && alea<=1){
            mineral[9].counter = parseInt(mineral[9].counter) + 1;
            $("#lapis").html('<img src="../images/minerals/lapis.png" class="mineralimg"/>Lapis-Lazuli: ' + mineral[9].counter);
          };
          break;

        case '../background/PNG/nuclear_plant.png': //5eme niveau
          // Réinitialise le compteur de rock
          if(alea>=0 && alea<=0.813){
            mineral[0].counter = parseInt(mineral[0].counter) + 1;
            $("#rock").html('<img src="../images/minerals/rock.png" class="mineralimg"/>Rock: ' + mineral[0].counter);
          };

          // Réinitialise le compteur de gold
          if(alea>=0.813 && alea<=0.83){
            mineral[2].counter = parseInt(mineral[2].counter) + 1;
            $("#gold").html('<img src="../images/minerals/gold.png" class="mineralimg"/>Gold: ' + mineral[2].counter);
          };

          // Réinitialise le compteur de uranium
          if(alea>=0.83 && alea<=1){
            mineral[5].counter = parseInt(mineral[5].counter) + 1;
            $("#uranium").html('<img src="../images/minerals/uranium.png" class="mineralimg"/>Uranium: ' + mineral[5].counter);
          };
          break;
      };
    };
  });

  //Fonction appellée lors d'un clic sur la flèche de gauche
  $('#left_arrow').on("click", function(){
    switch ($('#background').attr('src')) {
      case '../background/PNG/mine.png': //Niveau 2
        $('#background').attr({'src':'../background/PNG/game_background_2/game_background_2.png' , 'usemap':'#zone1'}); //envoie vers le niveau 1 et change la map
        $('img[usemap="#zone1"]').rwdImageMaps(); //Redimensionne la map
        $('#left_arrow').css('visibility', 'hidden');
        $('#right_arrow').css('visibility', 'visible');
        break;
      case '../background/PNG/game_background_1/game_background_1.png': //Niveau 3
        $('#background').attr({'src':'../background/PNG/mine.png' , 'usemap':'#zone2'}); //envoie vers le niveau 2 et change la map
        $('img[usemap="#zone2"]').rwdImageMaps(); //Redimensionne la map
        $('#left_arrow').css('visibility', 'visible');
        $('#right_arrow').css('visibility', 'visible');
        break;
      case '../background/PNG/game_background_4/game_background_4.png': //Niveau 4
        $('#background').attr({'src':'../background/PNG/game_background_1/game_background_1.png' , 'usemap':'#zone3'});//envoie vers le niveau 3 et change la map
        $('img[usemap="#zone3"]').rwdImageMaps(); //Redimensionne la map
        $('#left_arrow').css('visibility', 'visible');
        $('#right_arrow').css('visibility', 'visible');
        break;
      case '../background/PNG/nuclear_plant.png': //Niveau 5
        $('#background').attr({'src':'../background/PNG/game_background_4/game_background_4.png' , 'usemap':'#zone4'});//envoie vers le niveau 4 et change la map
        $('img[usemap="#zone4"]').rwdImageMaps(); //Redimensionne la map
        $('#left_arrow').css('visibility', 'visible');
        $('#right_arrow').css('visibility', 'visible');
        break;
    }
  });

  //Fonction appellée lors d'un clic sur la flèche de droite
  $('#right_arrow').on("click", function(){
    switch ($('#background').attr('src')) {
      case '../background/PNG/game_background_2/game_background_2.png': //Niveau 1
        if(bombe>=1){ //Si on a acheté au moins une bombe
          $('#background').attr({'src':'../background/PNG/mine.png' , 'usemap':'#zone2'}); //Envoie vers niveau 2 et change la map
          $('img[usemap="#zone2"]').rwdImageMaps(); //Redimensionne l'image
          $('#left_arrow').css('visibility', 'visible');
          $('#right_arrow').css('visibility', 'visible');
        }else{
          alert("Il vous faut d'abord acheter la bombe dans le magasin.");
        };
        break;
      case '../background/PNG/mine.png': //Niveau 2
        if(bateau>=1){ //Si on a acheté au moins un bateau
          $('#background').attr({'src':'../background/PNG/game_background_1/game_background_1.png' , 'usemap':'#zone3'}); //Envoie vers niveau 3 et change la map
          $('img[usemap="#zone3"]').rwdImageMaps(); //Redimensionne l'image
          $('#left_arrow').css('visibility', 'visible');
          $('#right_arrow').css('visibility', 'visible');
        }else{
          alert("Il vous faut d'abord acheter le bateau dans le magasin.");
        };
        break;
      case '../background/PNG/game_background_1/game_background_1.png': //Niveau 3
        if(scaphandre>=1){ //Si on a acheté au moins un scaphandre
          $('#background').attr({'src':'../background/PNG/game_background_4/game_background_4.png' , 'usemap':'#zone4'}); //Envoie vers niveau 4 et change la map
          $('img[usemap="#zone4"]').rwdImageMaps(); //Redimensionne l'image
          $('#left_arrow').css('visibility', 'visible');
          $('#right_arrow').css('visibility', 'visible');
        }else{
          alert("Il vous faut d'abord acheter le scaphandre dans le magasin.");
        };
        break;
      case '../background/PNG/game_background_4/game_background_4.png': //Niveau 4
        if(combi>=1){ //Si on a acheté au moins une combinaison nbc
          $('#background').attr({'src':'../background/PNG/nuclear_plant.png' , 'usemap':'#zone5'}); //Envoie vers niveau 5 et change la map
          $('img[usemap="#zone5"]').rwdImageMaps(); //Redimensionne l'image
          $('#left_arrow').css('visibility', 'visible');
          $('#right_arrow').css('visibility', 'hidden');
        }else{
          alert("Il vous faut d'abord acheter la combinaison NBC dans le magasin.");
        };
        break;
    }
  });

  //https://gist.github.com/MTDdk/2aaa51d1e8cc2e6bcf1d30c2f205afe6
  var audio = document.querySelector('audio'); //Récupère toutes les balises audio
  if (audio) {
    window.addEventListener('keydown', function (event) { //Evénement si une touche est enfoncé
      var key = event.which || event.keyCode; //Récupère le code ASCII de la touche (adapté pour le moteur de recherche)
      if (key === 32) { // code ASCII de la barre espace
        event.preventDefault(); // empêche le scroll
        audio.paused ? audio.play() : audio.pause(); //si l'audio est en pause => joue la musique, sinon => met en pause
      }
    });
  };
});
