$(document).ready(function(){
  var compte = 0;
  $('.case').on("click",function(){
    compte = compte + 1;
    $('#compteur').text('Compteur: ' + compte);
  });
});
