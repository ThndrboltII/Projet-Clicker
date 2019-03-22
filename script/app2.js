$(document).ready(function() {
	$("#inventaire").on("click",item);
  $("#shop").on("click",magasin);
	$("#back").on("click",retour)

		function item(){
			$("#ouvrinventaire").css("visibility","visible");
			$("#ouvrshop").css("visibility", "hidden");
			$("#back").css("visibility", "visible");
		}

  	function magasin(){
			$("#ouvrshop").css("visibility","visible");
			$("#ouvrinventaire").css("visibility", "hidden");
			$("#back").css("visibility", "visible");
		}

		function retour(){
			$("#ouvrinventaire").css("visibility", "hidden");
			$("#ouvrshop").css("visibility", "hidden");
			$("#back").css("visibility", "hidden");
		}
});
