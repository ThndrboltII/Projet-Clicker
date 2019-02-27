$(document).ready(function(){
  var compte = 0;
  var compteur = document.getElementById("compteur");
  $('case').on("click",function(){
    compte = compte + 1;
    compteur.innerHTML = "compteur: " + compte
  });
});
