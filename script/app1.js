$(document).ready(function(){
  var compte = 0;
  $('map').on("click",function(){
    compte = compte + 1;
    $('#compteur').text('Compteur: ' + compte);
  });

  var item = [];
});
